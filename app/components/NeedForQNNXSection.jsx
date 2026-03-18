"use client"

import { Clock, ShieldOff, Zap, AlertTriangle, Download } from "lucide-react"

const threats = [
    {
        icon: ShieldOff,
        color: "red",
        label: "Encryption Collapse",
        title: "RSA & ECC Are Broken — in Theory, Then in Practice",
        body: "Shor's Algorithm running on a cryptographically-relevant quantum computer will render today's public-key infrastructure obsolete. The timeline is no longer measured in decades.",
    },
    {
        icon: Clock,
        color: "amber",
        label: "Harvest Now, Decrypt Later",
        title: "Adversaries Are Already Collecting Your Data",
        body: "Nation-state actors are intercepting encrypted traffic today with the explicit strategy of decrypting it the moment a capable quantum computer is online. The attack has already begun.",
    },
    {
        icon: AlertTriangle,
        color: "orange",
        label: "Critical Infrastructure",
        title: "Power Grids, Comms & Finance Have No Quantum Defense",
        body: "SCADA systems, satellite links, and banking protocols were never designed for post-quantum threats. A single cryptographic break cascades across entire sectors.",
    },
    {
        icon: Zap,
        color: "purple",
        label: "Migration Complexity",
        title: "Retrofitting Legacy Systems Is an Engineering Crisis",
        body: "Government and enterprise infrastructure can't simply swap cryptographic primitives. QNNX builds quantum-resilient layers that integrate without destroying existing operations.",
    },
]

const colorMap = {
    red: { bar: "bg-red-500", icon: "bg-red-500/10 text-red-400", label: "text-red-400" },
    amber: { bar: "bg-amber-500", icon: "bg-amber-500/10 text-amber-400", label: "text-amber-400" },
    orange: { bar: "bg-orange-500", icon: "bg-orange-500/10 text-orange-400", label: "text-orange-400" },
    purple: { bar: "bg-purple-500", icon: "bg-purple-500/10 text-purple-400", label: "text-purple-400" },
}

export default function NeedForQNNXSection() {
    return (
        <section
            id="need-for-qnnx"
            className="relative w-full flex items-center justify-center z-10 bg-black text-white overflow-hidden py-28"
        >
            {/* — Ambient Lighting — */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-red-900/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl px-6 w-full relative z-20">

                {/* ── HEADER ── */}
                <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end border-b border-white/5 pb-10">
                    {/* Left — headline */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[1px] w-8 bg-purple-500" />
                            <span className="text-purple-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                                The Quantum Threat
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
                            Why the World{" "}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-gray-500">
                                Needs QNNX.
                            </span>
                        </h2>
                    </div>

                    {/* Right — sub-copy */}
                    <div className="pb-1 max-w-lg">
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            <span className="text-gray-300 font-medium">
                                Quantum computing is an existential cryptographic event —
                            </span>{" "}
                            not a future risk to monitor, but a present threat to architect against.
                            Every organisation that stores sensitive data today is already a target.
                        </p>
                    </div>
                </div>

                {/* ── THREAT CARDS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {threats.map(({ icon: Icon, color, label, title, body }, index) => {
                        const c = colorMap[color]
                        return (
                            <div
                                key={index}
                                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                            >
                                {/* Left accent bar on hover */}
                                <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${c.bar} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Top row: icon + label */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2 rounded-lg ${c.icon}`}>
                                        <Icon size={16} />
                                    </div>
                                    <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${c.label}`}>
                                        {label}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-3">
                                    {title}
                                </h3>

                                {/* Body */}
                                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                                    {body}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* ── BOTTOM CTA STRIP ── */}
                <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.015]">
                    <div>
                        <p className="text-white font-semibold text-base tracking-tight mb-1">
                            Get the Full Quantum Threat Briefing.
                        </p>
                        <p className="text-gray-500 text-sm font-light">
                            Download our product brochure — architecture, compliance standards, and pilot deployment details.{" "}
                            <span className="text-gray-300">Everything decision-makers need.</span>
                        </p>
                    </div>
                    <a
                        href="/brochure.pdf"
                        download
                        className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-purple-500 hover:bg-purple-600 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap text-white"
                    >
                        <Download size={15} />
                        Download Brochure
                    </a>
                </div>
            </div>
        </section>
    )
}
