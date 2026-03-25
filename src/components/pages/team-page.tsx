"use client"

import { motion } from "framer-motion"
import { Code2, Paintbrush, TrendingUp, Headphones } from "lucide-react"

interface TeamMember {
  readonly name: string
  readonly role: string
  readonly description: string
  readonly icon: typeof Code2
  readonly expertise: readonly string[]
}

const teamMembers: readonly TeamMember[] = [
  {
    name: "Louis de Caumont",
    role: "Lead Développeur & Fondateur",
    description:
      "Architecte technique et développeur full-stack. Je conçois la structure, le code et la vision de chaque projet. Mon objectif : des sites performants, maintenables et beaux.",
    icon: Code2,
    expertise: [
      "Next.js",
      "React",
      "TypeScript",
      "Architecture",
      "DevOps",
    ],
  },
  {
    name: "Design Studio",
    role: "Direction Artistique",
    description:
      "Collaboration avec des designers freelance pour les identités visuelles, les maquettes UI/UX et les assets graphiques. Chaque projet bénéficie d'un regard créatif dédié.",
    icon: Paintbrush,
    expertise: ["UI/UX", "Figma", "Branding", "Motion Design", "Illustration"],
  },
  {
    name: "Growth & SEO",
    role: "Référencement & Performance",
    description:
      "Optimisation SEO technique, stratégie de contenu et analytics. Chaque site est construit pour être visible et performant sur les moteurs de recherche.",
    icon: TrendingUp,
    expertise: [
      "SEO Technique",
      "Analytics",
      "Core Web Vitals",
      "Contenu",
      "Conversion",
    ],
  },
  {
    name: "Support Client",
    role: "Accompagnement & Suivi",
    description:
      "Un suivi personnalisé tout au long du projet et après la livraison. Formation, maintenance et évolutions : vous n'êtes jamais seul.",
    icon: Headphones,
    expertise: [
      "Gestion de projet",
      "Formation",
      "Maintenance",
      "Support",
      "Évolutions",
    ],
  },
]

const values = [
  {
    title: "Sur mesure",
    description:
      "Pas de templates. Chaque ligne de code est écrite pour votre projet.",
  },
  {
    title: "Transparence",
    description:
      "Communication claire, devis détaillés, pas de surprises en cours de route.",
  },
  {
    title: "Qualité",
    description:
      "Code propre, tests, performance. Pas de compromis sur la qualité technique.",
  },
  {
    title: "Réactivité",
    description:
      "Réponse sous 48h, livraisons dans les délais, disponibilité réelle.",
  },
]

export function TeamPage() {
  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Équipe
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Les compétences
            <br />
            derrière vos projets
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Un réseau de talents spécialisés, orchestré pour chaque projet.
            Développement, design, SEO et accompagnement. Tout est couvert.
          </p>
        </motion.div>

        {/* Team members */}
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Notre équipe
        </h2>
        <div className="mb-24 grid gap-6 sm:grid-cols-2">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass neu-shadow group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="shrink-0 rounded-lg bg-muted p-2.5">
                  <member.icon size={24} className="text-foreground" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {member.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="neu-inset rounded-lg px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Nos valeurs
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass neu-shadow-sm rounded-2xl p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
