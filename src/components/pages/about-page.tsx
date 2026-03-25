"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Palette,
  Zap,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Développement Full-Stack",
    description:
      "Next.js, React, Flutter, Node.js, Python. Du site vitrine à l'app mobile, je conçois et développe des solutions complètes, robustes et maintenables.",
  },
  {
    icon: Palette,
    title: "Design & UX",
    description:
      "Maquettes Figma, intégration pixel-perfect, animations Framer Motion. Des interfaces pensées pour convertir, pas juste pour être belles.",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description:
      "Core Web Vitals au vert, SEO technique, audit Lighthouse 90+. Vos clients vous trouvent, votre site charge vite.",
  },
  {
    icon: Users,
    title: "De A à Z",
    description:
      "Cahier des charges, développement, déploiement, formation. Un seul interlocuteur du premier échange à la mise en production.",
  },
]

const timeline = [
  {
    icon: Briefcase,
    period: "2025 — Aujourd'hui",
    title: "Développeur Full-Stack : Le Carnet en Ligne",
    description:
      "Refonte complète d'une plateforme SaaS (site + serveur) en Next.js et Node.js. Architecture, API, déploiement.",
  },
  {
    icon: Briefcase,
    period: "2024 — Aujourd'hui",
    title: "Développeur Freelance",
    description:
      "Création de sites web et d'applications mobiles pour des clients variés. Plus de 12 projets livrés dans 5 secteurs différents.",
  },
  {
    icon: Briefcase,
    period: "2023 — 2024",
    title: "Développeur Mobile Flutter",
    description:
      "Conception d'applications Flutter en Clean Architecture (BLoC, Freezed). Deux projets livrés de zéro en production.",
  },
  {
    icon: Briefcase,
    period: "2022",
    title: "Stage Développeur : Visiativ",
    description:
      "Première immersion en entreprise tech. Product Lifecycle Management, travail en équipe, méthodologies agiles.",
  },
  {
    icon: GraduationCap,
    period: "2020 — 2025",
    title: "Epitech Lyon (Bac +5)",
    description:
      "Expert en ingénierie logicielle (RNCP niveau 7). Projets en C, C++, Python, web, mobile et IA.",
  },
]

const techStack = [
  { name: "Next.js / React", level: 95 },
  { name: "Flutter / Dart", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "PostgreSQL / Prisma", level: 80 },
  { name: "SEO / Performance", level: 85 },
  { name: "Figma / UI Design", level: 80 },
]

function AutoRevealParagraph({
  text,
}: {
  readonly text: string
}) {
  const words = text.split(" ")

  return (
    <div className="relative">
      <p className="text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl md:leading-relaxed">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="mr-[0.3em] inline-block"
            initial={{ opacity: 0.15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.4,
              delay: i * 0.04,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  )
}

function SkillBar({
  name,
  level,
  delay,
}: {
  readonly name: string
  readonly level: number
  readonly delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="neu-inset h-2 overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </motion.div>
  )
}

export function AboutPage() {
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
            À propos
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Créer des expériences
            <br />
            qui marquent
          </h1>
        </motion.div>

        {/* Scrollytelling intro */}
        <div className="mb-24">
          <AutoRevealParagraph text="Développeur full-stack basé à Lyon, formé à Epitech. Je conçois des sites web et des applications mobiles qui convertissent. Next.js, Flutter, SEO, performance. Plus de 12 projets livrés pour des clients allant du SaaS à l'artisan." />
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Ce que je fais
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass neu-shadow rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-muted p-2.5">
                  <skill.icon size={22} className="text-foreground" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <div className="mb-24">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Stack technique
          </h2>
          <div className="glass neu-shadow rounded-2xl p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {techStack.map((tech, i) => (
                <SkillBar
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Parcours
          </h2>
          <div className="flex flex-col gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass neu-shadow flex items-center gap-5 rounded-2xl p-6"
              >
                <item.icon size={20} className="shrink-0 text-muted-foreground" />
                <div>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    {item.period}
                  </p>
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
