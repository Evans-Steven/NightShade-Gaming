import { Button } from "../ui/Button";
import {motion} from "framer-motion";
import NightShadeLogo from "../assets/nightshade-gaming.png";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
        <nav className="sticky top-0 z-50 bg-night/70 backdrop-blur-xl border-b border-purple-900/40">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                        <div className="flex items-center gap-3">
                            <img
                                src={NightShadeLogo}
                                alt="NightShade Gaming"
                                className="h-12 w-12 object-contain"
                            />

                            <span className="text-xl font-bold text-purple-300 sm:text-2xl">
                                NightShade
                            </span>
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
                            🎮 Join Discord
                        </a>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-3">
                        <a href="#games" className="hidden sm:block">
                            <Button variant="outline">View Games</Button>
                        </a>
                        <a
                            href="https://discord.gg/nightshade-servers-561094823231356959"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="primary">🎮 Join Discord</Button>
                        </a>
                    </div>

            </div>
        </nav>
        </motion.nav>
    );
}