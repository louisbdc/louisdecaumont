import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code2, ShoppingCart, Server, RefreshCw, Search, Shield, Zap, Users, CheckCircle2 } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

const PAGE_URL = "https://louisdecaumont.fr/developpeur-web-freelance-lyon"

export const metadata: Metadata = {
  title: "Développeur Web Freelance à Lyon — Louis de Caumont",
  description:
    "Développeur web freelance à Lyon, expert Next.js et React. Création de sites vitrines, e-commerce et applications SaaS sur mesure. Devis gratuit sous 48h.",
  alternates: { canonical: "/developpeur-web-freelance-lyon" },
  openGraph: {
    title: "Développeur Web Freelance à Lyon — Louis de Caumont",
    description:
      "Développeur web freelance à Lyon, expert Next.js et React. Sites sur mesure, performance et SEO inclus.",
    url: PAGE_URL,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Louis de Caumont — Développeur Web Freelance à Lyon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur Web Freelance à Lyon — Louis de Caumont",
    description:
      "Développeur web freelance à Lyon, expert Next.js et React. Sites sur mesure, performance et SEO inclus.",
    images: ["/og-image.png"],
  },
}

const services = [
  {
    icon: Code2,
    title: "Site vitrine sur mesure",
    description:
      "De 5 à 15 pages, design Figma personnalisé, SEO technique intégré et déploiement sur Vercel. Idéal pour cabinets, artisans et PME qui veulent un site professionnel qui convertit.",
    range: "3 000 – 8 000 €",
  },
  {
    icon: ShoppingCart,
    title: "Site e-commerce",
    description:
      "Boutique en ligne avec Stripe, gestion catalogue, panier et tunnel d'achat optimisé. Stack Next.js + Shopify Headless ou Stripe selon votre catalogue.",
    range: "8 000 – 25 000 €",
  },
  {
    icon: Server,
    title: "Application web et SaaS",
    description:
      "Plateforme complète : authentification, dashboard, base de données, API REST. Architecture pensée pour évoluer dès le départ. Idéal MVP et V1.",
    range: "10 000 – 40 000 €",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site existant",
    description:
      "Migration depuis WordPress, Wix ou Squarespace vers Next.js. Conservation du SEO existant, audit de performance et plan de redirection 301.",
    range: "4 000 – 12 000 €",
  },
]

const process = [
  {
    step: "01",
    title: "Brief et cadrage",
    description:
      "Échange gratuit de 30 à 60 minutes pour comprendre votre activité, vos objectifs et votre cible. Je rédige ensuite un devis détaillé avec périmètre, livrables et délais.",
  },
  {
    step: "02",
    title: "Design Figma",
    description:
      "Maquettes haute fidélité de chaque page. Vous validez le design avant tout développement. Aller-retour sur les écrans clés jusqu'à votre validation complète.",
  },
  {
    step: "03",
    title: "Développement Next.js",
    description:
      "Code propre, typé en TypeScript, avec SEO technique et accessibilité dès la première ligne. Vous suivez l'avancement via une preview en ligne mise à jour à chaque commit.",
  },
  {
    step: "04",
    title: "Mise en ligne et formation",
    description:
      "Déploiement sur Vercel, configuration du domaine, certificats SSL, redirections SEO. Formation pour gérer votre contenu en autonomie. Garantie corrective de 30 jours après livraison.",
  },
]

const stackPillars = [
  {
    icon: Zap,
    title: "Performance native",
    description:
      "Next.js sert des pages pré-rendues en HTML statique : 0,5 à 1,5 seconde de chargement contre 3 à 6 secondes pour un WordPress moyen. Core Web Vitals au vert d'office.",
  },
  {
    icon: Search,
    title: "SEO technique inclus",
    description:
      "Sitemap automatique, balises meta dynamiques, données structurées JSON-LD, URLs propres, hreflang, canonical. Tout ce qui prend des semaines à configurer ailleurs est natif.",
  },
  {
    icon: Shield,
    title: "Sécurité et maintenance",
    description:
      "Pas de plugins à mettre à jour, pas de base de données exposée, pas de page d'admin publique. Un site Next.js statique a une surface d'attaque quasi nulle.",
  },
]

const audiences = [
  {
    title: "Entrepreneurs et fondateurs",
    description:
      "Vous lancez une activité ou un produit à Lyon et vous voulez un site qui projette une image professionnelle dès le premier jour. Vous cherchez un interlocuteur unique, technique et stratégique.",
  },
  {
    title: "Dirigeants de PME",
    description:
      "Votre site actuel est lent, daté ou ne génère plus de leads. Vous voulez une refonte avec un retour mesurable sur l'investissement, sans dépendance à une agence pour chaque modification.",
  },
  {
    title: "Porteurs de projet SaaS",
    description:
      "Vous avez une idée de plateforme ou un MVP à lancer. Vous voulez un développeur qui pense produit et architecture, pas juste exécution. Stack moderne, scalable, prête pour la levée.",
  },
]

