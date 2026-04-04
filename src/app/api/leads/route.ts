import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";
const ADMIN_KEY = process.env.ADMIN_API_KEY || "";

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!RESEND_API_KEY || !AUDIENCE_ID) {
    return NextResponse.json(
      { error: "Resend not configured." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
      {
        headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch contacts." },
        { status: 500 }
      );
    }

    const data = await res.json();
    const contacts = data.data || [];

    // Return a nice HTML page
    const rows = contacts
      .map(
        (c: { email: string; first_name?: string; created_at?: string }) =>
          `<tr>
            <td style="padding:8px 16px;border-bottom:1px solid #222;color:#fff">${c.email}</td>
            <td style="padding:8px 16px;border-bottom:1px solid #222;color:#999">${c.first_name || "-"}</td>
            <td style="padding:8px 16px;border-bottom:1px solid #222;color:#999">${c.created_at ? new Date(c.created_at).toLocaleDateString() : "-"}</td>
          </tr>`
      )
      .join("");

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Leads — Pillar Productions</title></head>
<body style="margin:0;padding:40px;background:#000;color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <h1 style="font-size:24px;font-weight:600;margin:0 0 8px 0">Pillar Productions Leads</h1>
  <p style="color:#999;margin:0 0 32px 0">${contacts.length} total</p>
  <table style="border-collapse:collapse;width:100%;max-width:700px">
    <tr>
      <th style="padding:8px 16px;border-bottom:2px solid #444;color:#999;text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Email</th>
      <th style="padding:8px 16px;border-bottom:2px solid #444;color:#999;text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Source</th>
      <th style="padding:8px 16px;border-bottom:2px solid #444;color:#999;text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Date</th>
    </tr>
    ${rows}
  </table>
</body></html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    console.error("Leads fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch leads." },
      { status: 500 }
    );
  }
}
