"use client"

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/equipe", label: "Équipe" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

/*
 * Magnetic link — the text subtly follows the cursor on hover.
 */
function MagneticLink({
  href,
  label,
  isActive,
}: {
  readonly href: string
  readonly label: string
  readonly isActive: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15,
    })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-foreground ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`}
    >
      <motion.span
        className="inline-block"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        {label}
      </motion.span>
    </Link>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [showIndicator, setShowIndicator] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLUListElement>(null)

  const { scrollYProgress } = useScroll()

  // Track scroll for shrink effect
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrollProgress(v)
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sliding indicator — measure the active link position
  useEffect(() => {
    if (!navRef.current) return
    const activeLink = navRef.current.querySelector(
      `[data-active="true"]`
    ) as HTMLElement | null
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      })
      setShowIndicator(true)
    } else {
      setShowIndicator(false)
    }
  }, [pathname])

  const closeMenu = useCallback(() => setMobileMenuOpen(false), [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen, closeMenu])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "glass-header" : "bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Aller au contenu principal
      </a>

      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo — stagger entrance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/"
            className={`font-semibold tracking-tight text-foreground transition-all duration-300 ${
              scrolled ? "text-base" : "text-lg"
            }`}
          >
            Louis de Caumont
          </Link>
        </motion.div>

        {/* Desktop nav — staggered entrance + magnetic links + sliding indicator */}
        <ul
          ref={navRef}
          className="relative hidden items-center gap-1 md:flex"
        >
          {/* Sliding indicator pill */}
          {showIndicator && (
            <motion.div
              className="absolute top-0 h-full rounded-xl bg-black/5"
              layoutId="nav-indicator"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}

          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              data-active={pathname === link.href}
            >
              <MagneticLink
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          type="button"
          className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-all duration-200 hover:bg-black/5 hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuOpen ? "mobile-menu" : undefined}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
        <motion.div
          className="h-full origin-left bg-foreground/20"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu principal"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-black/5 hover:text-foreground ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
