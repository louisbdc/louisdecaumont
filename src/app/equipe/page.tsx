import type { Metadata } from "next"
import { TeamPage } from "@/components/pages/team-page"

export const metadata: Metadata = {
  title: "Équipe — Louis de Caumont | Développeur Web Freelance",
  description:
    "Découvrez les compétences derrière vos projets web. Développement, design, SEO et accompagnement : un réseau de talents orchestré pour chaque projet.",
  alternates: {
    canonical: "/equipe",
  },
}

export default function Equipe() {
  return <TeamPage />
}
