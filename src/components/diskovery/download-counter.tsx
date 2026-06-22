import { Download } from "lucide-react"

const nf = new Intl.NumberFormat("fr-FR")

/*
 * Static download count badge. The value is injected from the server (ISR), so
 * this renders no client fetch and costs nothing per page view.
 * Shown as soon as the store is configured, even at 0. Hidden only when the
 * store is unavailable (count === null).
 */
export function DownloadCounter({ count }: { readonly count: number | null }) {
  if (count == null) return null

  return (
    <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
      <Download size={13} className="text-emerald-600" />
      <span className="text-foreground">{nf.format(count)}</span>
      {count > 1 ? "téléchargements" : "téléchargement"}
    </p>
  )
}
