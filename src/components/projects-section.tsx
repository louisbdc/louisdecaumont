"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { projects, type Project } from "@/data/projects"

const categories = [
  { value: "all", label: "Tous" },
  { value: "saas", label: "SaaS" },
  { value: "webapp", label: "Web App" },
  { value: "vitrine", label: "Vitrine" },
  { value: "nutrition", label: "Santé" },
] as const

type CategoryValue = (typeof categories)[number]["value"]

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
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  function updateScrollButtons() {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  function scrollBy(direction: "left" | "right") {
    const el = trackRef.current
    if (!el) return
    const cardWidth = window.innerWidth < 640 ? 340 : 420
    const amount = direction === "left" ? -cardWidth - 24 : cardWidth + 24
    el.scrollBy({ left: amount, behavior: "smooth" })
  }


  return (
    <section id="projets" className="relative py-20">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projets sélectionnés
            </h2>
            <p className="mt-2 text-muted-foreground">
              {filteredProjects.length} projets · glissez pour explorer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="glass neu-shadow-sm flex gap-1 overflow-x-auto rounded-2xl p-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.value)
                    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" })
                  }}
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

            <div className="hidden gap-1.5 sm:flex">
              <button
                type="button"
                onClick={() => scrollBy("left")}
                disabled={!canScrollLeft}
                className="rounded-xl border border-border p-2 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:text-foreground disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
                aria-label="Projet précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy("right")}
                disabled={!canScrollRight}
                className="rounded-xl border border-border p-2 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:text-foreground disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
                aria-label="Projet suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        onScroll={updateScrollButtons}
        data-lenis-prevent
        className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide"
      >
        {filteredProjects.map((project) => (
          <div key={project.url} className="shrink-0">
            <ProjectCardContent project={project} />
          </div>
        ))}

        {/* End card — CTA */}
        <div className="shrink-0">
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
        </div>
      </div>
    </section>
  )
}
