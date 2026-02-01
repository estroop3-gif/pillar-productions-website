import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Branded Series | Pillar Productions",
  description:
    "Partner with Pillar Productions to create a branded series. Story first integration, cinematic quality, and defined usage rights for your brand.",
  openGraph: {
    title: "Branded Series | Pillar Productions",
    description:
      "Partner with Pillar Productions to create a branded series. Story first integration, cinematic quality, and defined usage rights.",
  },
};

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
  { name: "goal", label: "Goal", required: true, placeholder: "What does success look like for this series?" },
  { name: "name", label: "Your Name", required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "message", label: "Message (optional)", type: "textarea" as const },
];

export default function BrandedSeriesPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Branded Series
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            Your brand inside a real show.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            Pillar builds original series with brand partners. Not ads. Not sponsored content. Full cinematic series where the brand lives naturally inside the story.
          </p>
        </div>
      </section>

      {/* What a branded series is */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            What this is
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Series, not commercials.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              A branded series is a full production, multi episode show built around a story the audience actually wants to watch. The brand is part of the world, not interrupting it.
            </p>
            <p>
              Think of it as owning a seat at the table of a show that lives on streaming, broadcast, or social, not a spot that runs before someone else&apos;s content.
            </p>
          </div>
        </div>
      </section>

      {/* Deal structures */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Deal structures
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Three ways to partner.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                Recommended
              </p>
              <h3 className="text-xl font-semibold mb-4">Brand funded, Pillar owned</h3>
              <p className="text-neutral-400 leading-relaxed">
                The brand funds production in exchange for integration, usage rights, and defined deliverables. Pillar retains ownership and distribution rights. The series lives on platforms and builds value over time.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                Joint venture
              </p>
              <h3 className="text-xl font-semibold mb-4">Co owned partnership</h3>
              <p className="text-neutral-400 leading-relaxed">
                Brand and Pillar co own the series. Revenue, distribution rights, and creative control are shared under a negotiated agreement. Best for brands with long term content strategies.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                Selective
              </p>
              <h3 className="text-xl font-semibold mb-4">Work for hire</h3>
              <p className="text-neutral-400 leading-relaxed">
                The brand owns the series outright. Pillar produces to spec. We take these selectively when the project aligns with our creative standards and the story is worth telling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration philosophy */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Integration
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Story first. Always.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              We do not bolt brands onto existing projects. We build the story and the brand presence together from day one so that the integration feels organic to the audience.
            </p>
            <p>
              This means the brand shows up in a way that strengthens the narrative instead of breaking it. Better for the viewer. Better for the brand.
            </p>
          </div>
        </div>
      </section>

      {/* What the brand receives */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Deliverables
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            What your brand receives.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Full series</h3>
              <p className="text-neutral-400 leading-relaxed">
                A complete multi episode series with your brand integrated naturally into the story, characters, and world.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Cutdowns and clips</h3>
              <p className="text-neutral-400 leading-relaxed">
                Social ready cutdowns, trailers, and highlight clips optimized for your brand channels and paid distribution.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Launch assets</h3>
              <p className="text-neutral-400 leading-relaxed">
                Key art, behind the scenes content, and press materials to support your launch and marketing efforts.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Defined usage rights</h3>
              <p className="text-neutral-400 leading-relaxed">
                Clear, negotiated rights for where and how the brand can use the content across its own channels, events, and campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand fit lanes */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Brand fit
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Categories we work in.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Automotive and motorsports", desc: "Speed, craft, and culture. Natural fit for our motorsports and adventure content." },
              { title: "Sports and outdoors", desc: "Competition, community, and movement. Stories that connect brands to athletes and fans." },
              { title: "Food and beverage", desc: "Gathering, tradition, and taste. Series built around the table and the people around it." },
              { title: "Health and wellness", desc: "Transformation, discipline, and care. Stories about people becoming who they are meant to be." },
              { title: "Faith and nonprofit", desc: "Mission driven organizations that want cinematic storytelling with depth and spiritual awareness." },
              { title: "Hospitality and travel", desc: "Place, discovery, and belonging. Series that take viewers somewhere real." },
            ].map((lane) => (
              <div key={lane.title} className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <h3 className="text-lg font-semibold mb-3">{lane.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{lane.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand inquiry form */}
      <section id="inquiry" className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                Brand inquiry
              </p>
              <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Start a conversation.
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Tell us about your brand and what you are looking to accomplish. Our team will follow up to explore fit and next steps.
              </p>
            </div>
            <div>
              <InquiryForm
                formType="brand-inquiry"
                fields={brandFields}
                submitLabel="Submit Inquiry"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
