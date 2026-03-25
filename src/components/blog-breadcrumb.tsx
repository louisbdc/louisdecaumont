import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  readonly title: string
}

export function BlogBreadcrumb({ title }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
    >
      <Link
        href="/"
        className="transition-colors duration-200 hover:text-foreground"
      >
        Accueil
      </Link>
      <ChevronRight size={12} className="shrink-0" />
      <Link
        href="/blog"
        className="transition-colors duration-200 hover:text-foreground"
      >
        Blog
      </Link>
      <ChevronRight size={12} className="shrink-0" />
      <span className="text-foreground/60 line-clamp-1">{title}</span>
    </nav>
  )
}
