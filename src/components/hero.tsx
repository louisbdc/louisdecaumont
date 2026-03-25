"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

/*
 * Floating screenshots that layer around the hero text.
 * Each has: position, size, z-layer (behind or in front of text),
 * and an entrance animation direction.
 */
const floatingScreenshots = [
  {
    src: "/screenshots/sparkhub.webp",
    alt: "SparkHub",
    className: "left-[2%] top-[12%] w-[260px] sm:w-[320px]",
    z: "z-0", // behind text
    from: { x: -120, y: 40, rotate: -8 },
    to: { x: 0, y: 0, rotate: -6 },
    delay: 0.3,
  },
  {
    src: "/screenshots/nutritionniste-paris.webp",
    alt: "Nutritionniste Paris",
    className: "right-[3%] top-[8%] w-[240px] sm:w-[300px]",
    z: "z-0",
    from: { x: 120, y: -60, rotate: 6 },
    to: { x: 0, y: 0, rotate: 4 },
    delay: 0.5,
  },
  {
    src: "/screenshots/arthur-de-haut-de-sigy.webp",
    alt: "Arthur de Haut de Sigy",
    className: "left-[8%] bottom-[14%] w-[220px] sm:w-[280px]",
    z: "z-30", // in front of text
    from: { x: -80, y: 60, rotate: 4 },
    to: { x: 0, y: 0, rotate: 3 },
    delay: 0.7,
  },
  {
    src: "/screenshots/atelier-kunz.webp",
    alt: "Atelier Kunz",
    className: "right-[5%] bottom-[18%] w-[240px] sm:w-[290px]",
    z: "z-30",
    from: { x: 100, y: 50, rotate: -5 },
    to: { x: 0, y: 0, rotate: -3 },
    delay: 0.6,
  },
  {
    src: "/screenshots/joconde-retraite.webp",
    alt: "Joconde Retraite",
    className: "left-[28%] top-[5%] w-[200px] sm:w-[240px]",
    z: "z-30",
    from: { x: 0, y: -100, rotate: 2 },
    to: { x: 0, y: 0, rotate: 1 },
    delay: 0.9,
  },
  {
    src: "/screenshots/renov-route.webp",
    alt: "Renov Route",
    className: "right-[25%] bottom-[8%] w-[200px] sm:w-[240px]",
    z: "z-0",
    from: { x: 60, y: 80, rotate: -3 },
    to: { x: 0, y: 0, rotate: -2 },
    delay: 0.8,
  },
]

function Counter({
  value,
  suffix,
  label,
  delay,
}: {
  readonly value: number
  readonly suffix: string
  readonly label: string
  readonly delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <span className="text-3xl font-bold text-foreground sm:text-4xl">
        {value}
        {suffix}
      </span>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Floating screenshots — behind text (z-0) */}
      {floatingScreenshots
        .filter((s) => s.z === "z-0")
        .map((shot) => (
          <motion.div
            key={shot.alt}
            initial={{
              opacity: 0,
              x: shot.from.x,
              y: shot.from.y,
              rotate: shot.from.rotate,
            }}
            animate={{
              opacity: 0.7,
              x: shot.to.x,
              y: shot.to.y,
              rotate: shot.to.rotate,
            }}
            transition={{
              duration: 1,
              delay: shot.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`absolute hidden md:block ${shot.className} z-0`}
          >
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={320}
                height={200}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        ))}

      {/* Giant text — middle layer (z-10) */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-tighter text-foreground">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="block"
            >
              LOUIS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="block text-muted-foreground/40"
            >
              DE CAUMONT
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Développeur full-stack freelance basé à Lyon.
          Sites web, apps mobiles, plateformes SaaS sur mesure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projets"
            className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            Voir mes projets
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="glass neu-shadow-sm inline-flex cursor-pointer items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-black/5"
          >
            Me contacter
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          <Counter value={10} suffix="+" label="Projets livrés" delay={1.6} />
          <div className="hidden h-8 w-px bg-border sm:block" />
          <Counter value={100} suffix="%" label="Sur mesure" delay={1.8} />
          <div className="hidden h-8 w-px bg-border sm:block" />
          <Counter value={5} suffix="+" label="Secteurs" delay={2.0} />
        </motion.div>
      </motion.div>

      {/* Floating screenshots — in front of text (z-30) */}
      {floatingScreenshots
        .filter((s) => s.z === "z-30")
        .map((shot) => (
          <motion.div
            key={shot.alt}
            initial={{
              opacity: 0,
              x: shot.from.x,
              y: shot.from.y,
              rotate: shot.from.rotate,
            }}
            animate={{
              opacity: 0.85,
              x: shot.to.x,
              y: shot.to.y,
              rotate: shot.to.rotate,
            }}
            transition={{
              duration: 1,
              delay: shot.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`absolute hidden md:block ${shot.className} z-30 pointer-events-none`}
          >
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={320}
                height={200}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
