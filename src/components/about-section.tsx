"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, Palette, Zap, Users } from "lucide-react"

const paragraph =
  "Développeur full-stack freelance. Je conçois des sites et des apps qui convertissent. Next.js, Flutter, SEO, performance. Plus de 12 projets livrés."

const words = paragraph.split(" ")

function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  })

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl py-12">
      <p className="text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl md:leading-relaxed">
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return <Word key={`${word}-${i}`} word={word} range={[start, end]} progress={scrollYProgress} />
        })}
      </p>
    </div>
  )
}

function Word({
  word,
  range,
  progress,
}: {
  readonly word: string
  readonly range: readonly [number, number]
  readonly progress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const opacity = useTransform(progress, [range[0], range[1]], [0.15, 1])
  const blur = useTransform(progress, [range[0], range[1]], [4, 0])
  const filter = useTransform(blur, (v) => `blur(${v}px)`)

  return (
    <motion.span style={{ opacity, filter }} className="inline-block mr-[0.3em] transition-colors">
      {word}
    </motion.span>
  )
}

const skills = [
  {
    icon: Code2,
    title: "Développement",
    description: "Next.js, React, TypeScript, Node.js",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Interfaces sur mesure, UX pensée",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Sites rapides, SEO optimisé",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description: "De la conception au lancement",
  },
]

export function AboutSection() {
  return (
    <section id="a-propos" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          À propos
        </motion.h2>

        <ScrollRevealText />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass neu-shadow group rounded-2xl p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-lg bg-muted p-2.5">
                <skill.icon size={24} className="text-foreground" />
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
