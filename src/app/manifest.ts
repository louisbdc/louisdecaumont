import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Louis de Caumont — Développeur Web Freelance",
    short_name: "Louis de Caumont",
    description:
      "Louis de Caumont, développeur web freelance à Lyon. Création de sites performants sur mesure : site vitrine, SaaS, e-commerce.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#18181B",
    icons: [
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
