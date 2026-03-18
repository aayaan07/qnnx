export default function SolutionCard({ title, description, code, Icon, color }) {
    return (
        <div className={`group relative px-6 py-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-${color}-500/20 transition-all duration-500 flex flex-col justify-center`}>
            <div className="flex items-start gap-5">
                <div className={`w-10 h-10 rounded-lg bg-${color}-500/10 flex-shrink-0 flex items-center justify-center text-${color}-400 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="text-sm font-semibold text-white tracking-wide">{title}</h3>
                        <span className="text-[9px] font-mono text-gray-700 border border-white/5 px-2 py-0.5 rounded-full">{code}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-white/5 overflow-hidden">
                <div className={`h-full w-0 bg-${color}-500/50 group-hover:w-full transition-all duration-700 ease-out`} />
            </div>
        </div>
    )
}