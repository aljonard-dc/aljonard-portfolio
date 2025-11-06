import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Aljonard's Portfolio",
    template: "%s | Aljonard Dela Cruz",
  },
  description:
    "Explore the professional portfolio of Aljonard Dela Cruz — a passionate Web Developer specializing in Next.js, React, and Tailwind CSS. Discover modern and minimalist web projects, clean design, and efficient code.",
  keywords: [
    "Aljonard Dela Cruz",
    "Aljonard Dela Cruz Portfolio",
    "Aljonard Portfolio",
    "Aljonard Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Web Developer Philippines",
    "Tailwind CSS Developer",
    "Modern Portfolio",
  ],
  authors: [{ name: "Aljonard Dela Cruz" }],
  creator: "Aljonard Dela Cruz",
  publisher: "Aljonard Dela Cruz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Aljonard Dela Cruz | Web Developer Portfolio",
    description:
      "Showcasing the creative and technical works of Aljonard Dela Cruz — building responsive, modern, and efficient websites with Next.js and React.",
    url: "https://aljonarddelacruz.vercel.app",
    siteName: "Aljonard Dela Cruz Portfolio", 
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://aljonarddelacruz.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Aljonard Dela Cruz Portfolio Preview",
      },
    ],
  },
  verification: {
    google: "qgs_Q3VI5z3X2Y6joN9QTUADCiMjdtPv-zAVNxs2uAQ",
  },
  metadataBase: new URL("https://aljonarddelacruz.vercel.app"),
  alternates: {
    canonical: "https://aljonarddelacruz.vercel.app",
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
