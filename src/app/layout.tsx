import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.pillarproductionsusa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Pillar Productions | Brand Entertainment Production Partner for Film and TV",
    template: "%s | Pillar Productions",
  },
  description:
    "Pillar Productions helps brands get into film and television. We are a producing partner for branded series, docuseries, and cinematic content. Book a free strategy call to explore how to make a TV show or film for your brand.",
  keywords: [
    "brand entertainment production partner",
    "branded entertainment",
    "branded series production",
    "how to make a TV show",
    "how to make a film",
    "how to get into TV and film",
    "brand funded film",
    "brand funded TV show",
    "branded content production company",
    "producing partner for brands",
    "brand film production",
    "branded docuseries",
    "branded entertainment company",
    "brand storytelling",
    "cinematic branded content",
    "brand integration TV",
    "brand partnership film",
    "production company for brands",
    "TV show for brands",
    "film production for brands",
    "how to produce a TV series",
    "how to create a TV show for your brand",
    "brand entertainment strategy",
    "entertainment marketing",
    "branded content strategy",
    "brand to screen",
    "corporate film production",
    "original series production",
    "unscripted series production",
    "docuseries production company",
  ],
  authors: [{ name: "Pillar Productions" }],
  creator: "Pillar Productions",
  publisher: "Pillar Productions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Pillar Productions",
    title:
      "Pillar Productions | Brand Entertainment Production Partner for Film and TV",
    description:
      "We help brands get into film and television. Branded series, docuseries, and cinematic content — produced with story-first strategy. Book a free call.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pillar Productions | Brand Entertainment Production Partner",
    description:
      "We help brands get into film and television. Branded series, docuseries, and cinematic content — produced with story-first strategy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// Organization + VideoProductionCompany JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProductionCompany"],
      "@id": `${SITE_URL}/#organization`,
      name: "Pillar Productions",
      url: SITE_URL,
      description:
        "Pillar Productions is a brand entertainment production partner that helps brands get into film and television through branded series, docuseries, and cinematic content.",
      foundingLocation: {
        "@type": "Place",
        name: "Tampa, Florida",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Branded Entertainment",
        "Brand Funded Film Production",
        "TV Series Production",
        "Docuseries Production",
        "Brand Integration",
        "Branded Content Strategy",
        "Film Production for Brands",
        "Entertainment Marketing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Brand Entertainment Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Branded Series Production",
              description:
                "Full cinematic series production with natural brand integration. We build original shows where the brand lives inside the story.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Docuseries Production",
              description:
                "Character-driven documentary series built around sport, culture, and faith for brands looking to tell authentic stories.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Entertainment Strategy",
              description:
                "Free strategy calls to help brands determine the right format, budget, and approach for getting into film and television.",
            },
          },
        ],
      },
      location: [
        {
          "@type": "Place",
          name: "Tampa HQ",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tampa",
            addressRegion: "FL",
            addressCountry: "US",
          },
        },
        {
          "@type": "Place",
          name: "Abuja Hub",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abuja",
            addressCountry: "NG",
          },
        },
        {
          "@type": "Place",
          name: "McAllen Hub",
          address: {
            "@type": "PostalAddress",
            addressLocality: "McAllen",
            addressRegion: "TX",
            addressCountry: "US",
          },
        },
        {
          "@type": "Place",
          name: "Jackson Hub",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jackson",
            addressRegion: "MS",
            addressCountry: "US",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Pillar Productions",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
