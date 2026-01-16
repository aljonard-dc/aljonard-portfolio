import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aljonard Dela Cruz | Web Developer Portfolio",
    short_name: "Aljonard",
    description:
      "Personal portfolio of Aljonard Dela Cruz, a Web Developer specializing in Next.js, React, TypeScript and Tailwind CSS.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#dbecea",
    theme_color: "#629f9f",

    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },

      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },

      {
        src: "/favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },

      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
