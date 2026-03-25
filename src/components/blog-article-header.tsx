"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import type { BlogPostMeta } from "@/lib/blog"

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BlogArticleHeader({
  post,
}: Readonly<{ post: BlogPostMeta }>) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Retour au blog
        </Link>
      </motion.div>

      <motion.header
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <address className="not-italic">
            Par{" "}
            <a rel="author" href="/a-propos" className="font-medium text-foreground hover:underline">
              Louis de Caumont
            </a>
          </address>
          <span className="text-muted-foreground/30">|</span>
          <time dateTime={post.date} className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(post.date)}
          </time>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {keyword}
            </span>
          ))}
        </div>
      </motion.header>
    </>
  )
}
