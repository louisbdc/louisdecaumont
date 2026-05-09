import type { Metadata } from "next"
import { AboutPage } from "@/components/pages/about-page"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "À propos — Louis de Caumont | Développeur Web Freelance",
  description:
    "Développeur web freelance à Lyon, je conçois des sites web performants et sur mesure. Next.js, React, TypeScript. Du site vitrine à la plateforme SaaS.",
  alternates: {
    canonical: "/a-propos",
  },
}

export default function APropos() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 pt-32">
        <Breadcrumb items={[{ label: "À propos" }]} className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" />
      </div>
      <AboutPage />
    </>
  )
}
