import type { ReactNode } from "react"

interface WindowChromeProps {
  readonly title: string
  readonly children: ReactNode
  readonly className?: string
}

/*
 * Faux macOS window — traffic lights + titlebar around an app screenshot mockup.
 */
export function WindowChrome({ title, children, className }: WindowChromeProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] ${className ?? ""}`}
    >
      <div className="relative flex h-10 items-center gap-2 border-b border-black/5 bg-[#f5f5f7] px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="pointer-events-none absolute inset-x-0 text-center text-[13px] font-medium text-zinc-500">
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}
