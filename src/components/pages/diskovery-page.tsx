"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Boxes,
  Check,
  Cpu,
  Feather,
  FileSearch,
  GitFork,
  Hammer,
  HardDrive,
  Layers,
  Package,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trash2,
  X,
  Zap,
} from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { DownloadCounter } from "@/components/diskovery/download-counter"
import { WindowChrome } from "@/components/diskovery/window-chrome"
import { DiskUsageMockup } from "@/components/diskovery/disk-usage-mockup"
import { NodeModulesMockup } from "@/components/diskovery/node-modules-mockup"
import { LargeFilesMockup } from "@/components/diskovery/large-files-mockup"
import { BuildCachesMockup } from "@/components/diskovery/build-caches-mockup"
import { MoreToolsCarousel } from "@/components/diskovery/more-tools-carousel"
import {
  AppleMark,
  DownloadButton,
  SourceButton,
  SOURCE_URL,
} from "@/components/diskovery/download-buttons"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
}

const stats = [
  { value: "~3 Mo", label: "App native, zéro Electron" },
  { value: "7 outils", label: "Disque, doublons, caches, dépôts Git…" },
  { value: "100 %", label: "Hors-ligne, aucune télémétrie" },
  { value: "Open source", label: "MIT, forkable à volonté" },
]

const nativePains = [
  "La taille des dossiers reste invisible : il faut un Cmd+I, dossier par dossier.",
  "Les Réglages › Stockage noient tout dans des catégories floues (« Système », « Autre »).",
  "Aucune notion de node_modules ni des artefacts de développement qui gonflent le disque.",
  "Impossible de trier, filtrer ou plonger dans la hiérarchie pour traquer un glouton.",
  "Pour faire le ménage, on jongle entre Finder, Terminal et utilitaires tiers.",
]

const diskoveryWins = [
  "Chaque dossier affiche sa taille, trié du plus gros au plus petit, avec barres de proportion.",
  "Une vue unique et lisible : vous voyez d'un coup d'œil ce qui pèse vraiment.",
  "Un outil dédié qui traque tous les node_modules et met en avant les abandonnés.",
  "Recherche, tri, fil d'Ariane, double-clic pour descendre dans l'arborescence.",
  "Suppression vers la Corbeille intégrée, réversible, sans toucher au Terminal.",
]

const features = [
  {
    icon: Trash2,
    title: "Suppression réversible",
    description:
      "Tout part à la Corbeille, jamais en suppression définitive. Un mauvais clic ? Restauration en un geste depuis le Finder.",
  },
  {
    icon: Cpu,
    title: "Scans parallélisés",
    description:
      "Le parcours du disque exploite tous les cœurs de votre Mac, avec un tableau qui se remplit en direct pendant l'analyse.",
  },
  {
    icon: Zap,
    title: "Navigation instantanée",
    description:
      "Les dossiers déjà mesurés sont mis en cache. Plongez en profondeur et revenez en arrière sans jamais attendre.",
  },
  {
    icon: Feather,
    title: "100 % natif SwiftUI",
    description:
      "Pas de navigateur embarqué, pas de runtime lourd. Démarrage immédiat et empreinte mémoire minimale.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentialité totale",
    description:
      "Aucun réseau, aucun compte, aucun traceur. Vos fichiers ne quittent jamais votre machine.",
  },
  {
    icon: GitFork,
    title: "Code ouvert et testé",
    description:
      "Logique cœur isolée et couverte par des tests. Lisez, forkez, ajoutez vos propres outils.",
  },
]

const steps = [
  {
    title: "Téléchargez le .dmg",
    description:
      "Glissez Diskovery dans votre dossier Applications. Aucune installation, aucun compte requis.",
  },
  {
    title: "Ouvrez Diskovery",
    description:
      "Double-cliquez pour lancer l'app. Signée et notarisée par Apple, elle s'ouvre directement, sans avertissement.",
  },
  {
    title: "Choisissez un dossier",
    description:
      "Sélectionnez un dossier à analyser et laissez Diskovery révéler ce qui occupe votre disque.",
  },
]

const stack = [
  "Swift",
  "SwiftUI",
  "Swift Concurrency",
  "Swift Package Manager",
  "XCTest",
  "macOS 14+",
]

