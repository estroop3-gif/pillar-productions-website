"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
  height?: number;
}

export default function CalendlyEmbed({
  url = "https://calendly.com/estroop3/30min",
  height = 700,
}: CalendlyEmbedProps) {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const themed = `${url}?background_color=000000&text_color=ffffff&primary_color=ffffff`;

  return (
    <div
      className="calendly-inline-widget"
      data-url={themed}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
}
