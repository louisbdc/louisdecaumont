import Link from "next/link"
import { CookieSettingsButton } from "@/components/cookie-settings-button"

const footerLinkClass =
  "text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"

const Separator = () => <span className="text-muted-foreground/30">|</span>

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">
              Louis de Caumont
            </p>
            <p className="text-sm text-muted-foreground">
              Développeur web freelance à Lyon.
              <br />
              Sites Next.js sur mesure, SEO et performance.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Site</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/a-propos" className={footerLinkClass}>
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/developpeur-web-freelance-lyon" className={footerLinkClass}>
                  Freelance à Lyon
                </Link>
              </li>
              <li>
                <Link href="/blog" className={footerLinkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">
              Derniers articles
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/blog/migrer-wordpress-vers-next-js"
                  className={footerLinkClass}
                >
                  Migrer WordPress vers Next.js
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/pourquoi-mon-site-est-lent"
                  className={footerLinkClass}
                >
                  Pourquoi votre site est lent
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/delai-creation-site-web"
                  className={footerLinkClass}
                >
                  Délai création site web
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Contact</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:l2caumont@gmail.com"
                  className={footerLinkClass}
                >
                  l2caumont@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/louisbdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/epitech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Louis de Caumont. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/mentions-legales" className={footerLinkClass}>
              Mentions légales & Privacy Policy
            </Link>
            <Separator />
            <CookieSettingsButton />
            <Separator />
            <p className="text-sm text-muted-foreground">
              Fait avec Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
