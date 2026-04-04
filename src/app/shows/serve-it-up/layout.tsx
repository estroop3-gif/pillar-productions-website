import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serve It Up | Pickleball Competition Reality Series",
  description:
    "Serve It Up is a competition reality series where twelve contestants — six pros and six amateurs — compete across a full season of pickleball. A Pillar Productions original.",
  alternates: { canonical: "https://www.pillarproductionsusa.com/shows/serve-it-up" },
  openGraph: {
    title: "Serve It Up | Pillar Productions",
    description:
      "A pickleball competition reality series from Pillar Productions.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
