import {
  Copy,
  FileSearch,
  GitBranch,
  HardDrive,
  Hammer,
  Package,
  PieChart,
} from "lucide-react"

type ToolId = "dashboard" | "disk" | "node" | "large" | "duplicates" | "caches" | "git"

const tools: ReadonlyArray<{ id: ToolId; label: string; icon: typeof HardDrive }> = [
  { id: "dashboard", label: "Tableau de bord", icon: PieChart },
  { id: "disk", label: "Espace disque", icon: HardDrive },
  { id: "node", label: "node_modules", icon: Package },
  { id: "large", label: "Gros fichiers", icon: FileSearch },
  { id: "duplicates", label: "Doublons", icon: Copy },
  { id: "caches", label: "Caches de build", icon: Hammer },
  { id: "git", label: "Dépôts Git", icon: GitBranch },
]

/*
 * Replica of the app's NavigationSplitView sidebar listing the tool registry.
 */
export function ToolSidebar({ active }: { readonly active: ToolId }) {
  return (
    <aside className="hidden w-44 shrink-0 flex-col border-r border-black/5 bg-[#f5f5f7]/70 p-2 sm:flex">
      <p className="px-2 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
        Outils
      </p>
      {tools.map((tool) => {
        const isActive = tool.id === active
        return (
          <div
            key={tool.id}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] ${
              isActive
                ? "bg-[#0a84ff] font-medium text-white"
                : "text-zinc-700"
            }`}
          >
            <tool.icon
              size={15}
              className={isActive ? "text-white" : "text-[#0a84ff]"}
            />
            {tool.label}
          </div>
        )
      })}
    </aside>
  )
}
