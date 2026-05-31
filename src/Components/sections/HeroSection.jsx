import { Button } from "../ui/Button";
import NightShadeLogo from "../assets/nightshade-gaming.png";
import HeroBg from "../assets/nightshade-cityscape.png";
import { motion } from "framer-motion";

const discordUrl = "https://discord.gg/nightshade-servers-561094823231356959";

export default function HeroSection() {
    return (
        <section className="bg-night py-6 sm:py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 py-10 sm:py-16 lg:py-20">

                    {/* HERO IMAGE */}
                        <img
                            src={HeroBg}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover object-[center_35%] opacity-90 sm:object-center"
                        />

                    {/* DARK OVERLAYS */}
                    <div className="absolute inset-0 bg-black/25" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

                    {/* CONTENT */}
                    <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
                        <motion.img
                            src={NightShadeLogo}
                            alt="NightShade Gaming"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-2 max-w-[220px] sm:max-w-[320px]"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
                                SURVIVAL • SANDBOX • CO-OP • COMMUNITY
                            </p>

                            <h1 className="mx-auto max-w-4xl text-3xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Built for players who want more than{" "}
                                <span className="text-purple-400 drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]">
                                    random lobbies.
                                </span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                                For survival, sandbox, co-op, and beyond. Find your squad,
                                join events, and help shape the NightShade community.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a href={discordUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">🎮 Join Discord</Button>
                                </a>

                                <a href="#games">
                                    <Button variant="secondary">Explore Games</Button>
                                </a>
                            </div>

                            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-purple-500/30 bg-black/45 p-5 shadow-[0_0_45px_rgba(124,58,237,0.25)] backdrop-blur-md sm:grid-cols-4">
                                <div>
                                    <p className="text-2xl font-bold text-green-400">4+</p>
                                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                        Games Supported
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-purple-400">Events</p>
                                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                        Community Nights
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-green-400">Discord</p>
                                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                        Community Hub
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-purple-400">100%</p>
                                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                                        Community Driven
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    </div>
                </div>
        </section>
    );
}
