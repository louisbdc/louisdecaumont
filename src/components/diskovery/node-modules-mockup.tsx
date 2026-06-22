import { ChevronDown, FolderPlus, Package, Search, Trash2 } from "lucide-react"
import { ToolSidebar } from "./tool-sidebar"

interface Row {
  readonly path: string
  readonly modified: string
  readonly size: string
  readonly old: boolean
}

const rows: ReadonlyArray<Row> = [
  { path: "~/clients/acme-app/node_modules", modified: "il y a 1 an", size: "1,2 Go", old: true },
  { path: "~/legacy/dashboard-v1/node_modules", modified: "il y a 11 mois", size: "980 Mo", old: true },
  { path: "~/archive/portfolio/node_modules", modified: "il y a 8 mois", size: "842 Mo", old: true },
  { path: "~/experiments/three-demo/node_modules", modified: "il y a 5 mois", size: "540 Mo", old: true },
  { path: "~/work/current-site/node_modules", modified: "il y a 3 jours", size: "318 Mo", old: false },
  { path: "~/sandbox/playground/node_modules", modified: "hier", size: "212 Mo", old: false },
]

export function NodeModulesMockup() {
  return (
    <div className="flex h-[420px] bg-white text-zinc-800">
      <ToolSidebar active="node" />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-black/5 px-3 py-2.5">
          <span className="flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1 text-[12px] text-zinc-700 shadow-sm">
            <FolderPlus size={13} />
            Choisir un dossier
          </span>
          <span className="flex items-center gap-1 rounded-md border border-black/10 bg-white px-2.5 py-1 text-[12px] text-zinc-700 shadow-sm">
            Ancien après : <span className="font-medium">3 mois</span>
            <ChevronDown size={12} className="text-zinc-400" />
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/5 px-2.5 py-1 text-[12px] font-medium text-red-600 shadow-sm">
            <Trash2 size={13} />
            Supprimer anciens (4 · 3,6 Go)
          </span>
          <span className="ml-auto font-mono text-[12px] text-zinc-400">
            6 trouvés · 4,1 Go
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
          <span className="w-28">Modifié</span>
          <span className="w-20 text-right">Taille</span>
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
                <Package
                  size={14}
                  className={row.old ? "fill-orange-400/20 text-orange-500" : "fill-[#0a84ff]/20 text-[#0a84ff]"}
                />
                <span className="truncate text-zinc-700">{row.path}</span>
                {row.old && (
                  <span className="shrink-0 rounded-full bg-orange-400/15 px-1.5 py-px text-[10px] font-semibold text-orange-600">
                    ancien
                  </span>
                )}
              </span>
              <span
                className={`w-28 text-[12px] ${row.old ? "text-orange-500" : "text-zinc-400"}`}
              >
                {row.modified}
              </span>
              <span className="w-20 text-right font-mono text-[12px] text-zinc-600">
                {row.size}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
