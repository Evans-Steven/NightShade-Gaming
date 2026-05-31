import { Button } from "../ui/Button";
import {motion} from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
        <nav className="sticky top-0 z-50 bg-night/70 backdrop-blur-xl border-b border-purple-900/40">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-md bg-purple-500/20 flex items-center justify-center border border-green-400/40 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                            <span className="text-green-400 font-bold">NS</span>
                        </div>

                            <h1 className="text-xl font-bold text-purple-400 drop-shadow-[0_0_6px_rgba(124,58,237,0.6)] tracking-wide transition duration-300 hover:tracking-widest">
                                NightShade
                            </h1>

                    </div>
                </div>

                    {/* LINKS */}
                    <div className="hidden md:flex gap-8 text-gray-300">
                        <a href="#games">Games</a>
                        <a href="#community">Community</a>
                        <a
                            href="https://discord.gg/nightshade-servers-561094823231356959"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discord
                        </a>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-3">
                        <Button variant="outline">View Games</Button>
                        <a
                            href="https://discord.gg/nightshade-servers-561094823231356959"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="primary">
                                Join Discord
                            </Button>
                        </a>
                    </div>

            </div>
        </nav>
        </motion.nav>
    );
}