import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Louis de Caumont. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Blog
          </Link>
          <span className="text-muted-foreground/30">|</span>
          <Link
            href="/mentions-legales"
            className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Mentions légales & Privacy Policy
          </Link>
          <span className="text-muted-foreground/30">|</span>
          <p className="text-sm text-muted-foreground">
            Fait avec Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
