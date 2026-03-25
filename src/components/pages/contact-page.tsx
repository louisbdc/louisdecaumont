"use client"

import type { ComponentType, SVGProps } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowUpRight, MapPin, Clock } from "lucide-react"

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface ContactLink {
  readonly icon:
    | ComponentType<{ size?: number; className?: string }>
    | ComponentType<SVGProps<SVGSVGElement>>
  readonly label: string
  readonly value: string
  readonly href: string
}

const contactLinks: readonly ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "l2caumont@gmail.com",
    href: "mailto:l2caumont@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/louisbdc",
    href: "https://github.com/louisbdc",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/epitech",
    href: "https://linkedin.com/in/epitech",
  },
]

const info = [
  { icon: MapPin, label: "Localisation", value: "Paris, France" },
  { icon: Clock, label: "Disponibilité", value: "Sous 48h" },
]

export function ContactPage() {
  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Travaillons ensemble
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Un projet en tête ? Une question ? Je suis disponible pour en
            discuter et trouver la meilleure solution pour vos besoins.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Décrivez votre projet en quelques lignes. Je reviens vers vous sous
            48h avec une première analyse et une estimation. Premier échange
            gratuit et sans engagement.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass neu-shadow flex flex-col gap-5 rounded-2xl p-8"
            action="https://formspree.io/f/placeholder"
            method="POST"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="neu-inset w-full rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-shadow duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="neu-inset w-full rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-shadow duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="De quoi s'agit-il ?"
                className="neu-inset w-full rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-shadow duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Décrivez votre projet, vos besoins, vos délais..."
                className="neu-inset w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-shadow duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 cursor-pointer rounded-2xl bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Envoyer le message
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Direct links */}
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="glass neu-shadow group flex cursor-pointer items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                >
                  <div className="shrink-0 rounded-lg bg-muted p-2.5">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </a>
              )
            })}

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="glass neu-shadow-sm rounded-2xl p-5"
                >
                  <item.icon
                    size={20}
                    className="mb-3 text-muted-foreground"
                  />
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Questions fréquentes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass neu-shadow-sm rounded-2xl p-6">
              <h3 className="mb-2 text-base font-semibold text-foreground">
                Comment se déroule un premier échange ?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Après réception de votre message, je vous propose un appel de 30
                minutes pour comprendre votre projet en détail. Nous discutons
                de vos objectifs, de vos contraintes techniques et de votre
                budget. Cet échange est gratuit et sans engagement, il me permet
                de vous proposer une solution adaptée.
              </p>
            </div>
            <div className="glass neu-shadow-sm rounded-2xl p-6">
              <h3 className="mb-2 text-base font-semibold text-foreground">
                Quels sont les délais habituels ?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Un site vitrine est généralement livré en 2 à 4 semaines. Pour
                une application web ou mobile plus complexe, comptez 4 à 8
                semaines selon les fonctionnalités. Je fournis un planning
                détaillé dès le devis, avec des points d&apos;étape réguliers
                pour suivre l&apos;avancement du projet.
              </p>
            </div>
            <div className="glass neu-shadow-sm rounded-2xl p-6">
              <h3 className="mb-2 text-base font-semibold text-foreground">
                Que comprend le tarif ?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Le devis inclut la conception, le développement, les tests,
                le déploiement et une formation à la prise en main. Le SEO
                technique de base et l&apos;optimisation des performances sont
                inclus dans chaque projet. La maintenance et les évolutions
                futures sont proposées en option avec un forfait mensuel adapté
                à vos besoins.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
