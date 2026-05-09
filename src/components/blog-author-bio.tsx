import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogAuthorBio() {
  return (
    <aside
      aria-label="À propos de l'auteur"
      className="my-16 flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
    >
      <Image
        src="/louis-de-caumont.webp"
        alt="Louis de Caumont, développeur web freelance à Lyon"
        width={96}
        height={112}
        className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
      />
      <div className="flex-1">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          À propos de l&apos;auteur
        </p>
        <p className="text-base font-semibold text-foreground">
          Louis de Caumont
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Développeur web freelance à Lyon, formé à Epitech. 12+ projets livrés
          en Next.js, React et Flutter dans 5 secteurs : SaaS, santé, BTP,
          finance, mobilité.
        </p>
        <Link
          href="/a-propos"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
        >
          Voir mon parcours et ma méthode
          <ArrowRight size={14} />
        </Link>
      </div>
    </aside>
  )
}
