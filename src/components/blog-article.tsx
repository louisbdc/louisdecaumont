import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { BlogArticleHeader } from "@/components/blog-article-header"
import { BlogArticleCTA } from "@/components/blog-article-cta"
import { BlogFAQ } from "@/components/blog-faq"
import { BlogBreadcrumb } from "@/components/blog-breadcrumb"
import type { BlogPost } from "@/lib/blog"

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-foreground/80" {...props} />
  ),
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http")
    if (isExternal) {
      return (
        <a
          href={href}
          className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      )
    }
    return (
      <Link
        href={href ?? "#"}
        className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
        {...props}
      />
    )
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-6 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed text-foreground/80" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 border-l-4 border-foreground/20 pl-6 italic text-foreground/70"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-secondary" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-4 py-3 text-left font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border-t border-border px-4 py-3 text-foreground/80"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded-md bg-secondary px-1.5 py-0.5 text-sm font-mono text-foreground"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-foreground p-4 text-sm text-primary-foreground"
      {...props}
    />
  ),
}

export function BlogArticle({ post }: Readonly<{ post: BlogPost }>) {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <BlogBreadcrumb title={post.title} />
      <BlogArticleHeader post={post} />

      <hr className="mb-10 border-border" />

      <div className="prose-custom">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      <BlogFAQ faqs={post.faq} />
      <BlogArticleCTA />
    </article>
  )
}
