export default function TrustItem({ name }) {
    return (
        <div className="group relative border border-white/10 rounded-xl px-6 py-6 flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">

            <span className="text-gray-300 text-sm tracking-wide group-hover:text-white transition">
                {name}
            </span>

        </div>
    )
}