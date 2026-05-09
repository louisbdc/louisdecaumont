import type { Metadata } from "next"
import { ContactPage } from "@/components/pages/contact-page"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Contact — Louis de Caumont | Développeur Web Freelance",
  description:
    "Contactez Louis de Caumont pour discuter de votre projet web. Développeur freelance spécialisé Next.js et React. Réponse sous 48h, devis gratuit.",
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 pt-32">
        <Breadcrumb items={[{ label: "Contact" }]} className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" />
      </div>
      <ContactPage />
    </>
  )
}
