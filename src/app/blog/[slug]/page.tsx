import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"
import { BlogArticle } from "@/components/blog-article"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} — Louis de Caumont`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "fr_FR",
      publishedTime: post.date,
      authors: ["Louis de Caumont"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Louis de Caumont",
      url: "https://louisdecaumont.fr",
    },
    publisher: {
      "@type": "Person",
      name: "Louis de Caumont",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://louisdecaumont.fr/blog/${slug}`,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://louisdecaumont.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://louisdecaumont.fr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://louisdecaumont.fr/blog/${slug}`,
      },
    ],
  }

  const schemas: Record<string, unknown>[] = [articleJsonLd, breadcrumbJsonLd]

  if (post.faq.length > 0) {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }
    schemas.push(faqJsonLd)
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BlogArticle post={post} />
    </>
  )
}
