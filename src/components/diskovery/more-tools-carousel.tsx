"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Copy, GitBranch, PieChart } from "lucide-react"

const tools = [
  {
    icon: PieChart,
    title: "Tableau de bord",
    description:
      "Une vue d'ensemble dès l'ouverture : espace utilisé et libre de chaque volume, et répartition de la place par type de fichier.",
  },
  {
    icon: Copy,
    title: "Doublons",
    description:
      "Détecte les fichiers en double, les regroupe et chiffre l'espace récupérable. Vous cochez les copies à supprimer, le reste est conservé.",
  },
  {
    icon: GitBranch,
    title: "Dépôts Git",
    description:
      "Retrouve tous vos dépôts Git sous un dossier, avec leur taille totale. Pratique pour repérer les vieux clones devenus énormes.",
  },
]

export function MoreToolsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function updateActive() {
    const el = trackRef.current
    if (!el) return
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let min = Infinity
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement
      const childCenter = c.offsetLeft + c.offsetWidth / 2
      const d = Math.abs(childCenter - center)
      if (d < min) {
        min = d
        closest = i
      }
    })
    setActive(closest)
  }

  function scrollToIndex(i: number) {
    const el = trackRef.current
    if (!el) return
    const child = el.children[i] as HTMLElement | undefined
    if (!child) return
    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    })
  }

  return (
    <div className="mt-12">
      <div
        ref={trackRef}
        onScroll={updateActive}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2 scrollbar-hide"
      >
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="w-[82%] shrink-0 snap-center rounded-2xl glass neu-shadow p-7 sm:w-[58%] lg:w-[31%]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <tool.icon size={20} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {tool.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          disabled={active === 0}
          className="rounded-xl border border-border p-2 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:text-foreground disabled:opacity-30"
          aria-label="Outil précédent"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {tools.map((tool, i) => (
            <button
              key={tool.title}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Aller à ${tool.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-foreground" : "w-2 bg-foreground/20"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(Math.min(tools.length - 1, active + 1))}
          disabled={active === tools.length - 1}
          className="rounded-xl border border-border p-2 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:text-foreground disabled:opacity-30"
          aria-label="Outil suivant"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
