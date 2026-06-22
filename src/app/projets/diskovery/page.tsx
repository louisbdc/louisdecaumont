import type { Metadata } from "next"
import { DiskoveryPage } from "@/components/pages/diskovery-page"
import { getDownloads } from "@/lib/download-counter"

// ISR: the page (and the download count baked into it) is served from cache and
// regenerated at most once an hour. No per-view serverless cost.
export const revalidate = 3600

const PAGE_URL = "https://louisdecaumont.fr/projets/diskovery"
const DESCRIPTION =
  "Diskovery, l'app macOS native et open source pour analyser votre espace disque. 4 outils : exploration des dossiers, gros fichiers, node_modules et caches de build à nettoyer. Gratuit, pensé pour les développeurs."

export const metadata: Metadata = {
  title: "Diskovery — Analyseur d'espace disque macOS pour développeurs",
  description: DESCRIPTION,
  alternates: { canonical: "/projets/diskovery" },
  openGraph: {
    title: "Diskovery — Analyseur d'espace disque macOS gratuit",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diskovery — Analyseur d'espace disque pour macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diskovery — Analyseur d'espace disque macOS gratuit",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Diskovery",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "macOS 14+",
  description: DESCRIPTION,
  url: PAGE_URL,
  downloadUrl: `${PAGE_URL}`,
  softwareVersion: "1.0",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  author: {
    "@type": "Person",
    name: "Louis de Caumont",
    url: "https://louisdecaumont.fr",
  },
}

export default async function Page() {
  const downloadCount = await getDownloads()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DiskoveryPage downloadCount={downloadCount} />
    </>
  )
}
