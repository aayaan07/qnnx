import SolutionCard from "./ui/SolutionCard"
import { solutions } from "../lib/constants"

export default function SolutionsSection() {
    return (

        <section id="solutions" className="relative h-screen w-full flex flex-col items-center justify-center z-10 bg-black/80 backdrop-blur-md overflow-hidden">

            {/* WIDE Container (max-w-7xl) but constrained height */}
            <div className="max-w-7xl px-6 w-full h-full max-h-[800px] flex flex-col justify-center">

                {/* 1. HEADER (Compact Vertical, Wide Horizontal) */}
                <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end border-b border-white/5 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-[1px] w-8 bg-purple-500"></div>
                            <span className="text-purple-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                                Core Capabilities
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-none">
                            Quantum-Resilient <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gray-500">
                                Architectures.
                            </span>
                        </h2>
                    </div>

                    <div className="pb-1">
                        <p className="text-gray-500 text-sm leading-relaxed font-light max-w-lg">
                            <span className="text-gray-300 font-medium">
                                Deployable, regulation-aligned solutions.
                            </span>{" "}
                            We adhere to global post-quantum standards to ensure national digital sovereignty and long-term security.
                        </p>
                    </div>
                </div>


                {/* 2. THE GRID (Wide Cards, Short Height) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 flex-1 max-h-90">

                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={index}
                            title={solution.title}
                            description={solution.description}
                            code={solution.code}
                            Icon={solution.icon}
                            color={solution.color}
                        />
                    ))}

                </div>
            </div>
        </section>


    )
}