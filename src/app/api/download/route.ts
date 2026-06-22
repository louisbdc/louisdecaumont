import { NextResponse, type NextRequest } from "next/server"
import { incrementDownloads } from "@/lib/download-counter"

export const dynamic = "force-dynamic"

const FILE_PATH = "/downloads/Diskovery.dmg"

// Skip counting obvious bots/crawlers so the number reflects real humans.
const BOT_UA = /bot|crawler|spider|crawling|preview|facebookexternalhit|slurp|bingpreview|headless/i

/*
 * Counts a download click, then redirects to the actual .dmg.
 * The redirect always happens, even if the counter store is unavailable —
 * a broken counter must never block a download.
 */
export async function GET(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? ""
  if (!BOT_UA.test(ua)) {
    await incrementDownloads()
  }
  return NextResponse.redirect(new URL(FILE_PATH, request.url), { status: 302 })
}
