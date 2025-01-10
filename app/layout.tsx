import type { Metadata } from "next";
import { Inter,  Roboto } from "next/font/google"; // Import the new fonts
import "./globals.css";

// Configure the new fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
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
        className={` ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
