import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MotionProvider } from "@/components/motion-provider"
import { BackgroundGlow } from "@/components/background-glow"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://louisdecaumont.fr"),
  title: "Louis de Caumont — Développeur Web Freelance à Lyon",
  description:
    "Portfolio de Louis de Caumont, développeur web freelance à Lyon. Création de sites web sur mesure, du site vitrine à la plateforme SaaS. Next.js, React, TypeScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Louis de Caumont — Développeur Web Freelance à Lyon",
    description:
      "Portfolio de Louis de Caumont, développeur web freelance à Lyon. Création de sites web sur mesure, du site vitrine à la plateforme SaaS. Next.js, React, TypeScript.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louis de Caumont — Développeur Web Freelance à Lyon",
    description:
      "Portfolio de Louis de Caumont, développeur web freelance à Lyon. Création de sites web sur mesure, du site vitrine à la plateforme SaaS. Next.js, React, TypeScript.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RB71B6FRPL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RB71B6FRPL');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Louis de Caumont",
              jobTitle: "Développeur Web & Mobile Freelance",
              url: "https://louisdecaumont.fr",
              sameAs: [
                "https://github.com/louisbdc",
                "https://linkedin.com/in/epitech",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "Flutter",
                "TypeScript",
                "Node.js",
                "C",
                "C++",
                "Python",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lyon",
                addressCountry: "FR",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <BackgroundGlow />
        <SmoothScroll />
        <MotionProvider>
          <Header />
          <main id="main-content" className="relative z-10 flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
