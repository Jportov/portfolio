export function SkillBar({ name, level, delay, visible }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-300 font-medium">{name}</span>
        <span className="text-emerald-400 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay * 80}ms`,
            background: `linear-gradient(90deg, #10b981 0%, #34d399 ${level}%)`,
          }}
        />
      </div>
    </div>
  );
}
