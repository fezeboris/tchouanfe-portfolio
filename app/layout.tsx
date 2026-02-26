import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Viewport settings for mobile responsiveness
export const viewport: Viewport = {
  themeColor: "#6366f1", // Your brand indigo color
  width: "device-width",
  initialScale: 1,
};

// 2. Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Tchouanfe Boris | Full-Stack & Mobile App Developer",
    template: "%s | Tchouanfe Boris",
  },
  description:
    "Expert Full-Stack Web and Mobile App Developer specialized in MERN Stack, Next.js, and React Native. Crafting high-performance digital experiences.",
  keywords: [
    "Tchouanfe Boris",
    "Boris Tchouanfe ",
    "Tchouanfe feze Boris ",
    "Full-Stack Developer",
    "React Native Developer",
    "Mobile App Developer Cameroon",
    "MERN Stack Expert",
    "Next.js Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Tchouanfe Boris" }],
  creator: "Tchouanfe Boris",
  metadataBase: new URL("https://www.tchouanfeboris.com"), // Replace with your actual domain when deployed

  // Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tchouanfeboris.com",
    title: "Tchouanfe Boris | Full-Stack & Mobile App Developer",
    description: "Building modern web and mobile applications with precision and speed.",
    siteName: "Tchouanfe Boris Portfolio",

    images: [
      {
        url: "/logo.png", // Create a 1200x630 image and put it in /public
        width: 1200,
        height: 630,
        alt: "Tchouanfe Boris Portfolio Preview",
      },
    ],
  },

  // Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "Tchouanfe Boris | Full-Stack Developer",
    description: "Modern Web & Mobile App solutions using React, Node, and React Native.",
    creator: "@BTchouanfe", // Your Twitter handle
    images: ["/logo.png"],
  },

  // Robots (Tell search engines to index the site)
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

  // Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand/30 selection:text-brand`}
      >
        {children}
        {/* We add the WhatsApp button here so it's available site-wide */}
        <WhatsAppButton />
      </body>
    </html>
  );
}