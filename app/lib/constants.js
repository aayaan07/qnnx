import { ShieldCheck, Network, Cpu, Lock } from "lucide-react"

export const solutions = [
    {
        title: "Post-Quantum Crypto",
        code: "PQC-01",
        description:
            "Transitioning digital assets to NIST-standardized algorithms resistant to quantum attacks.",
        icon: ShieldCheck,
        color: "purple"
    },
    {
        title: "Secure Communication",
        code: "QSC-02",
        description:
            "Establishing unbreachable communication channels for defense and enterprise using hybrid models.",
        icon: Network,
        color: "blue"
    },
    {
        title: "AI-Driven Defense",
        code: "AID-03",
        description:
            "Utilizing AI to anticipate and neutralize sophisticated cyber threats in real-time.",
        icon: Cpu,
        color: "pink"
    },
    {
        title: "Critical Infrastructure",
        code: "CIP-04",
        description:
            "Safeguarding government networks and financial institutions from long-term vulnerabilities.",
        icon: Lock,
        color: "emerald"
    },
]