import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { ArrowRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog Dev Web, SEO & Performance — Louis de Caumont",
  description:
    "Articles sur le développement web, Next.js, React, SEO et la création de sites performants. Guides pratiques pour entrepreneurs et décideurs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Dev Web, SEO & Performance — Louis de Caumont",
    description:
      "Articles sur le développement web, Next.js, React, SEO et la création de sites performants.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Blog Louis de Caumont" }],
  },
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-20">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Guides pratiques sur le développement web, le SEO et la performance.
          Pour entrepreneurs et décideurs qui veulent faire les bons choix
          techniques.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">Aucun article pour le moment.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg sm:p-8"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Lire l&apos;article
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
