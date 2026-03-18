export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative h-fit py-16 w-full flex flex-col items-center justify-center z-10 text-white"
        >
            <div className="text-center px-4 max-w-6xl mt-16">

                {/* Top Badge */}
                <div className="mb-6">
                    <span className="text-xs uppercase tracking-[0.25em] text-purple-400 border border-purple-400/20 px-4 py-2 rounded-full">
                        Post-Quantum Cybersecurity
                    </span>
                </div>

                {/* Heading */}
                <h1 className="tracking-tighter mb-10 leading-none">
                    <span className="block text-6xl md:text-7xl text-white mb-2">
                        Guarding the Future at
                    </span>

                    <span className="block bg-clip-text text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600">
                        Quantum Scale
                    </span>
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                    Building next-generation cybersecurity infrastructure designed to
                    defend governments, enterprises, and critical systems from the
                    emerging threat of quantum computing.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

                    <button
                        onClick={() =>
                            document
                                .getElementById("solutions")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition cursor-pointer"
                    >
                        Explore Technology
                    </button>

                    <button
                        onClick={() =>
                            document
                                .getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition cursor-pointer"
                    >
                        Learn More
                    </button>

                </div>

                {/* Info Metrics */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center border-t border-white/10 pt-8">

                    <div>
                        <p className="text-2xl font-semibold">NIST</p>
                        <p className="text-gray-500 text-sm">Aligned Standards</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">AI</p>
                        <p className="text-gray-500 text-sm">Driven Defense</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">2040+</p>
                        <p className="text-gray-500 text-sm">Quantum Ready</p>
                    </div>

                </div>

            </div>
        </section>
    )
}
