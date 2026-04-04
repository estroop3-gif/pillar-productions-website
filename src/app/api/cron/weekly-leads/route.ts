import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";
const OWNER_EMAIL = process.env.INQUIRY_EMAIL || "estroop3@gmail.com";
const CRON_SECRET = process.env.CRON_SECRET || "";

export async function GET(request: NextRequest) {
  // Verify cron secret (Vercel sends this header)
  const authHeader = request.headers.get("authorization");
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!RESEND_API_KEY || !AUDIENCE_ID) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  // Fetch all contacts from Resend Audience
  let contacts: { email: string; first_name?: string; created_at?: string }[] =
    [];
  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
      { headers: { Authorization: `Bearer ${RESEND_API_KEY}` } }
    );
    if (res.ok) {
      const data = await res.json();
      contacts = data.data || [];
    }
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }

  if (contacts.length === 0) {
    return NextResponse.json({ message: "No contacts to report" });
  }

  // Build email
  const rows = contacts
    .map(
      (c) =>
        `<tr><td style="padding:4px 16px 4px 0;border-bottom:1px solid #222">${c.email}</td><td style="padding:4px 16px 4px 0;border-bottom:1px solid #222;color:#999">${c.first_name || "-"}</td><td style="padding:4px 0;border-bottom:1px solid #222;color:#999">${c.created_at ? new Date(c.created_at).toLocaleDateString() : "-"}</td></tr>`
    )
    .join("");

  const html = `
    <h2>Weekly Lead Report — Pillar Productions</h2>
    <p style="color:#999">Total leads: ${contacts.length}</p>
    <table style="border-collapse:collapse;width:100%">
      <tr style="text-align:left">
        <th style="padding:4px 16px 8px 0;border-bottom:2px solid #444;color:#999">Email</th>
        <th style="padding:4px 16px 8px 0;border-bottom:2px solid #444;color:#999">Source</th>
        <th style="padding:4px 0 8px 0;border-bottom:2px solid #444;color:#999">Date</th>
      </tr>
      ${rows}
    </table>
  `;

  const text = contacts
    .map(
      (c) =>
        `${c.email} | ${c.first_name || "-"} | ${c.created_at ? new Date(c.created_at).toLocaleDateString() : "-"}`
    )
    .join("\n");

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
        subject: `Weekly Lead Report — ${contacts.length} total leads`,
        text: `Weekly Lead Report\nTotal: ${contacts.length}\n\n${text}`,
        html,
      }),
    });
  } catch (err) {
    console.error("Failed to send digest:", err);
    return NextResponse.json(
      { error: "Failed to send digest" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    count: contacts.length,
  });
}
