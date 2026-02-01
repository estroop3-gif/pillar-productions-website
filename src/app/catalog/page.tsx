import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Catalog and Screeners | Pillar Productions",
  description:
    "Request access to the Pillar Productions catalog and screener library. Available for qualified broadcasters, streamers, and platform partners.",
  openGraph: {
    title: "Catalog and Screeners | Pillar Productions",
    description:
      "Request access to the Pillar Productions catalog and screener library.",
  },
};

const catalogFields = [
  { name: "company", label: "Company Name", required: true },
  { name: "name", label: "Your Name", required: true },
  { name: "role", label: "Your Role", required: true },
  {
    name: "type",
    label: "I am requesting",
    type: "select" as const,
    required: true,
    options: [
      "Full catalog",
      "Screener access",
      "Both catalog and screeners",
    ],
  },
  {
    name: "platformType",
    label: "Platform Type",
    type: "select" as const,
    required: true,
    options: [
      "Broadcast Network",
      "Streaming Platform",
      "FAST Channel",
      "Airline",
      "Hotel",
      "Telco",
      "Brand / Agency",
      "Other",
    ],
  },
  { name: "territory", label: "Territory of Interest", placeholder: "e.g. North America, Sub Saharan Africa" },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "message", label: "Anything else (optional)", type: "textarea" as const },
];

export default function CatalogPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                Catalog and Screeners
              </p>
              <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
                Gated access for qualified buyers.
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                The Pillar catalog includes titles, synopses, episode counts, production status, and territory availability. Screener access provides secure viewing links for titles in consideration.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                Submit a request below and our team will follow up with access. Response time is typically within one business day.
              </p>

              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  What is included
                </p>
                <ul className="space-y-3 text-neutral-400 leading-relaxed">
                  <li>&bull; Full title list with synopses and episode counts</li>
                  <li>&bull; Production status and delivery timeline</li>
                  <li>&bull; Territory availability map</li>
                  <li>&bull; Technical specifications and deliverable formats</li>
                  <li>&bull; Secure screener links (on request)</li>
                </ul>
              </div>
            </div>
            <div>
              <InquiryForm
                formType="catalog-request"
                fields={catalogFields}
                submitLabel="Request Access"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
