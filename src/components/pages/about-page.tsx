"use client"

import Image from "next/image"
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
        {/* Header with photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16"
        >
          <div className="flex-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              À propos
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Créer des expériences
              <br />
              qui marquent
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Image
              src="/louis-de-caumont.webp"
              alt="Louis de Caumont"
              width={280}
              height={327}
              priority
              className="rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Scrollytelling intro */}
        <div className="mb-24">
          <AutoRevealParagraph text="Développeur full-stack basé à Lyon, formé à Epitech. Je conçois des sites web et des applications mobiles qui convertissent. Next.js, Flutter, SEO, performance. Plus de 12 projets livrés pour des clients allant du SaaS à l'artisan." />
        </div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Mon approche
          </h2>
          <div className="glass neu-shadow rounded-2xl p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Je crois qu&apos;un bon site web ne se limite pas à un joli design.
              Il doit charger vite, être trouvable sur Google, et surtout aider
              votre activité à se développer. Ma philosophie de travail repose sur
              trois piliers : la performance technique, la clarté du message et la
              mesure des résultats. Chaque décision de conception est guidée par
              les données et les objectifs concrets de votre entreprise.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Je privilégie les technologies modernes comme Next.js et React
              parce qu&apos;elles permettent de construire des sites rapides,
              accessibles et faciles à faire évoluer. Le SEO technique est
              intégré dès la première ligne de code, pas ajouté comme une couche
              après coup. Et parce que chaque projet est différent, je prends le
              temps de comprendre votre métier avant de proposer une solution.
              Pas de templates génériques, pas de fonctionnalités inutiles :
              uniquement ce qui sert votre croissance.
            </p>
          </div>
        </motion.div>

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
        <div className="mb-24">
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

        {/* Comment je travaille */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Comment je travaille
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Chaque projet est unique. Selon les besoins, je m&apos;appuie sur
            des partenaires de confiance pour garantir un haut niveau de qualité
            sur chaque volet. Vous gardez un interlocuteur unique du premier
            échange à la livraison.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Code2,
                title: "Développement",
                description:
                  "Architecture, code et déploiement. Next.js, React, Flutter, Node.js. Du site vitrine à la plateforme SaaS.",
              },
              {
                icon: Palette,
                title: "Direction artistique",
                description:
                  "Identités visuelles, maquettes UI/UX et assets graphiques. Chaque projet bénéficie d\u2019un regard créatif dédié.",
              },
              {
                icon: Zap,
                title: "SEO & Performance",
                description:
                  "Optimisation technique, stratégie de contenu et analytics. Chaque site est construit pour être visible et performant.",
              },
              {
                icon: Users,
                title: "Accompagnement",
                description:
                  "Suivi personnalisé tout au long du projet et après la livraison. Formation, maintenance et évolutions.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass neu-shadow rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-muted p-2.5">
                  <item.icon size={22} className="text-foreground" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mes valeurs */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Mes valeurs
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map((value, i) => (
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
