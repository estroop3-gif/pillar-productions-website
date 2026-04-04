import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serving for Greece | Pickleball World Cup Documentary",
  description:
    "Serving for Greece is a six-part documentary series following Niko and Christie Fronimos as they represent Greece at the Pickleball World Cup, blending elite sport, family, and faith. A Pillar Productions original.",
  alternates: { canonical: "https://www.pillarproductionsusa.com/shows/serving-for-greece" },
  openGraph: {
    title: "Serving for Greece | Pillar Productions",
    description:
      "A documentary series following a couple representing Greece at the Pickleball World Cup.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
