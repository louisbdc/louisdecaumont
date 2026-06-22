import {
  ChevronLeft,
  ChevronRight,
  Folder,
  FolderPlus,
  RotateCw,
  Search,
} from "lucide-react"
import { ToolSidebar } from "./tool-sidebar"

interface Row {
  readonly name: string
  readonly size: string
  readonly fraction: number
  readonly isDir: boolean
}

const rows: ReadonlyArray<Row> = [
  { name: "node_modules", size: "18,4 Go", fraction: 1, isDir: true },
  { name: "Library", size: "9,2 Go", fraction: 0.5, isDir: true },
  { name: "Movies", size: "7,1 Go", fraction: 0.39, isDir: true },
  { name: "Photos Library.photoslibrary", size: "6,8 Go", fraction: 0.37, isDir: true },
  { name: "Downloads", size: "4,3 Go", fraction: 0.23, isDir: true },
  { name: "archive-2024.zip", size: "1,9 Go", fraction: 0.1, isDir: false },
  { name: "demo-render.mov", size: "612 Mo", fraction: 0.03, isDir: false },
]

function ToolbarButton({
  icon: Icon,
  label,
  muted,
}: {
  readonly icon: typeof Folder
  readonly label: string
  readonly muted?: boolean
}) {
  return (
    <span
      className={`flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1 text-[12px] shadow-sm ${
        muted ? "text-zinc-400" : "text-zinc-700"
      }`}
    >
      <Icon size={13} />
      {label}
    </span>
  )
}

export function DiskUsageMockup() {
  return (
    <div className="flex h-[420px] bg-white text-zinc-800">
      <ToolSidebar active="disk" />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Toolbar */}
        <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2.5">
          <ToolbarButton icon={ChevronLeft} label="Retour" muted />
          <ToolbarButton icon={FolderPlus} label="Choisir un dossier" />
          <ToolbarButton icon={RotateCw} label="Rafraîchir" />
          <span className="ml-auto font-mono text-[12px] text-zinc-400">
            142 éléments · 48,3 Go
          </span>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1 border-b border-black/5 px-4 py-1.5 text-[12px] text-zinc-500">
          <span>Macintosh HD</span>
          <ChevronRight size={11} className="text-zinc-300" />
          <span>Users</span>
          <ChevronRight size={11} className="text-zinc-300" />
          <span>louis</span>
          <ChevronRight size={11} className="text-zinc-300" />
          <span className="font-medium text-zinc-700">Developer</span>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border-b border-black/5 px-4 py-1.5">
          <Search size={13} className="text-zinc-400" />
          <span className="text-[12px] text-zinc-400">Filtrer par nom</span>
        </div>

        {/* Table header */}
        <div className="flex items-center border-b border-black/5 bg-[#fafafa] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
          <span className="flex-1">Nom</span>
          <span className="w-24 text-right">Taille</span>
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.name}
              className={`relative flex items-center px-4 py-[7px] text-[13px] ${
                i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"
              }`}
            >
              {/* Proportion bar */}
              <span
                className="absolute inset-y-0 left-0 bg-[#0a84ff]/[0.07]"
                style={{ width: `${row.fraction * 100}%` }}
              />
              <span className="relative flex min-w-0 flex-1 items-center gap-2">
                <Folder
                  size={14}
                  className={row.isDir ? "fill-[#0a84ff]/20 text-[#0a84ff]" : "text-zinc-400"}
                />
                <span className="truncate text-zinc-700">{row.name}</span>
                {row.isDir && (
                  <ChevronRight size={12} className="ml-auto shrink-0 text-zinc-300" />
                )}
              </span>
              <span className="relative w-24 text-right font-mono text-[12px] text-zinc-600">
                {row.size}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
