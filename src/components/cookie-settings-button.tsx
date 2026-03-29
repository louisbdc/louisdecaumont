"use client"

export function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      Gérer les cookies
    </button>
  )
}
