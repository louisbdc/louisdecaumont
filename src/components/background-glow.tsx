export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 bg-background"
      aria-hidden="true"
    >
      {/*
       * Pastel blobs — using smaller blur values for GPU perf.
       * blur(80-120px) is much cheaper than blur(200px).
       * Larger size + lower opacity compensates visually.
       */}
      <div className="absolute -left-[10%] top-[0%] h-[800px] w-[800px] rounded-full bg-[#FECDD3]/30 blur-[100px]" />
      <div className="absolute -right-[10%] top-[25%] h-[700px] w-[700px] rounded-full bg-[#E0E7FF]/40 blur-[100px]" />
      <div className="absolute bottom-[0%] left-[25%] h-[700px] w-[700px] rounded-full bg-[#D1FAE5]/25 blur-[100px]" />
      <div className="absolute -right-[5%] bottom-[15%] h-[600px] w-[600px] rounded-full bg-[#FDE68A]/20 blur-[80px]" />
    </div>
  )
}
