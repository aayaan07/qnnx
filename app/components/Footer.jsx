import { ArrowRight, Globe, Linkedin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black text-white py-20 border-t border-white/5 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                {/* TOP SECTION: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
                            QNNX.
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
                            Building next-generation cybersecurity infrastructure for the
                            post-quantum era.
                            <span className="block mt-2 text-gray-500">
                                Securing national sovereignty through AI-driven defense and
                                quantum-resilient architecture.
                            </span>
                        </p>

                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://linkedin.com/company/qnn-global"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://www.qnnx.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                            >
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter / CTA (Static Version) */}
                    <div className="lg:pl-10">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Stay Ahead of the Threat
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Get the latest briefings on Post-Quantum Cryptography standards
                            and QNNX pilot deployments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                                />
                            </div>
                            <button className="px-6 py-3 rounded-lg font-bold text-sm bg-white text-black hover:bg-gray-200 transition-all flex items-center justify-center gap-2 min-w-[140px]">
                                Subscribe <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* MIDDLE SECTION: Links & Contact */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/5">
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                            Solutions
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-light">
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("solutions")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Post-Quantum Crypto
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("solutions")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Secure Communication
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("solutions")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    AI Cyber Defense
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("solutions")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Infrastructure Protection
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                            Company
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-light">
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("about")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    About QNNX
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("home")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Our Mission
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("engagements")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Founder Profile
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("engagements")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Strategic Partners
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                            Legal
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-light">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Compliance
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-light">
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-purple-400" />
                                <a
                                    href="mailto:contact@qnnx.in"
                                    className="hover:text-white transition-colors"
                                >
                                    contact@qnnx.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-purple-400" />
                                <a
                                    href="tel:+917601959971"
                                    className="hover:text-white transition-colors"
                                >
                                    +91 7601959971
                                </a>
                            </li>
                            <li className="flex items-start gap-3 mt-4">
                                <ShieldCheck
                                    size={16}
                                    className="text-purple-400 shrink-0 mt-0.5"
                                />
                                <span>
                                    Based in India
                                    <br />
                                    <span className="text-xs opacity-60">
                                        Serving Global Security Needs
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION: Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>
                        &copy; {new Date().getFullYear()} QNNX Global. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span>Designed for Sovereignty</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>Powered by Quantum Intelligence</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
