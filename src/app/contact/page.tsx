import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Pillar Productions | Licensing, Brand Partnerships, and Inquiries",
  description:
    "Get in touch with Pillar Productions about licensing original series, brand entertainment partnerships, press inquiries, or hub proposals. We help brands get into film and television.",
  alternates: { canonical: "https://www.pillarproductionsusa.com/contact" },
  openGraph: {
    title: "Contact Pillar Productions",
    description:
      "Reach out about licensing, brand partnerships, or general inquiries.",
  },
};

const contactFields = [
  { name: "name", label: "Your Name", required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "company", label: "Company", placeholder: "Optional" },
  {
    name: "inquiryType",
    label: "Inquiry Type",
    type: "select" as const,
    required: true,
    options: [
      "Licensing",
      "Brand Partnership",
      "Press",
      "Hub Proposal",
      "General",
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea" as const,
    required: true,
    placeholder: "Tell us what you are looking for",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Contact
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-12">
            Licensing, brand partnerships, press, or anything else. Send us a message and we will get back to you.
          </p>

          <InquiryForm
            formType="general-contact"
            fields={contactFields}
            submitLabel="Send Message"
          />
        </div>
      </section>
    </PageShell>
  );
}
