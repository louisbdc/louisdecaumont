import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  keywords: string[]
  readingTime: string
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  keywords: string[]
  readingTime: string
}

function getPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    keywords: data.keywords ?? [],
    readingTime: stats.text.replace("read", "de lecture"),
    content,
  }
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getPostFiles()

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "")
    const filePath = path.join(BLOG_DIR, file)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      keywords: data.keywords ?? [],
      readingTime: stats.text.replace("read", "de lecture"),
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getAllSlugs(): string[] {
  return getPostFiles().map((file) => file.replace(".mdx", ""))
}
