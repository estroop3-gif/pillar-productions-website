"use client";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export default function VideoEmbed({
  videoId,
  title = "Video",
}: VideoEmbedProps) {
  return (
    <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-900">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