const faq = [
  {
    question: "Pourquoi choisir un développeur freelance à Lyon plutôt qu'une agence ?",
    answer:
      "Sur un projet identique, un freelance facture 2 à 3 fois moins cher qu'une agence parce que 80 à 90 % du budget va dans la production (design, code) plutôt que dans les frais de structure. Vous gardez aussi un interlocuteur unique du premier échange à la mise en production : pas de chef de projet intermédiaire, pas de transmissions ratées.",
  },
  {
    question: "Quels sont les délais pour créer un site web ?",
    answer:
      "Un site vitrine sur mesure prend 3 à 6 semaines, du brief à la mise en ligne. Un e-commerce demande 4 à 8 semaines. Un projet SaaS V1 prend 3 à 6 mois selon le périmètre. Ces délais incluent design Figma, développement, tests et formation.",
  },
  {
    question: "Travaillez-vous avec des clients hors de Lyon ?",
    answer:
      "Oui. Je suis basé à Lyon mais 100 % de mes projets se déroulent à distance, avec un point hebdomadaire en visio et des previews en ligne mises à jour en continu. J'ai travaillé pour des clients à Paris, en Belgique et en Suisse. Les rendez-vous physiques restent possibles dans la région lyonnaise.",
  },
  {
    question: "Le SEO est-il inclus dans la prestation ?",
    answer:
      "Le SEO technique est toujours inclus : structure HTML sémantique, balises meta dynamiques, données structurées Schema.org, sitemap automatique, performance optimisée, mobile-first. La stratégie de contenu (rédaction d'articles, recherche de mots-clés sur le long terme) est un accompagnement séparé selon vos besoins.",
  },
  {
    question: "Quelle technologie utilisez-vous et pourquoi ?",
    answer:
      "Next.js avec React et TypeScript pour le front. Tailwind CSS pour le design. Vercel pour l'hébergement. Cette stack offre les meilleures performances du marché, un excellent référencement, une sécurité native et des coûts de maintenance quasi nuls. Pour les projets SaaS, j'ajoute Node.js, PostgreSQL et Prisma côté serveur.",
  },
  {
    question: "Que se passe-t-il après la livraison ?",
    answer:
      "Vous bénéficiez d'une garantie corrective de 30 jours pour tout bug ou ajustement. Au-delà, je propose un forfait maintenance mensuel optionnel pour les évolutions, mises à jour de contenu et accompagnement SEO. Vous pouvez aussi reprendre la main complètement : le code vous appartient, sans aucune dépendance à mes outils.",
  },
  {
    question: "Quels secteurs d'activité avez-vous déjà accompagnés ?",
    answer:
      "Plus de 12 projets livrés dans 5 secteurs : SaaS, santé, BTP, finance et mobilité. Chaque secteur a ses contraintes propres (RGPD santé, normes BTP, conformité finance) et je m'adapte à votre métier en amont du projet.",
  },
  {
    question: "Comment se passe la facturation ?",
    answer:
      "Acompte de 30 % à la signature du devis, 30 % à la validation du design Figma, 40 % à la mise en ligne. Pour les projets SaaS, le découpage se fait par sprint de deux semaines. Tous les devis sont fixes et détaillés : pas de surprise en cours de route.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Développeur web freelance",
  name: "Développeur Web Freelance à Lyon",
  description:
    "Création de sites web sur mesure à Lyon : site vitrine, e-commerce, application SaaS. Stack Next.js, React, TypeScript. Performance et SEO inclus.",
  provider: {
    "@type": "ProfessionalService",
    name: "Louis de Caumont",
    url: "https://louisdecaumont.fr",
    image: "https://louisdecaumont.fr/og-image.png",
    email: "l2caumont@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
  },
  areaServed: [
    { "@type": "City", name: "Lyon" },
    { "@type": "Country", name: "France" },
  ],
  url: PAGE_URL,
  offers: services.map((s) => ({
    "@type": "Offer",
    name: s.title,
    description: s.description,
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description: s.range,
    },
  })),
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

export default function FreelanceLyonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb items={[{ label: "Développeur Web Freelance à Lyon" }]} className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" />

          {/* Hero */}
          <header className="mb-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Freelance · Lyon · Next.js
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Développeur web freelance à Lyon
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Sites web et applications sur mesure pour entreprises lyonnaises et
              françaises. Stack Next.js et React, performance native, SEO
              technique inclus. 12 projets livrés dans 5 secteurs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                Discuter de votre projet
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#projets"
                className="glass neu-shadow-sm inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-black/5"
              >
                Voir mes réalisations
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <Stat value="12+" label="Projets livrés" />
              <Stat value="5" label="Secteurs" />
              <Stat value="48 h" label="Réponse devis" />
              <Stat value="100 %" label="Sur mesure" />
            </div>
          </header>

          {/* Intro contextuelle avec photo Lyon */}
          <section className="mb-24 grid gap-10 md:grid-cols-[1fr_320px] md:items-start">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Un développeur freelance, pas une agence
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <p>
                  Basé à Lyon et formé à Epitech, je conçois des sites web et des
                  applications mobiles depuis 2024. Mes clients sont des
                  entrepreneurs, dirigeants de PME et porteurs de projet SaaS qui
                  veulent une présence digitale professionnelle, performante et
                  durable, sans payer le prix d&apos;une agence.
                </p>
                <p>
                  Travailler avec un freelance, c&apos;est travailler directement
                  avec celui qui code votre site. Pas de commercial pour vendre,
                  pas de chef de projet pour transmettre, pas de stagiaire pour
                  exécuter. Vous parlez à la personne qui prend les décisions
                  techniques et qui les implémente. Le résultat : moins
                  d&apos;intermédiaires, plus de qualité, et un budget concentré
                  sur la production plutôt que sur la structure.
                </p>
                <p>
                  Pour comprendre comment se construit un devis et où va votre
                  argent, mon article{" "}
                  <Link
                    href="/blog/combien-coute-un-site-internet"
                    className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                  >
                    Prix d&apos;un site internet en 2026
                  </Link>{" "}
                  détaille les fourchettes du marché par type de prestataire.
                </p>
              </div>
            </div>
            <figure className="hidden md:block">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/photos/service-hero-lyon-building.jpg"
                  alt="Façade en verre d'un immeuble moderne photographié en contre-plongée, en noir et blanc"
                  width={640}
                  height={960}
                  className="h-auto w-full object-cover"
                  sizes="320px"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">
                Photo de{" "}
                <a
                  href="https://unsplash.com/@__jonathan__?utm_source=louisdecaumont.fr&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-muted-foreground/40 underline-offset-2 hover:text-foreground"
                >
                  Jonathan Vinial
                </a>{" "}
                sur{" "}
                <a
                  href="https://unsplash.com/photos/a-black-and-white-photo-of-a-tall-building-KrPMdG7v_nI?utm_source=louisdecaumont.fr&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-muted-foreground/40 underline-offset-2 hover:text-foreground"
                >
                  Unsplash
                </a>
              </figcaption>
            </figure>
          </section>

          {/* Services */}
          <section className="mb-24">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mes services
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Quatre offres principales, toutes développées sur mesure en
              Next.js avec design Figma personnalisé.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="glass neu-shadow flex flex-col rounded-2xl p-6"
                >
                  <div className="mb-4 inline-flex w-fit rounded-lg bg-muted p-2.5">
                    <service.icon size={22} className="text-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Tarifs : {service.range}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-24">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comment je travaille
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Quatre étapes claires, du premier échange à la mise en ligne.
              Vous savez où en est votre projet à chaque instant.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-2xl border border-border p-6">
                  <p className="mb-3 text-sm font-mono text-muted-foreground">
                    {item.step}
                  </p>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Pourquoi Next.js */}
          <section className="mb-24">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pourquoi Next.js et React
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Une stack moderne et éprouvée, choisie pour ses performances et
              sa pérennité. Pour aller plus loin, lisez{" "}
              <Link
                href="/blog/next-js-vs-wordpress"
                className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
              >
                Next.js vs WordPress
              </Link>
              .
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {stackPillars.map((pillar) => (
                <div key={pillar.title} className="glass neu-shadow rounded-2xl p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-muted p-2.5">
                    <pillar.icon size={22} className="text-foreground" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Pour qui */}
          <section className="mb-24">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pour qui je travaille
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Trois profils types, mais chaque projet reste unique. Si vous ne
              vous reconnaissez dans aucun, parlons-en quand même.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {audiences.map((audience) => (
                <div
                  key={audience.title}
                  className="rounded-2xl border border-border p-6"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-muted p-2.5">
                    <Users size={22} className="text-foreground" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Ce qui est inclus */}
          <section className="mb-24">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ce qui est inclus dans chaque projet
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Sans option, sans supplément caché. Dix livrables systématiques
              quel que soit le projet.
            </p>
            <div className="glass neu-shadow rounded-2xl p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Design Figma sur mesure validé avant développement",
                  "Code Next.js et TypeScript propre, commenté et versionné",
                  "Responsive parfait sur mobile, tablette et desktop",
                  "SEO technique : balises meta, sitemap, JSON-LD, canonical",
                  "Performance Lighthouse 90+ sur les Core Web Vitals",
                  "Accessibilité conforme aux standards WCAG niveau AA",
                  "Hébergement Vercel et certificat SSL configurés",
                  "Connexion à votre Google Analytics et Search Console",
                  "Formation à la gestion de votre contenu (1 h en visio)",
                  "Garantie corrective de 30 jours après mise en ligne",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-foreground"
                    />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-24">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-border p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-foreground">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="rounded-3xl border border-border bg-card p-10 text-center sm:p-14">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Échange gratuit de 30 minutes pour comprendre votre besoin et
              vous donner une estimation précise. Réponse sous 48 heures, sans
              engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Me contacter
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </article>
    </>
  )
}

function Stat({ value, label }: { readonly value: string; readonly label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-foreground sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  )
}
