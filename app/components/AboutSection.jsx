import RobotScene from "./ui/RobotScene"

export default function AboutSection() {
    return (
        <section id="about" className="relative h-screen w-full flex items-center justify-center z-10  to-black text-white bg-gradient-to-br from-gray-900 via-[#1a1a1a]">

            <div className="max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full pt-20 pb-10">

                {/* LEFT SIDE: The Content (Refined & Minimal) */}
                {/* LEFT SIDE: The Content (Refined & Minimal) */}
                {/* Added -mt-12 to shift everything up slightly */}
                <div className="flex flex-col justify-center h-full z-20 -mt-12">

                    {/* 1. The Badge */}
                    <div className="mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase border-b border-purple-500/30 pb-1">
                            / Who We Are
                        </span>
                    </div>

                    {/* 2. The Headline */}
                    <h2 className="text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                        The Post-
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white">
                            Quantum
                        </span> Shift.
                    </h2>

                    {/* 3. The Hook - Updated to be more explainable */}
                    {/* 3. The Hook - Expanded & Explanatory */}
                    <div className="mb-12 max-w-xl">
                        <p className="text-lg text-gray-400 font-light leading-relaxed mb-4">
                            We are a <span className="text-white font-medium">quantum-security technology company</span> architecting the defense for the post-quantum era.
                        </p>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            As advancing compute power renders conventional encryption (RSA/ECC) obsolete, we engineer AI-driven, regulation-aligned infrastructure to <span className="text-white font-medium">safeguard national sovereignty and critical networks.</span>
                        </p>
                    </div>

                    {/* 4. The 2x2 Spec Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12 border-l border-white/10 pl-6">
                        {[
                            { label: "Architecture", val: "Quantum-Resilient" },
                            { label: "Defense", val: "AI-Driven" },
                            { label: "Standard", val: "NIST-Compliant" },
                            { label: "Target", val: "Critical Infra" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</span>
                                <span className="text-sm md:text-base font-medium text-gray-200">{item.val}</span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* RIGHT SIDE: The AI Core (Kept Exactly as requested) */}
                <div className="relative h-full w-full lg:block z-10 lg:flex items-center justify-center hidden">
                    {/* A subtle glow behind to make it pop */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

                    {/* The 3D Scene */}
                    <RobotScene />
                    {/* Make sure to import AICoreScene at the top if you renamed it */}
                </div>

            </div>
        </section>
    )
}