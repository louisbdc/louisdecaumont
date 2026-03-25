"use client"

const technologies = [
  "Next.js",
  "React",
  "Flutter",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Prisma",
  "Vercel",
  "SEO",
  "Figma",
  "Framer Motion",
  "Stripe",
  "Clean Architecture",
  "BLoC",
]

function MarqueeRow({ reverse = false }: { readonly reverse?: boolean }) {
  const items = [...technologies, ...technologies]
  const direction = reverse ? "marquee-reverse" : "marquee"

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex shrink-0 gap-4 py-2 ${direction}`}>
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-white/50 px-5 py-2.5 text-sm font-medium text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  )
}
