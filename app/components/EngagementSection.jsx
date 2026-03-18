import { Landmark, ShieldAlert, TrendingUp } from "lucide-react"
import TrustItem from "./ui/TrustItem"

export default function EngagementSection() {


    return (
        <section
            id="engagements"
            className="relative h-screen w-full flex items-center justify-center z-10 bg-black text-white overflow-hidden"
        >
            {/* --- Ambient Background Lighting --- */}
            {/* Purple glow behind the Founder (Right) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            {/* Blue glow behind the Data (Left) */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl px-6 w-full h-full flex flex-col justify-center relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-auto lg:h-[600px] items-stretch">
                    {/* =========================================
LEFT SIDE: STRATEGIC ECOSYSTEM (Col Span 7)
========================================= */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                                <span className="text-purple-400 text-[10px] font-mono uppercase tracking-[0.25em]">
                                    Validation & Trust
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-6">
                                Institutional <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                                    Alignment.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-lg">
                                We are actively engaged with senior leadership across defense,
                                regulatory, and investment sectors to validate technological
                                direction and pilot deployments.
                            </p>
                        </div>

                        {/* The Trust List - Clean Glass Panel */}
                        <div className="space-y-4">
                            {/* 1. Defense */}
                            <div className="group relative p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all duration-500">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex w-full items-center gap-4">
                                    <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-1">
                                        <ShieldAlert size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white tracking-wide">
                                            Defense & Security
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Regulatory */}
                            <div className="group relative p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all duration-500">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                                        <Landmark size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white tracking-wide">
                                            Government & Regulatory
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Investment */}
                            <div className="group relative p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all duration-500">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                                        <TrendingUp size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white tracking-wide">
                                            Investment & Industry
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =========================================
RIGHT SIDE: FOUNDER CARD (Col Span 5)
========================================= */}
                    <div className="lg:col-span-5 h-full pt-8 lg:pt-0">
                        <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#050505] group">
                            {/* Background Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 via-transparent to-black z-0" />

                            {/* Founder Image - Takes up the top/middle */}
                            {/* Make sure /founder.png has a transparent background for best effect, or is a nice portrait */}
                            <div className="absolute top-0 left-0 right-0 bottom-[35%] z-0 overflow-hidden">
                                <img
                                    src="/founder.jpg"
                                    alt="Sidharth Kumar"
                                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                {/* Gradient Fade at the bottom of the image to blend into text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                            </div>

                            {/* Founder Content - Positioned at Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                                    <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                                        Founder Spotlight
                                    </span>
                                </div>

                                {/* Name & Title */}
                                <h3 className="text-3xl font-bold text-white tracking-tight mb-1">
                                    Sidharth Kumar
                                </h3>
                                <p className="text-purple-400 text-sm font-mono uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">
                                    Founder, QNNX
                                </p>

                                {/* Bio */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                                    Bridging academic innovation and real-world defense.
                                    Formerly a{" "}
                                    <span className="text-white font-medium">
                                        Quantum Research Intern at IBM
                                    </span>
                                    , working on AI-driven error mitigation.
                                </p>

                                {/* Footer / Connect */}
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-500">
                                            Hackathon Winner{" "}
                                        </span>
                                        <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-500">
                                            Researcher
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
