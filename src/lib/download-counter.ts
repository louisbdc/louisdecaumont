/*
 * Minimal download counter backed by Upstash Redis (a single integer key,
 * incremented over the REST API). No SDK, just fetch.
 *
 * Works with either env var pair, so it fits both the Upstash integration and
 * the Vercel KV integration without changes:
 *   - UPSTASH_REDIS_REST_URL  / UPSTASH_REDIS_REST_TOKEN
 *   - KV_REST_API_URL         / KV_REST_API_TOKEN
 *
 * If neither is configured, every function degrades to a no-op returning null,
 * so the site keeps working before the store is provisioned.
 */

const KEY = "diskovery_downloads"

function config(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
  if (!url || !token) return null
  return { url, token }
}

async function command(
  path: string,
  init: RequestInit & { next?: { revalidate: number } }
): Promise<unknown | null> {
  const cfg = config()
  if (!cfg) return null
  try {
    const res = await fetch(`${cfg.url}/${path}`, {
      headers: { Authorization: `Bearer ${cfg.token}` },
      ...init,
    })
    if (!res.ok) return null
    const json = (await res.json()) as { result?: unknown }
    return json.result ?? null
  } catch (error) {
    console.error("download-counter command failed:", error)
    return null
  }
}

/**
 * Increment the counter and return the new total (or null if unavailable).
 * Uncached: this runs only inside the force-dynamic download route, once per
 * actual click.
 */
export async function incrementDownloads(): Promise<number | null> {
  const result = await command(`incr/${KEY}`, { cache: "no-store" })
  return typeof result === "number" ? result : null
}

/**
 * Read the current total.
 * Returns null only when the store is NOT configured (nothing to show yet).
 * When configured but the key does not exist yet, returns 0 so the counter
 * displays "0 téléchargement".
 * Cached for an hour so the page stays statically served (ISR): the read fires
 * at most once per revalidation window, never per page view.
 */
export async function getDownloads(): Promise<number | null> {
  if (!config()) return null
  const result = await command(`get/${KEY}`, { next: { revalidate: 3600 } })
  if (result == null) return 0
  const n = Number(result)
  return Number.isFinite(n) ? n : 0
}
