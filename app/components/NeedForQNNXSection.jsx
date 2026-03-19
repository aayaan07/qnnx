"use client"

import { Download, ExternalLink } from "lucide-react"

const cases = [
    {
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
        source: "DIGITAL BANKING",
        date: "Near Future Risk",
        quote:
            "A user's entire bank account history, transactions, and credentials—secured today—could be decrypted in the future using quantum computers, exposing financial identities retroactively.",
        tag: "Banking Threat",
        tagColor: "red",
    },
    {
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        source: "ENCRYPTION FAILURE",
        date: "Present-Day Concern",
        quote:
            "Core encryption standards like RSA and ECC are already considered vulnerable in a post-quantum world. Once scalable quantum systems arrive, today’s encryption could be broken in minutes.",
        tag: "Encryption Risk",
        tagColor: "purple",
    },
    {
        image: "https://media.istockphoto.com/id/1355657756/photo/military-surveillance-officer-working-on-a-city-tracking-operation-in-a-central-office-hub.jpg?s=612x612&w=0&k=20&c=IR_npi-H0X-65r1R-LIyHiea1XHuF6agkzlSkfwtiIQ=",
        source: "DEFENSE COMMUNICATION",
        date: "Critical Risk",
        quote:
            "Military and government communications intercepted today may remain unread—but future quantum systems could decrypt them, exposing classified strategies and national security secrets.",
        tag: "National Security",
        tagColor: "blue",
    },
    {
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        source: "SMART INFRASTRUCTURE",
        date: "Emerging Threat",
        quote:
            "Smart grids, power systems, and critical infrastructure rely on encryption. A quantum attack could disrupt entire cities by breaking these protections.",
        tag: "Infrastructure Risk",
        tagColor: "orange",
    },
];

const tagStyles = {
    blue: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    red: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    orange: "bg-orange-500/15 text-orange-300 border-orange-500/30",
}

export default function NeedForQNNXSection() {
    return (
        <section
            id="need-for-qnnx"
            className="relative w-full bg-black text-white overflow-hidden py-24"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
            {/* Ambient purple glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-violet-700/20 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-100 h-100 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, #a78bfa 0px, #a78bfa 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #a78bfa 0px, #a78bfa 1px, transparent 1px, transparent 60px)",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* ── HEADER ── */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="h-px w-8 bg-violet-500" />
                        <p
                            className="text-[10px] uppercase tracking-[0.35em] text-violet-400"
                            style={{ fontFamily: "'Courier New', monospace" }}
                        >
                            Why Now
                        </p>
                        <div className="h-px w-8 bg-violet-500" />
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold leading-tight mb-5 tracking-tight text-white"
                    >
                        Need for Quantum-Resistant<br />
                        Technologies Against{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-purple-300 to-indigo-400">
                            Quantum Threats
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto font-light" style={{ fontFamily: "sans-serif" }}>
                        Quantum computers threaten classical encryption, highlighting the need for
                        quantum-resistant technologies and secure communication methods to protect
                        against evolving quantum-based attacks on critical information.
                    </p>
                </div>

                {/* ── EVIDENCE CARDS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                    {cases.map(({ image, source, date, quote, tag, tagColor }, i) => (
                        <article
                            key={i}
                            className="group relative bg-white/3 rounded-2xl overflow-hidden border border-white/[0.07] hover:bg-white/5 transition-all duration-500 cursor-pointer"
                        >
                            {/* Hover left accent bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-linear-to-b from-violet-500 to-purple-700 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={image}
                                    alt={source}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                                />
                                {/* Purple-tinted overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-[#07050f] via-violet-950/30 to-transparent" />
                                {/* Tag chip */}
                                <span
                                    className={`absolute top-3 left-3 text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-sm ${tagStyles[tagColor]}`}
                                    style={{ fontFamily: "'Courier New', monospace" }}
                                >
                                    {tag}
                                </span>
                                {/* External link icon */}
                                {/* <span className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink size={12} className="text-white" />
                                </span> */}
                            </div>

                            {/* Body */}
                            <div className="p-5">
                                {/* Quote */}
                                <p className="text-[13px] text-gray-300 leading-relaxed mb-4 italic" style={{ fontFamily: "'Georgia', serif" }}>
                                    &ldquo;{quote}&rdquo;
                                </p>

                                {/* Source footer */}
                                <div className="flex items-center justify-between pt-3 border-t border-white/[0.07]">
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-400"
                                        style={{ fontFamily: "'Courier New', monospace" }}
                                    >
                                        {source}
                                    </span>
                                    <span
                                        className="text-[10px] text-gray-600"
                                        style={{ fontFamily: "'Courier New', monospace" }}
                                    >
                                        {date}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="flex justify-center">
                    <a
                        href="/brochure.pdf"
                        download
                        className="inline-flex items-center px-8 py-3 bg-violet-600 hover:bg-[#5b21b6] text-white rounded-full text-sm font-semibold transition-all duration-300"
                        style={{ fontFamily: "sans-serif" }}
                    >
                        Request a Demo
                    </a>
                </div>

            </div>
        </section>
    )
}
