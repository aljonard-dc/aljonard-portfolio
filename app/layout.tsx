import type { Metadata } from "next";
import { Inter, Mukta, Manrope } from "next/font/google"; // Import the new fonts
import "./globals.css";

// Configure the new fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600"], // Regular and Semi-Bold
});

export const metadata: Metadata = {
  title: "Aljonard's Portfolio",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can also add meta tags here or links for favicons */}
      </head>
      <body
        className={`${inter.variable} ${mukta.variable} ${manrope.variable} antialiased`} // Apply all fonts
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif", // Default to Inter
        }}
      >
        {children}
      </body>
    </html>
  );
}
