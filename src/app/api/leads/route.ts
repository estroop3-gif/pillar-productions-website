import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";
const ADMIN_KEY = process.env.ADMIN_API_KEY || "";

export async function GET(request: NextRequest) {
  // Protect with a simple API key
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
    return NextResponse.json(data);
  } catch (err) {
    console.error("Leads fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch leads." },
      { status: 500 }
    );
  }
}
