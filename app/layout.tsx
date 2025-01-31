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

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo-light.png" type="png"/>
        {/* You can also add meta tags here or links for favicons */}
      </head>
      <body
        className={` ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
