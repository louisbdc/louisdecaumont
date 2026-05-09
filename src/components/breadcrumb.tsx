import Link from "next/link"
import { ChevronRight } from "lucide-react"

const SITE_URL = "https://louisdecaumont.fr"

export interface BreadcrumbItem {
  readonly label: string
  readonly href?: string
}

interface BreadcrumbProps {
  readonly items: ReadonlyArray<BreadcrumbItem>
  readonly className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length === 0) return null

  const allItems: BreadcrumbItem[] = [{ label: "Accueil", href: "/" }, ...items]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Fil d'Ariane"
        className={
          className ??
          "mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
        }
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-1.5"
              >
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground/60 line-clamp-1">
                    {item.label}
                  </span>
                )}
                {!isLast && <ChevronRight size={12} className="shrink-0" />}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
