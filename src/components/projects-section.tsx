"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion"
import { ExternalLink } from "lucide-react"
import { projects, type Project } from "@/data/projects"

const CARD_GAP = 24
const PADDING = 24
const ARC_HEIGHT = 60

function getCardWidth() {
  if (typeof window === "undefined") return 340
  return window.innerWidth < 640 ? Math.min(340, window.innerWidth - 48) : 420
}

const categories = [
  { value: "all", label: "Tous" },
  { value: "saas", label: "SaaS" },
  { value: "webapp", label: "Web App" },
  { value: "vitrine", label: "Vitrine" },
  { value: "nutrition", label: "Santé" },
] as const

type CategoryValue = (typeof categories)[number]["value"]

function ArcCard({
  children,
  index,
  trackX,
}: {
  readonly children: React.ReactNode
  readonly index: number
  readonly trackX: MotionValue<number>
}) {
  // Use MotionValues instead of useState to avoid setState-during-render
  const cardY = useMotionValue(0)
  const cardScale = useMotionValue(1)

  useMotionValueEvent(trackX, "change", (latestX) => {
    if (typeof window === "undefined") return
    const cardW = getCardWidth()
    const viewportCenter = window.innerWidth / 2
    const cardLeft = PADDING + index * (cardW + CARD_GAP) + latestX
    const cardCenter = cardLeft + cardW / 2
    const distFromCenter = (cardCenter - viewportCenter) / viewportCenter
    const clamped = Math.max(-1, Math.min(1, distFromCenter))
    cardY.set(-ARC_HEIGHT * (1 - clamped * clamped))
    cardScale.set(0.96 + 0.08 * (1 - clamped * clamped))
  })

  return (
    <motion.div
      className="shrink-0"
      style={{
        y: cardY,
        scale: cardScale,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  )
}

function ProjectCardContent({ project }: { readonly project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-[440px] w-[calc(100vw-48px)] max-w-[340px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl glass neu-shadow transition-shadow duration-500 hover:shadow-xl sm:h-[480px] sm:max-w-[420px]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.screenshot}
          alt={`Capture d'écran de ${project.title}`}
          fill
          sizes="420px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg">
            Visiter le site
            <ExternalLink size={14} />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
            {project.title}
          </h3>
          <ExternalLink
            size={14}
            className="mt-1.5 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-accent"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="neu-inset rounded-lg px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all")
  const [scrollRange, setScrollRange] = useState(0)

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const totalCards = filteredProjects.length + 1

  useEffect(() => {
    const measure = () => {
      const cardW = getCardWidth()
      const totalWidth =
        totalCards * cardW + (totalCards - 1) * CARD_GAP + PADDING * 2
      const viewportWidth = window.innerWidth
      setScrollRange(Math.max(0, totalWidth - viewportWidth))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [totalCards])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Use callback form so it always reads the latest scrollRange
  const scrollRangeRef = useRef(0)
  scrollRangeRef.current = scrollRange
  const x = useTransform(scrollYProgress, (v) => -v * scrollRangeRef.current)

  const sectionHeight = Math.max(
    200,
    100 + Math.ceil(totalCards / 2.5) * 100
  )

  return (
    <section
      ref={containerRef}
      id="projets"
      className="relative"
      style={{ height: `${sectionHeight}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24">
        <div className="px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Projets sélectionnés
              </h2>
              <p className="mt-2 text-muted-foreground">
                {filteredProjects.length} projets · scroll pour explorer
              </p>
            </div>

            <div className="glass neu-shadow-sm flex gap-1 overflow-x-auto rounded-2xl p-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`cursor-pointer whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-black/5 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-1 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-end gap-6 px-6">
            {filteredProjects.map((project, i) => (
              <ArcCard key={project.url} index={i} trackX={x}>
                <ProjectCardContent project={project} />
              </ArcCard>
            ))}

            {/* End card — CTA */}
            <ArcCard index={filteredProjects.length} trackX={x}>
              <div className="flex h-[440px] w-[calc(100vw-48px)] max-w-[340px] shrink-0 flex-col items-center justify-center rounded-2xl glass neu-shadow sm:h-[480px] sm:max-w-[420px]">
                <p className="mb-4 text-lg font-semibold text-foreground">
                  Un projet en tête ?
                </p>
                <a
                  href="#contact"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                >
                  Discutons-en
                </a>
              </div>
            </ArcCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
