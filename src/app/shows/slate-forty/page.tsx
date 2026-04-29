"use client";

import PageShell from "@/components/PageShell";

export default function SlateFortyPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Flagship &middot; Feature film &middot; In development
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            Forty
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            A man walks into the Georgia woods to fast for forty days and hear
            from God, but as hunger, silence, dreams, and guilt begin to unravel
            him, he must face the terrifying possibility that surrender may cost
            him the life he was trying to save.
          </p>
        </div>
      </section>

      {/* Poster */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-8">
            Poster
          </p>
          <div className="max-w-md">
            <img
              src="/images/shows/slate-forty-poster.png"
              alt="Forty — In the silence, everything surfaces. A Pillar Productions film."
              className="w-full rounded-2xl border border-neutral-900"
            />
          </div>
        </div>
      </section>

      {/* Trailer */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-8">
            Trailer
          </p>
          <div className="bg-neutral-950 rounded-2xl border border-neutral-900 aspect-video flex flex-col items-center justify-center">
            <p className="text-sm text-neutral-600 tracking-wide mb-2">
              Trailer coming soon
            </p>
            <p className="text-xs text-neutral-700">
              Request catalog access for preview materials
            </p>
          </div>
        </div>
      </section>

      {/* Synopsis */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-8">
            Synopsis
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-neutral-400 leading-relaxed">
              After years of building a life he thought God wanted for him, a man
              drives to a remote stretch of the Georgia woods, leaves his phone
              in the car, and walks into the trees with nothing but water and a
              journal. His plan is simple: fast for forty days, pray, and listen.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              The first days are quiet. Hunger sharpens his senses. The forest
              feels almost generous. But as the weeks press on, the silence
              begins to fill with things he did not invite — vivid dreams,
              fragments of memory, conversations with people who are not there.
              His body weakens. His certainty fractures. The line between
              revelation and delusion thins until he can no longer tell which
              voice is God&rsquo;s and which is his own.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Forty is a psychological and spiritual drama about a man who
              goes looking for God in the wilderness and discovers that the
              hardest thing to surrender is not comfort, but control. It asks
              what happens when faith demands more than you planned to give — and
              whether the answer you receive is worth the life it costs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Details */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-8">
            Key Details
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Format", value: "Feature Film" },
              { label: "Genre", value: "Psychological drama / faith" },
              { label: "Setting", value: "Georgia woods" },
              { label: "Status", value: "In development" },
              { label: "Written / Directed / Filmed by", value: "Parker Stroop" },
              { label: "Music", value: "William Antoniou" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-600 mb-2">
                  {item.label}
                </p>
                <p className="text-base text-neutral-300 font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
