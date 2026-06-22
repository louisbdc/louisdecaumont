import {
  Bug,
  Code2,
  Coffee,
  Cog,
  FolderPlus,
  Hammer,
  ListFilter,
  Package,
  Search,
  Trash2,
} from "lucide-react"
import { ToolSidebar } from "./tool-sidebar"

interface Row {
  readonly path: string
  readonly size: string
  readonly fraction: number
  readonly icon: typeof Package
}

const rows: ReadonlyArray<Row> = [
  { path: "~/ios/PrototypeApp/DerivedData", size: "4,8 Go", fraction: 1, icon: Hammer },
  { path: "~/projects/rust-cli/target", size: "3,2 Go", fraction: 0.67, icon: Cog },
  { path: "~/ml/sentiment-model/.venv", size: "2,1 Go", fraction: 0.44, icon: Bug },
  { path: "~/ai-experiments/chatbot-demo/node_modules", size: "1,4 Go", fraction: 0.29, icon: Package },
  { path: "~/android/sample-app/.gradle", size: "1,1 Go", fraction: 0.23, icon: Coffee },
  { path: "~/legacy/php-shop/vendor", size: "680 Mo", fraction: 0.14, icon: Code2 },
  { path: "~/ai-experiments/landing-gen/.next", size: "540 Mo", fraction: 0.11, icon: Package },
]

export function BuildCachesMockup() {
  return (
    <div className="flex h-[420px] bg-white text-zinc-800">
      <ToolSidebar active="caches" />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-black/5 px-3 py-2.5">
          <span className="flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1 text-[12px] text-zinc-700 shadow-sm">
            <FolderPlus size={13} />
            Choisir un dossier
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1 text-[12px] text-zinc-700 shadow-sm">
            <ListFilter size={13} />
            Écosystèmes (6)
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/5 px-2.5 py-1 text-[12px] font-medium text-red-600 shadow-sm">
            <Trash2 size={13} />
            Tout supprimer
          </span>
          <span className="ml-auto font-mono text-[12px] text-zinc-400">
            7 trouvés · 13,8 Go
          </span>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border-b border-black/5 px-4 py-1.5">
          <Search size={13} className="text-zinc-400" />
          <span className="text-[12px] text-zinc-400">Filtrer par chemin</span>
        </div>

        {/* Table header */}
        <div className="flex items-center border-b border-black/5 bg-[#fafafa] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
          <span className="flex-1">Chemin</span>
          <span className="w-32 text-right">Taille</span>
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.path}
              className={`flex items-center px-4 py-[7px] text-[13px] ${
                i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"
              }`}
            >
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <row.icon size={14} className="shrink-0 text-[#0a84ff]" />
                <span className="truncate text-zinc-700">{row.path}</span>
              </span>
              <span className="flex w-32 items-center justify-end gap-2">
                <span className="h-1.5 w-16 overflow-hidden rounded-full bg-zinc-100">
                  <span
                    className="block h-full rounded-full bg-[#0a84ff]/70"
                    style={{ width: `${row.fraction * 100}%` }}
                  />
                </span>
                <span className="w-14 text-right font-mono text-[12px] text-zinc-600">
                  {row.size}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