export function DiskoveryPage({
  downloadCount = null,
}: {
  readonly downloadCount?: number | null
}) {
  return (
    <div className="relative overflow-hidden pt-28">
      {/* ───────────── Hero ───────────── */}
      <section className="mx-auto max-w-7xl px-6">
        <Breadcrumb items={[{ label: "Projets" }, { label: "Diskovery" }]} />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/diskovery-icon.png"
              alt="Icône de l'application Diskovery"
              width={88}
              height={88}
              priority
              className="mb-6 h-20 w-20 drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:h-24 sm:w-24"
            />

            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <AppleMark className="h-3 w-3" />
                macOS natif
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <Terminal size={12} />
                Pensé pour les devs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                Gratuit & open source
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Diskovery
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground/80">
              Le gestionnaire de stockage de macOS est illisible. Diskovery, non.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Entre les Réglages qui noient tout dans des catégories floues et un
              Finder qui n'affiche jamais la taille d'un dossier, retrouver ce qui
              sature votre Mac vire au casse-tête. Diskovery est l'outil simple et
              direct qui manquait, taillé pour les développeurs et leurs{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">node_modules</code> qui débordent.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DownloadButton />
              <SourceButton />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              macOS 14+ · Apple Silicon & Intel · ~3 Mo · sans installateur
            </p>
            <DownloadCounter count={downloadCount} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-[#0a84ff]/15 via-transparent to-emerald-400/10 blur-3xl" />
            <WindowChrome title="Diskovery · Espace disque">
              <DiskUsageMockup />
            </WindowChrome>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Stats ───────────── */}
      <section className="mx-auto mt-20 max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 gap-4 rounded-3xl glass neu-shadow p-6 sm:p-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ───────────── Problem ───────────── */}
      <section className="mx-auto mt-28 max-w-3xl px-6 text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          « Votre disque est presque plein. » Oui, mais <em>où</em> ?
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-5 text-lg leading-relaxed text-muted-foreground"
        >
          macOS éparpille l'information sur le stockage à dix endroits différents.
          Les Réglages regroupent tout dans des catégories opaques (« Système »,
          « Autre »…), et le Finder n'affiche même pas la taille d'un dossier sans
          un Cmd+I, un par un. Résultat : on cherche à l'aveugle. Diskovery prend
          le problème à l'envers : un dossier, une vue claire, les plus gros
          postes en premier.
        </motion.p>
      </section>

      {/* ───────────── Comparison vs macOS ───────────── */}
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pourquoi pas juste le Finder ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Les outils natifs de macOS ne sont pas conçus pour ce travail. Voici
            la différence, point par point.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {/* Native column */}
          <div className="rounded-3xl border border-border bg-background p-7">
            <div className="flex items-center gap-2.5">
              <AppleMark className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">
                Finder & Réglages macOS
              </h3>
            </div>
            <ul className="mt-5 space-y-4">
              {nativePains.map((pain) => (
                <li key={pain} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X size={13} />
                  </span>
                  {pain}
                </li>
              ))}
            </ul>
          </div>

          {/* Diskovery column */}
          <div className="rounded-3xl border-2 border-primary bg-primary p-7 text-primary-foreground shadow-xl">
            <div className="flex items-center gap-2.5">
              <HardDrive className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Diskovery</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {diskoveryWins.map((win) => (
                <li key={win} className="flex items-start gap-3 text-sm text-primary-foreground/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                    <Check size={13} />
                  </span>
                  {win}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* ───────────── Tool 1 — Disk usage ───────────── */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0a84ff]/10 px-3 py-1 text-xs font-semibold text-[#0a84ff]">
              <HardDrive size={13} /> Outil 1
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explorez votre disque comme un pro
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Un navigateur d'espace disque façon DaisyDisk. Choisissez un
              dossier : Diskovery liste fichiers et sous-dossiers triés par
              taille, avec des barres de proportion pour repérer les gloutons
              d'un coup d'œil.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Fil d'Ariane et bouton retour pour naviguer sans se perdre",
                "Double-clic pour plonger dans un sous-dossier",
                "Recherche, tri par taille ou par nom",
                "Suppression vers la Corbeille en un clic",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-[#0a84ff]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <WindowChrome title="Diskovery · Espace disque">
              <DiskUsageMockup />
            </WindowChrome>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Tool 2 — node_modules ───────────── */}
      <section className="mx-auto mt-28 max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="lg:order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-600">
              <Package size={13} /> Outil 2
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Traquez les <code className="text-2xl sm:text-3xl">node_modules</code> oubliés
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Chaque dev le sait : les <code className="rounded bg-muted px-1.5 py-0.5 text-sm">node_modules</code> s'accumulent
              et pèsent des dizaines de gigaoctets. Diskovery les trouve tous,
              récursivement, et met en avant ceux qui n'ont pas bougé depuis trop
              longtemps.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Recherche récursive de tous les node_modules",
                "Seuil d'ancienneté configurable (1 semaine → 1 an)",
                "Les dossiers « anciens » sont mis en évidence",
                "Tout supprimer d'un coup, ou un par un",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="lg:order-1">
            <WindowChrome title="Diskovery · node_modules">
              <NodeModulesMockup />
            </WindowChrome>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Tool 3 — Large files ───────────── */}
      <section className="mx-auto mt-28 max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0a84ff]/10 px-3 py-1 text-xs font-semibold text-[#0a84ff]">
              <FileSearch size={13} /> Outil 3
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trouvez vos plus gros fichiers, où qu'ils soient
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Une vieille vidéo 4K, un installeur oublié, une machine virtuelle de
              test… Les fichiers les plus lourds se cachent souvent là où on ne
              regarde jamais. Diskovery les remonte tous à la surface, classés du
              plus gros au plus petit.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Le top des fichiers les plus lourds, toute l'arborescence confondue",
                "Choisissez combien en afficher (Top 20, 50, 100…)",
                "Recherche et tri instantanés",
                "Révélez dans le Finder ou envoyez à la Corbeille",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-[#0a84ff]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <WindowChrome title="Diskovery · Gros fichiers">
              <LargeFilesMockup />
            </WindowChrome>
          </motion.div>
        </div>
      </section>

      {/* ───────────── AI insight ───────────── */}
      <section className="mx-auto mt-28 max-w-4xl px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl glass neu-shadow p-8 text-center sm:p-12"
        >
          <div className="absolute -top-20 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#0a84ff]/15 blur-3xl" />
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles size={22} />
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            À l'ère de l'IA, le disque se remplit tout seul
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            On génère des projets à la chaîne : un prototype le matin, une démo
            l'après-midi. On les oublie aussitôt, mais pas les fichiers techniques
            qu'ils laissent derrière eux. Sans qu'on s'en rende compte, des
            dizaines de gigaoctets s'accumulent dans des coins du disque qu'on ne
            visite jamais. Diskovery met ce désordre en lumière et vous aide à le
            ranger en quelques clics.
          </p>
        </motion.div>
      </section>

      {/* ───────────── Tool 4 — Build caches ───────────── */}
      <section className="mx-auto mt-28 max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="lg:order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-600">
              <Hammer size={13} /> Outil 4
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nettoyez les caches de build de tous vos projets
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Chaque écosystème laisse ses propres dossiers lourds et
              régénérables : <code className="rounded bg-muted px-1.5 py-0.5 text-sm">node_modules</code>,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">target</code>,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.venv</code>,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">DerivedData</code>… Diskovery
              les repère tous, dans tous vos projets, et les supprime sans risque
              (ils se reconstruisent au prochain build).
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "6 écosystèmes couverts : JavaScript, Rust, Python, JVM, PHP, Xcode",
                "Filtrez par écosystème selon ce que vous voulez nettoyer",
                "Barres de proportion pour repérer les plus volumineux",
                "Tout vider d'un coup, en toute sécurité, vers la Corbeille",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="lg:order-1">
            <WindowChrome title="Diskovery · Caches de build">
              <BuildCachesMockup />
            </WindowChrome>
          </motion.div>
        </div>
      </section>

      {/* ───────────── More tools ───────────── */}
      <section className="mx-auto mt-32 max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Et trois autres outils
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sept outils en tout, réunis dans une seule app native.
          </p>
        </motion.div>

        <MoreToolsCarousel />
      </section>

      {/* ───────────── Features grid ───────────── */}
      <section className="mx-auto mt-32 max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pensé pour aller vite, sans rien casser
          </h2>
          <p className="mt-4 text-muted-foreground">
            Chaque détail vise la même chose : vous faire gagner de l'espace en
            toute confiance.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}
              className="rounded-2xl glass neu-shadow p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <feature.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── Extensible architecture ───────────── */}
      <section className="mx-auto mt-32 max-w-7xl px-6">
        <div className="grid items-center gap-10 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              <Boxes size={13} /> Architecture
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Un hub d'outils, pas une app figée
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
              Diskovery n'est pas qu'un analyseur de disque : c'est une coquille
              extensible. Chaque fonctionnalité est un « outil » indépendant,
              enregistré dans un registre central. Ajouter un outil ne touche à
              rien d'autre.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium">
              <Layers size={16} />
              Ajouter un outil = 1 fichier + 1 ligne dans le registre.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d11] font-mono text-[13px] leading-relaxed shadow-2xl"
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-white/40">ToolRegistry.swift</span>
            </div>
            <pre className="overflow-x-auto p-5 text-white/90">
              <code>{`enum ToolRegistry {
  static let all: [ToolDescriptor] = [
    DashboardTool.descriptor,
    DiskUsageTool.descriptor,
    NodeModulesTool.descriptor,
    LargeFilesTool.descriptor,
    DuplicatesTool.descriptor,
    BuildCachesTool.descriptor,
    GitReposTool.descriptor,
    `}<span className="text-emerald-400">{`// ← votre prochain outil ici`}</span>{`
  ]
}`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Installation ───────────── */}
      <section className="mx-auto mt-32 max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Installé en moins d'une minute
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pas de compte, pas d'abonnement, pas d'installateur tordu.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="relative rounded-2xl glass neu-shadow p-6"
            >
              <span className="text-3xl font-bold text-foreground/15">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── Tech stack ───────────── */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm font-medium text-muted-foreground">
            Construit avec
          </span>
          {stack.map((tech) => (
            <span
              key={tech}
              className="neu-inset rounded-lg px-3 py-1.5 text-sm font-medium text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ───────────── Final CTA ───────────── */}
      <section className="mx-auto my-32 max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl glass neu-shadow px-6 py-16 text-center sm:px-12"
        >
          <div className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0a84ff]/15 blur-3xl" />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Récupérez vos gigaoctets dès aujourd'hui
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Gratuit, open source, sans engagement. Téléchargez Diskovery et
            voyez enfin où va votre espace disque.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton />
            <SourceButton />
          </div>
        </motion.div>
      </section>
    </div>
  )
}
