export interface Project {
  readonly title: string
  readonly description: string
  readonly url: string
  readonly screenshot: string
  readonly tags: readonly string[]
  readonly category: "vitrine" | "saas" | "nutrition" | "webapp"
}

export const projects: readonly Project[] = [
  {
    title: "Winter Mate",
    description:
      "Landing page pour une app mobile de ski. Analyse vidéo, challenges entre riders et communauté. 12 500+ utilisateurs.",
    url: "https://wintermate.vercel.app/",
    screenshot: "/screenshots/wintermate.webp",
    tags: ["Next.js", "Mobile App", "Sport", "Landing"],
    category: "webapp",
  },
  {
    title: "SparkHub",
    description:
      "Plateforme SaaS de gestion et d'automatisation pour entreprises. Dashboard complet avec analytics et outils de productivité.",
    url: "https://www.sparkhub.fr/",
    screenshot: "/screenshots/sparkhub.webp",
    tags: ["Next.js", "SaaS", "Dashboard", "Analytics"],
    category: "saas",
  },
  {
    title: "CycloCare",
    description:
      "Site vitrine pour un expert vélo B2B. Ateliers de réparation, flottes partagées et services pour entreprises et collectivités.",
    url: "https://cyclocare-maquette-by-stakon-2026.vercel.app/",
    screenshot: "/screenshots/cyclocare.webp",
    tags: ["Next.js", "Vitrine", "B2B", "Mobilité"],
    category: "vitrine",
  },
  {
    title: "Le Carnet en Ligne",
    description:
      "Plateforme SaaS de patrimoine familial. Généalogie, arbre familial et outils collaboratifs pour les familles francophones.",
    url: "https://lecarnetenligne.be/",
    screenshot: "/screenshots/lecarnetenligne.webp",
    tags: ["Next.js", "SaaS", "Généalogie", "Famille"],
    category: "webapp",
  },
  {
    title: "Arthur de Haut de Sigy",
    description:
      "Site vitrine élégant pour un professionnel, avec design soigné et navigation fluide.",
    url: "https://www.arthurdehautdesigy.fr/",
    screenshot: "/screenshots/arthur-de-haut-de-sigy.webp",
    tags: ["Next.js", "Vitrine", "Design", "SEO"],
    category: "vitrine",
  },
  {
    title: "Biographe Delphine de la Peyrière",
    description:
      "Site pour une biographe professionnelle. Design raffiné mettant en valeur le storytelling et les services proposés.",
    url: "https://www.biographedelphinedelapeyriere.fr/",
    screenshot: "/screenshots/biographe-delphine.webp",
    tags: ["Next.js", "Vitrine", "Écriture", "Design"],
    category: "vitrine",
  },
  {
    title: "Joconde Retraite",
    description:
      "Plateforme dédiée à l'accompagnement retraite. Interface claire et accessible pour les utilisateurs.",
    url: "https://www.joconderetraite.com/",
    screenshot: "/screenshots/joconde-retraite.webp",
    tags: ["Next.js", "Service", "Finance", "UX"],
    category: "vitrine",
  },
  {
    title: "Renov'Route",
    description:
      "Site professionnel pour une entreprise de rénovation routière. Présentation des services et réalisations.",
    url: "https://renov-route.com/",
    screenshot: "/screenshots/renov-route.webp",
    tags: ["Next.js", "BTP", "Vitrine", "Services"],
    category: "vitrine",
  },
  {
    title: "NutriFitness",
    description:
      "Application web dédiée à la nutrition et au fitness. Suivi personnalisé et plans alimentaires.",
    url: "https://nutrifitness.vercel.app/",
    screenshot: "/screenshots/nutrifitness.webp",
    tags: ["React", "Santé", "Fitness", "App"],
    category: "nutrition",
  },
  {
    title: "NutriFitness V2",
    description:
      "Version améliorée de NutriFitness avec nouvelles fonctionnalités et interface repensée.",
    url: "https://nutrifitness-delta.vercel.app/",
    screenshot: "/screenshots/nutrifitness-v2.webp",
    tags: ["React", "Santé", "Fitness", "V2"],
    category: "nutrition",
  },
  {
    title: "Nutritionniste Paris",
    description:
      "Site vitrine pour un cabinet de nutrition à Paris. Prise de rendez-vous et présentation des services.",
    url: "https://nutritionniste-paris.vercel.app/",
    screenshot: "/screenshots/nutritionniste-paris.webp",
    tags: ["Next.js", "Santé", "Vitrine", "Paris"],
    category: "nutrition",
  },
  {
    title: "Atelier Kunz",
    description:
      "Site vitrine pour un atelier d'artisan. Design mettant en valeur le savoir-faire et les créations.",
    url: "https://atelier-kunz.vercel.app/",
    screenshot: "/screenshots/atelier-kunz.webp",
    tags: ["Next.js", "Artisanat", "Vitrine", "Design"],
    category: "vitrine",
  },
]
