import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MotionProvider } from "@/components/motion-provider"
import { BackgroundGlow } from "@/components/background-glow"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://louisdecaumont.fr"),
  title: "Louis de Caumont — Développeur Web Freelance à Lyon",
  description:
    "Louis de Caumont, développeur web freelance à Lyon. Création de sites performants sur mesure : site vitrine, SaaS, e-commerce. Next.js, React, TypeScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Louis de Caumont — Développeur Web Freelance à Lyon",
    description:
      "Louis de Caumont, développeur web freelance à Lyon. Création de sites performants sur mesure : site vitrine, SaaS, e-commerce. Next.js, React, TypeScript.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Louis de Caumont — Développeur Web Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louis de Caumont — Développeur Web Freelance à Lyon",
    description:
      "Louis de Caumont, développeur web freelance à Lyon. Création de sites performants sur mesure : site vitrine, SaaS, e-commerce. Next.js, React, TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Louis de Caumont — Développeur Web Freelance",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "96x96", type: "image/x-icon" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RB71B6FRPL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`gtag('js', new Date()); gtag('config', 'G-RB71B6FRPL');`}
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
              image: "https://louisdecaumont.fr/og-image.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Louis de Caumont",
              url: "https://louisdecaumont.fr",
              description:
                "Louis de Caumont, développeur web freelance à Lyon. Création de sites performants sur mesure.",
              publisher: {
                "@type": "Person",
                name: "Louis de Caumont",
                image: "https://louisdecaumont.fr/og-image.png",
                logo: {
                  "@type": "ImageObject",
                  url: "https://louisdecaumont.fr/logo.png",
                  width: 512,
                  height: 512,
                },
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
        <CookieConsent />
      </body>
    </html>
  )
}
