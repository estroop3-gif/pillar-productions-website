import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const OWNER_EMAIL = process.env.INQUIRY_EMAIL || "estroop3@gmail.com";
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

// Simple rate limiter
const rateMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter((t) => now - t < 60_000);
  if (timestamps.length >= 5) return true;
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { email?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, source } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // 1. Add to Resend Audience (stores the lead)
  if (RESEND_API_KEY && AUDIENCE_ID) {
    try {
      await fetch(
        `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            first_name: source || "guide",
            unsubscribed: false,
          }),
        }
      );
    } catch (err) {
      console.error("Resend audience error:", err);
    }
  }

  // 2. Send instant notification to owner
  if (RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Pillar Productions <onboarding@resend.dev>",
          to: OWNER_EMAIL,
          subject: `New Lead: ${email}`,
          text: `New email capture on pillarproductionsusa.com\n\nEmail: ${email}\nSource: ${source || "unknown"}\nTime: ${new Date().toISOString()}`,
          html: `<h2>New Lead Captured</h2><table style="border-collapse:collapse"><tr><td style="padding:4px 12px 4px 0;color:#999">Email</td><td style="padding:4px 0">${email}</td></tr><tr><td style="padding:4px 12px 4px 0;color:#999">Source</td><td style="padding:4px 0">${source || "unknown"}</td></tr><tr><td style="padding:4px 12px 4px 0;color:#999">Time</td><td style="padding:4px 0">${new Date().toISOString()}</td></tr></table>`,
        }),
      });
    } catch (err) {
      console.error("Notification email error:", err);
    }
  }

  return NextResponse.json({ success: true });
}
