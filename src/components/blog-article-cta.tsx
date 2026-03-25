"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function BlogArticleCTA() {
  return (
    <motion.div
      className="mt-16 rounded-2xl border border-border bg-card p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">
        Un projet en tête ?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Je conçois des sites sur mesure en Next.js, optimisés pour convertir et
        performer.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
      >
        Discutons de votre projet
      </Link>
    </motion.div>
  )
}
