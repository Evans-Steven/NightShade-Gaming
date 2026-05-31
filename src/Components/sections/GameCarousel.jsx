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
        <section id="games" className="pt-8 pb-16 sm:pt-12 sm:pb-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-6 shadow-[0_0_50px_rgba(124,58,237,0.18)] backdrop-blur-md lg:p-8">

                    <div className="mb-10 flex items-center justify-center gap-4 text-center">
                        <div className="h-px w-12 bg-green-500/60 sm:w-20" />

                        <h2 className="text-3xl font-bold uppercase tracking-wider text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] sm:text-4xl">
                            Community Favorites
                        </h2>

                        <div className="h-px w-12 bg-green-500/60 sm:w-20" />
                    </div>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => scrollCarousel("left")}
                            className="
                                hidden lg:block
                                absolute
                                left-[-38px]
                                top-1/2
                                -ztranslate-y-1/2
                                z-30
                                text-5xl
                                text-purple-400
                                hover:text-purple-300
                                hover:scale-125
                                transition-all
                                duration-300
                                "
                        >
                            ❮
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollCarousel("right")}
                            className="
                                hidden lg:block
                                absolute
                                right-[-38px]
                                top-1/2
                                -ztranslate-y-1/2
                                z-30
                                text-5xl
                                text-purple-400
                                hover:text-green-300
                                hover:scale-125
                                transition-all
                                duration-300
                                "
                        >
                            ❯
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
            </div>
        </section>
    );
}
