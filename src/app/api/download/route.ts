import { revalidateTag } from "next/cache"
import { NextResponse, type NextRequest } from "next/server"
import { DOWNLOADS_TAG, incrementDownloads } from "@/lib/download-counter"

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
    const total = await incrementDownloads()
    // Mark the cached count stale so the badge reflects this download on the
    // next view (stale-while-revalidate). Only when the store actually counted.
    if (total !== null) revalidateTag(DOWNLOADS_TAG, "max")
  }
  return NextResponse.redirect(new URL(FILE_PATH, request.url), { status: 302 })
}
