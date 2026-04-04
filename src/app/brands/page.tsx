import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InquiryForm from "@/components/InquiryForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Get Your Brand Into Film and TV | Brand Entertainment Production Partner",
  description:
    "Want to get your brand into film and television? Pillar Productions is a producing partner for brands exploring branded series, docuseries, and cinematic content. We help you choose the right format, develop the concept, and produce at cinematic quality. Book a free strategy call.",
  alternates: { canonical: "https://www.pillarproductions.tv/brands" },
  openGraph: {
    title: "How to Get Your Brand Into Film and TV | Pillar Productions",
    description:
      "Pillar Productions helps brands enter entertainment through branded series, docuseries, and films. Free strategy call available.",
  },
};

const consultationFields = [
  { name: "name", label: "Your Name", required: true },
  { name: "company", label: "Company", required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "phone", label: "Phone", placeholder: "Optional" },
  { name: "website", label: "Website", placeholder: "Optional" },
  {
    name: "industry",
    label: "Industry",
    type: "select" as const,
    required: true,
    options: [
      "Automotive",
      "Consumer Goods",
      "Food and Beverage",
      "Health and Wellness",
      "Hospitality and Travel",
      "Outdoor and Lifestyle",
      "Sports",
      "Technology",
      "Faith and Nonprofit",
      "Tourism",
      "Agency",
      "Other",
    ],
  },
  {
    name: "projectType",
    label: "Project Type",
    type: "select" as const,
    required: true,
    options: [
      "Scripted Film",
      "Unscripted Series",
      "Docuseries",
      "Branded Entertainment",
      "Not Sure Yet",
    ],
  },
  {
    name: "budgetRange",
    label: "Budget Range",
    type: "select" as const,
    required: true,
    options: [
      "Under 50K",
      "50K to 150K",
      "150K to 500K",
      "500K to 1M",
      "Over 1M",
      "Not sure yet",
    ],
  },
  {
    name: "timeline",
    label: "Timeline",
    type: "select" as const,
    required: true,
    options: [
      "This quarter",
      "Next quarter",
      "Within six months",
      "Within twelve months",
      "Flexible",
    ],
  },
  {
    name: "outcome",
    label: "Desired Outcome",
    type: "textarea" as const,
    required: true,
    placeholder: "What outcome are you hoping this project creates for your brand?",
  },
  {
    name: "details",
    label: "Additional Details",
    type: "textarea" as const,
    placeholder: "Tell us about what you're exploring",
  },
];

const audiences = [
  {
    title: "Founders and CEOs",
    desc: "Leaders who want their brand to stand for something bigger through cinematic storytelling.",
  },
  {
    title: "CMOs and Marketing Teams",
    desc: "Marketing leaders looking beyond ads for content that builds lasting brand equity.",
  },
  {
    title: "Agencies",
    desc: "Creative and media agencies seeking a production partner for branded entertainment campaigns.",
  },
  {
    title: "Tourism Boards",
    desc: "Destination organizations that want to showcase their region through compelling original series.",
  },
  {
    title: "Outdoor and Lifestyle Brands",
    desc: "Brands rooted in adventure, sport, and culture looking for stories that match their identity.",
  },
  {
    title: "Faith-Aligned Organizations",
    desc: "Mission-driven organizations that want cinematic content with depth and spiritual awareness.",
  },
];

const capabilities = [
  {
    title: "Choosing the right format",
    desc: "Scripted film vs unscripted series vs docuseries vs custom. We help you find the format that fits your brand and audience.",
  },
  {
    title: "Developing a concept that fits",
    desc: "We build stories around your brand, not the other way around. The concept starts with who you are.",
  },
  {
    title: "Making it cinematic, not promotional",
    desc: "Audiences watch because the story is worth watching. Your brand lives inside the world, not on top of it.",
  },
  {
    title: "Understanding producing partner models",
    desc: "Brand-funded, co-owned, or work-for-hire. We walk you through the deal structures so you can choose with clarity.",
  },
  {
    title: "Clarifying budget, scope, and rollout",
    desc: "What does it actually cost, how long does it take, and what does the process look like from first call to final delivery.",
  },
  {
    title: "Planning audience, story, and distribution",
    desc: "Who watches this, where does it live, and how does it reach people. Strategy before production.",
  },
];

const callDeliverables = [
  "Clarity on whether film or series is the right move",
  "Which format best fits your brand and audience",
  "Budget range and execution guidance",
  "How to think about story, audience, and distribution",
  "Concrete suggested next steps",
];

export default function BrandsPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            For Brands
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            Enter entertainment the right way.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl mb-10">
            Whether you are exploring a branded series, a feature film, a docuseries, or something you have not put a name to yet, Pillar Productions is the strategic production partner that helps brands create cinematic content audiences actually want to watch.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#who-this-is-for"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="who-this-is-for" className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Who this is for
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Built for brands ready to make something real.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            What we help with
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            From first question to first frame.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens on the Call */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            The strategy call
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 max-w-3xl">
            What you walk away with.
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl mb-12">
            This is not a sales pitch. It is a focused conversation designed to give you strategic clarity on whether and how entertainment content fits your brand.
          </p>
          <div className="max-w-2xl space-y-4">
            {callDeliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-neutral-950 rounded-xl p-5 border border-neutral-900"
              >
                <span className="mt-0.5 text-neutral-600 shrink-0">&#10003;</span>
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pillar Productions */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Why Pillar
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            A studio that builds with you.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              Pillar Productions is a multi-hub studio that builds original series and films at scale. We operate as a producing partner, not a vendor. That means we bring creative infrastructure, production capacity, and distribution thinking to every project from day one.
            </p>
            <p>
              Our story-first philosophy means the brand integration feels natural and cinematic. We build the world around your brand so the audience connects with the story and the brand together, not one at the expense of the other.
            </p>
            <p>
              If you want to explore specific deal structures for branded series,{" "}
              <Link
                href="/branded-series"
                className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
              >
                see how our branded series partnerships work
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                Start here
              </p>
              <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Start a conversation.
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                Tell us about your brand and what you are exploring. Our team will review your submission and follow up to schedule a strategy call.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                No commitment. No pitch deck. Just a real conversation about whether entertainment content is the right move for your brand and what that could look like.
              </p>
            </div>
            <div>
              <InquiryForm
                formType="brand-consultation"
                fields={consultationFields}
                submitLabel="Request Strategy Call"
              />
            </div>
          </div>

          {/* Calendly Inline Booking */}
          <div className="mt-20 pt-16 border-t border-neutral-900">
            <p className="text-center text-sm tracking-[0.2em] uppercase text-neutral-500 mb-10">
              Or book directly
            </p>
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Ready to explore what&apos;s possible?
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Book a free strategy call and find out if film, series, or branded entertainment is the right fit for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
            >
              Book a Free Strategy Call
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              General Inquiries
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
