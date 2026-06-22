import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

const BASE_URL = "https://louisdecaumont.fr"

const STATIC_LAST_MOD = new Date("2026-04-05")

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : STATIC_LAST_MOD

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/developpeur-web-freelance-lyon`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/a-propos`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: latestPostDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/projets/diskovery`, lastModified: new Date("2026-06-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes]
}
