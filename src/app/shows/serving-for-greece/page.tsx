"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";

const TRAILER = { id: "UC0JFH25mag" };

const EPISODES = [
  { number: 1, videoId: "f3eQgKctNCY", thumb: "/images/shows/ep1.jpg" },
  { number: 2, videoId: "xaHmSpwxUG4", thumb: "/images/shows/ep2.jpg" },
  { number: 3, videoId: "b3yzRp4pyzk", thumb: "/images/shows/ep3.jpg" },
  { number: 4, videoId: "kNhAJiQrJKI", thumb: "/images/shows/ep4.jpg" },
  { number: 5, videoId: null, thumb: null },
  { number: 6, videoId: null, thumb: null },
];

function PlayButton({ size = "lg" }: { size?: "lg" | "sm" }) {
  const dim = size === "lg" ? "w-16 h-16" : "w-14 h-14";
  const icon = size === "lg" ? "w-7 h-7" : "w-6 h-6";
  return (
    <div
      className={`${dim} rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-black/70 group-hover:scale-110 transition-all duration-200`}
    >
      <svg className={`${icon} text-white ml-0.5`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function VideoCard({
  videoId,
  episodeNumber,
  thumb,
}: {
  videoId: string | null;
  episodeNumber?: number;
  thumb?: string | null;
}) {
  const [playing, setPlaying] = useState(false);

  const label = episodeNumber ? `Episode ${episodeNumber}` : "Trailer";

  const aspect = episodeNumber ? "aspect-[640/267]" : "aspect-video";

  // Coming Soon
  if (!videoId) {
    return (
      <div className={`relative ${aspect} rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black flex flex-col items-center justify-center`}>
        {episodeNumber && (
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-700 mb-2">
            Episode {episodeNumber}
          </p>
        )}
        <p className="text-base font-semibold text-neutral-600">Coming Soon</p>
      </div>
    );
  }

  // Playing
  if (playing) {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={label}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  // Thumbnail with image
  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative rounded-2xl overflow-hidden border border-neutral-800 w-full cursor-pointer hover:border-neutral-600 transition-colors"
    >
      {/* Thumbnail image — sizes the container */}
      {thumb ? (
        <img
          src={thumb}
          alt={label}
          className="w-full h-auto block"
        />
      ) : (
        <div className={`${aspect} bg-gradient-to-br from-neutral-900 via-neutral-950 to-black`} />
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:via-black/30 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayButton size={episodeNumber ? "sm" : "lg"} />
      </div>

      {/* Episode label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-1">
          Serving for Greece
        </p>
        <p className="text-sm lg:text-base font-semibold text-white">{label}</p>
      </div>
    </button>
  );
}

export default function ServingForGreecePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Production &middot; Mini documentary series &middot; In production
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            Serving for Greece
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            A six part docu series following Niko and Christie Fronimos as they
            represent Greece at the Pickleball World Cup, blending elite sport,
            family, and faith.
          </p>
        </div>
      </section>

      {/* Trailer — uses YouTube thumbnail */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-8">
            Trailer
          </p>
          <VideoCard
            videoId={TRAILER.id}
            thumb={`https://img.youtube.com/vi/${TRAILER.id}/maxresdefault.jpg`}
          />
        </div>
      </section>

      {/* Episodes */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-16 lg:py-20">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-8">
            Episodes
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {EPISODES.map((ep) => (
              <VideoCard
                key={ep.number}
                videoId={ep.videoId}
                episodeNumber={ep.number}
                thumb={ep.thumb}
              />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
