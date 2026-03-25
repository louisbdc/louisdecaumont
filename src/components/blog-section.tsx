import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { ArrowRight, Clock, Calendar } from "lucide-react"

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BlogSection() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Blog
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Derniers articles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Guides pratiques sur le développement web, le SEO et la performance.
          </p>
        </div>

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

                <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h3>

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

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            Voir tous les articles
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
