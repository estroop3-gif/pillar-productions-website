import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact | Pillar Productions",
  description:
    "Get in touch with Pillar Productions. Separate inquiry paths for licensing, brand partnerships, and general contact.",
  openGraph: {
    title: "Contact | Pillar Productions",
    description:
      "Get in touch with Pillar Productions for licensing, brand partnerships, or general inquiries.",
  },
};

const licensingFields = [
  { name: "company", label: "Company Name", required: true },
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
      "Other",
    ],
  },
  { name: "territory", label: "Territory", required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "message", label: "Message (optional)", type: "textarea" as const },
];

const brandFields = [
  { name: "brand", label: "Brand", required: true },
  {
    name: "category",
    label: "Category",
    type: "select" as const,
    required: true,
    options: [
      "Automotive",
      "Consumer Goods",
      "Financial Services",
      "Food and Beverage",
      "Health and Wellness",
      "Hospitality",
      "Retail",
      "Sports and Outdoors",
      "Technology",
      "Travel",
      "Faith and Nonprofit",
      "Other",
    ],
  },
  { name: "name", label: "Your Name", required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "message", label: "Message (optional)", type: "textarea" as const },
];

const generalFields = [
  { name: "name", label: "Your Name", required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "subject", label: "Subject", required: true },
  { name: "message", label: "Message", type: "textarea" as const, required: true },
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Contact
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            Let&apos;s talk.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            Choose the inquiry type that fits your needs. Each form routes to the right team so you get a faster, more relevant response.
          </p>
        </div>
      </section>

      {/* Licensing inquiry */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                For broadcasters, streamers, and platforms
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight mb-6">
                Licensing inquiry
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Interested in licensing Pillar originals for your platform or territory? Start here.
              </p>
            </div>
            <div>
              <InquiryForm
                formType="licensing"
                fields={licensingFields}
                submitLabel="Submit Licensing Inquiry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand inquiry */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                For brands and agencies
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight mb-6">
                Brand inquiry
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Exploring a branded series or partnership? Tell us about your brand and goals.
              </p>
            </div>
            <div>
              <InquiryForm
                formType="brand-inquiry"
                fields={brandFields}
                submitLabel="Submit Brand Inquiry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* General contact */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                For everything else
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight mb-6">
                General contact
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Press, partnerships, hub proposals, or anything else. We will route your message to the right person.
              </p>
            </div>
            <div>
              <InquiryForm
                formType="general-contact"
                fields={generalFields}
                submitLabel="Send Message"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
