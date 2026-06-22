import { Download } from "lucide-react"

export const DMG_URL = "/downloads/Diskovery.dmg"
// Routed through the API so each click is counted, then redirected to the file.
export const DOWNLOAD_URL = "/api/download"
export const SOURCE_URL = "https://github.com/louisbdc/diskovery"

/*
 * Apple logo — lucide ships no Apple glyph, so we inline the mark.
 */
export function AppleMark({ className }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

/*
 * GitHub logo — lucide removed brand glyphs, so we inline the mark.
 */
export function GithubMark({ className }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

export function DownloadButton({ className }: { readonly className?: string }) {
  return (
    <a
      href={DOWNLOAD_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg ${className ?? ""}`}
    >
      <Download size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
      Télécharger pour macOS
    </a>
  )
}

export function SourceButton({ className }: { readonly className?: string }) {
  return (
    <a
      href={SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/20 hover:shadow-md ${className ?? ""}`}
    >
      <GithubMark className="h-[17px] w-[17px]" />
      Voir le code source
    </a>
  )
}
