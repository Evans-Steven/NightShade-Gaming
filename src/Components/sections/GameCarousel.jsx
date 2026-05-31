import { useRef } from "react";
import { GameCard } from "../cards/GameCard";

export default function GameCarousel() {
    const carouselRef = useRef(null);

    const games = [
        {
            title: "7 Days to Die",
            description: "Zombie survival, exploration, and base building.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
        },
        {
            title: "Project Zomboid",
            description: "Hardcore survival and cooperative gameplay.",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        },
        {
            title: "Conan Exiles",
            description: "Open-world survival with clans and progression.",
            image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
        },
        {
            title: "SCUM",
            description: "Team survival, PvP encounters, and long-term progression.",
            image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
        },
    ];

    function scrollCarousel(direction) {
        if (!carouselRef.current) return;

        const scrollAmount = 360;

        carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    }

    return (
        <section id="games" className="py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-wider text-purple-400 drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]">
                        Community Favorites
                    </h2>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => scrollCarousel("left")}
                        className="absolute left-[-72px] top-1/2 z-20 -translate-y-1/2 h-16 w-16 rounded-full border border-purple-500/40 bg-black/70 text-purple-300 backdrop-blur-sm transition hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    >
                        <span className="text-xl">←</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollCarousel("right")}
                        className="absolute right-[-72px] top-1/2 z-20 -translate-y-1/2 h-16 w-16 rounded-full border border-green-500/40 bg-black/70 text-green-300 backdrop-blur-sm transition hover:bg-green-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]"
                    >
                        <span className="text-xl">→</span>
                    </button>

                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-night to-transparent" />

                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-night to-transparent" />

                    <div
                        ref={carouselRef}
                        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {games.map((game) => (
                            <div
                                key={game.title}
                                className="min-w-[280px] snap-start sm:min-w-[320px] lg:min-w-[340px]"
                            >
                                <GameCard {...game} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
