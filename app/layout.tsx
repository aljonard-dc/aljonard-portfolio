import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import the new fonts
import "./globals.css";

// Configure the new fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export const metadata: Metadata = {
  title: "Aljonard's Portfolio",
  description: "Modern & Minimalist Portfolio",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-dark.svg',
        href: '/logo-dark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-light.svg',
        href: '/logo-light.svg',
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={` ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
