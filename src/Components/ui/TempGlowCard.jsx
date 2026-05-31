export function GlowCard({ children }) {
    return (
        <div className="border border-purple-900/30 group relative rounded-2xl p-[1px] transition duration-300">

            {/* OUTER GLOW (stronger, visible) */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-green-400/40 via-purple-500/30 to-transparent opacity-70 blur-md group-hover:opacity-100 transition duration-300" />

            {/* BORDER LINE */}
            <div className="absolute inset-0 rounded-2xl border border-purple-800/40" />

            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-60 group-hover:opacity-100 transition" />

            {/* INNER */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
            <div className="relative bg-nightLight/70 backdrop-blur-xl rounded-2xl p-5 transition duration-300 group-hover:bg-nightLight/90">
                {children}
            </div>

        </div>
    );
}
