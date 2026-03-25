import type { Metadata } from "next"
import { ContactPage } from "@/components/pages/contact-page"

export const metadata: Metadata = {
  title: "Contact — Louis de Caumont | Développeur Web Freelance",
  description:
    "Contactez Louis de Caumont pour discuter de votre projet web. Développeur freelance spécialisé Next.js et React. Réponse sous 48h, devis gratuit.",
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  return <ContactPage />
}
