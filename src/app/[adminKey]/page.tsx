// Force dynamic rendering — this route checks env vars at runtime
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface Contact {
  email: string;
  first_name?: string;
  created_at?: string;
}

interface Props {
  params: Promise<{ adminKey: string }>;
}

async function fetchLeads(): Promise<{ contacts: Contact[]; error?: string }> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

  if (!RESEND_API_KEY || !AUDIENCE_ID) {
    return { contacts: [], error: "Resend is not configured. Set RESEND_API_KEY and RESEND_AUDIENCE_ID environment variables." };
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
      {
        headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return { contacts: [], error: `Failed to fetch contacts (${res.status}).` };
    }

    const data = await res.json();
    return { contacts: data.data || [] };
  } catch (err) {
    console.error("Leads fetch error:", err);
    return { contacts: [], error: "Failed to connect to Resend API." };
  }
}

export default async function AdminDashboard({ params }: Props) {
  const { adminKey } = await params;

  const ADMIN_KEY = process.env.ADMIN_API_KEY || "";
  if (!ADMIN_KEY || adminKey !== ADMIN_KEY) {
    const { notFound } = await import("next/navigation");
    notFound();
  }

  const { contacts, error } = await fetchLeads();

  // Sort by most recent first
  const sorted = [...contacts].sort((a, b) => {
    const da = a.created_at ? new Date(a.created_at).getTime() : 0;
    const db = b.created_at ? new Date(b.created_at).getTime() : 0;
    return db - da;
  });

  // Group by source for stats
  const sourceCounts: Record<string, number> = {};
  for (const c of contacts) {
    const src = c.first_name || "unknown";
    sourceCounts[src] = (sourceCounts[src] || 0) + 1;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
            Admin
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            Leads
          </h1>
          <p className="text-neutral-500 text-sm">
            {contacts.length} total captured email{contacts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Error state */}
        {error && (
          <div className="rounded-xl border border-red-900/50 bg-red-950/30 p-6 mb-8">
            <p className="text-red-400 text-sm font-medium mb-1">Configuration Error</p>
            <p className="text-red-400/70 text-sm">{error}</p>
          </div>
        )}

        {/* Source breakdown */}
        {Object.keys(sourceCounts).length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {Object.entries(sourceCounts)
              .sort(([, a], [, b]) => b - a)
              .map(([source, count]) => (
                <div
                  key={source}
                  className="bg-neutral-950 border border-neutral-900 rounded-xl p-4"
                >
                  <p className="text-2xl font-semibold">{count}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">
                    {source}
                  </p>
                </div>
              ))}
          </div>
        )}

        {/* Leads table */}
        {sorted.length > 0 ? (
          <div className="border border-neutral-900 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="px-5 py-3 text-left text-xs uppercase tracking-[0.1em] text-neutral-500 font-medium">
                    Email
                  </th>
                  <th className="px-5 py-3 text-left text-xs uppercase tracking-[0.1em] text-neutral-500 font-medium">
                    Source
                  </th>
                  <th className="px-5 py-3 text-left text-xs uppercase tracking-[0.1em] text-neutral-500 font-medium">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((c, i) => (
                  <tr
                    key={c.email + i}
                    className="border-b border-neutral-900 last:border-b-0 hover:bg-neutral-950/50"
                  >
                    <td className="px-5 py-3 text-sm">{c.email}</td>
                    <td className="px-5 py-3 text-sm text-neutral-400">
                      {c.first_name || "—"}
                    </td>
                    <td className="px-5 py-3 text-sm text-neutral-500">
                      {c.created_at
                        ? new Date(c.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !error && (
            <div className="text-center py-16 text-neutral-600">
              <p className="text-lg">No leads yet.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
