"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { FAQ } from "@/lib/blog"

function FAQItem({ faq }: Readonly<{ faq: FAQ }>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-foreground"
      >
        <span className="text-base font-medium text-foreground">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-foreground/70">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function BlogFAQ({ faqs }: Readonly<{ faqs: FAQ[] }>) {
  if (faqs.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Questions fréquentes
      </h2>
      <div className="rounded-2xl border border-border bg-card px-6">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} faq={faq} />
        ))}
      </div>
    </section>
  )
}
