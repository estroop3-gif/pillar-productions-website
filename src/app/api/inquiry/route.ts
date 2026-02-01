import { NextRequest, NextResponse } from "next/server";

const OWNER_EMAIL = process.env.INQUIRY_EMAIL || "estroop3@gmail.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

// Simple in-memory rate limiter: max 5 submissions per IP per minute
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW
  );
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

const VALID_FORM_TYPES = [
  "licensing",
  "brand-inquiry",
  "catalog-request",
  "screener-request",
  "general-contact",
];

const SUBJECT_MAP: Record<string, string> = {
  licensing: "Licensing Inquiry",
  "brand-inquiry": "Brand Inquiry",
  "catalog-request": "Catalog Request",
  "screener-request": "Screener Access Request",
  "general-contact": "General Contact",
};

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { formType, _hp, ...fields } = body;

  // Honeypot
  if (_hp) {
    return NextResponse.json({ success: true });
  }

  if (!formType || !VALID_FORM_TYPES.includes(formType)) {
    return NextResponse.json(
      { error: "Invalid form type." },
      { status: 400 }
    );
  }

  // Validate email if present
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Require email for all forms
  if (!fields.email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  const subject = `Pillar Productions: ${SUBJECT_MAP[formType] || "Inquiry"}`;
  const fieldLines = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const textBody = `New ${SUBJECT_MAP[formType] || "inquiry"} from the Pillar Productions website.\n\n${fieldLines}`;
  const htmlBody = `<h2>${SUBJECT_MAP[formType] || "Inquiry"}</h2><table style="border-collapse:collapse">${Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#999;vertical-align:top">${k}</td><td style="padding:4px 0">${v}</td></tr>`
    )
    .join("")}</table>`;

  // If Resend API key is configured, send email
  if (RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Pillar Productions <onboarding@resend.dev>",
          to: OWNER_EMAIL,
          subject,
          text: textBody,
          html: htmlBody,
          reply_to: fields.email,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json(
          { error: "Failed to send. Please try again." },
          { status: 500 }
        );
      }
    } catch (err) {
      console.error("Email send error:", err);
      return NextResponse.json(
        { error: "Failed to send. Please try again." },
        { status: 500 }
      );
    }
  } else {
    // Fallback: log to console so submissions are not lost
    console.log("=== INQUIRY RECEIVED ===");
    console.log("Subject:", subject);
    console.log("To:", OWNER_EMAIL);
    console.log(fieldLines);
    console.log("========================");
  }

  return NextResponse.json({ success: true });
}
