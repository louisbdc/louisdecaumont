import type { Metadata } from "next"
import { AboutPage } from "@/components/pages/about-page"

export const metadata: Metadata = {
  title: "À propos — Louis de Caumont | Développeur Web Freelance",
  description:
    "Développeur web freelance à Lyon, je conçois des sites web performants et sur mesure. Next.js, React, TypeScript. Du site vitrine à la plateforme SaaS.",
  alternates: {
    canonical: "/a-propos",
  },
}

export default function APropos() {
  return <AboutPage />
}
