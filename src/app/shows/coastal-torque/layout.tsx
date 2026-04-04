import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coastal Torque | Motorsports Docuseries",
  description:
    "Coastal Torque is a motorsports docuseries set in Sarasota, following builders, drivers, and dreamers chasing speed, community, and calling on and off the track. A Pillar Productions original series.",
  alternates: { canonical: "https://www.pillarproductions.tv/shows/coastal-torque" },
  openGraph: {
    title: "Coastal Torque | Pillar Productions",
    description:
      "A motorsports docuseries following builders, drivers, and dreamers in Sarasota.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
