"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const STORAGE_KEY = "cookie-consent"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

function updateConsent(granted: boolean) {
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: granted ? "granted" : "denied",
  })
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  const handleChoice = useCallback((granted: boolean) => {
    localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied")
    updateConsent(granted)
    setVisible(false)
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (stored === "granted") {
      updateConsent(true)
    } else if (!stored) {
      setVisible(true)
    }

    function onOpenSettings() {
      setVisible(true)
    }

    window.addEventListener("open-cookie-settings", onOpenSettings)
    return () =>
      window.removeEventListener("open-cookie-settings", onOpenSettings)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 px-6 py-4 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ce site utilise Google Analytics pour mesurer l&apos;audience.
              Aucun cookie publicitaire n&apos;est déposé.{" "}
              <Link
                href="/mentions-legales"
                className="underline transition-colors hover:text-foreground"
              >
                En savoir plus
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => handleChoice(false)}
                className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Refuser
              </button>
              <button
                onClick={() => handleChoice(true)}
                className="rounded-md bg-foreground px-4 py-2 text-sm text-background transition-colors hover:bg-foreground/90"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
