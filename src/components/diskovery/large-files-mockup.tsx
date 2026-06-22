import { ChevronDown, FileText, FolderPlus, Search } from "lucide-react"
import { ToolSidebar } from "./tool-sidebar"

interface Row {
  readonly path: string
  readonly size: string
}

const rows: ReadonlyArray<Row> = [
  { path: "~/Movies/demo-render-4k.mov", size: "8,9 Go" },
  { path: "~/Downloads/Xcode_16.dmg", size: "6,2 Go" },
  { path: "~/VMs/ubuntu-dev.vdi", size: "4,3 Go" },
  { path: "~/Downloads/training-dataset.zip", size: "3,4 Go" },
  { path: "~/Desktop/podcast-master.wav", size: "1,8 Go" },
  { path: "~/Downloads/sample-footage.mp4", size: "1,2 Go" },
]

export function LargeFilesMockup() {
  return (
    <div className="flex h-[420px] bg-white text-zinc-800">
      <ToolSidebar active="large" />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Toolbar */}
        <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2.5">
          <span className="flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1 text-[12px] text-zinc-700 shadow-sm">
            <FolderPlus size={13} />
            Choisir un dossier
          </span>
          <span className="flex items-center gap-1 rounded-md border border-black/10 bg-white px-2.5 py-1 text-[12px] text-zinc-700 shadow-sm">
            <span className="font-medium">Top 50</span>
            <ChevronDown size={12} className="text-zinc-400" />
          </span>
          <span className="ml-auto font-mono text-[12px] text-zinc-400">
            50 fichiers · 41,7 Go
          </span>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border-b border-black/5 px-4 py-1.5">
          <Search size={13} className="text-zinc-400" />
          <span className="text-[12px] text-zinc-400">Filtrer par chemin</span>
        </div>

        {/* Table header */}
        <div className="flex items-center border-b border-black/5 bg-[#fafafa] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
          <span className="flex-1">Fichier</span>
          <span className="w-24 text-right">Taille</span>
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
                <FileText size={14} className="shrink-0 text-zinc-400" />
                <span className="truncate text-zinc-700">{row.path}</span>
              </span>
              <span className="w-24 text-right font-mono text-[12px] text-zinc-600">
                {row.size}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
