import Navbar from "./components/layout/Navbar";
import HeroSection from "./Components/sections/HeroSection";
import StatsBar from "./components/sections/StatsBar";
import GameCarousel from "./components/sections/GameCarousel";
import { GameCard } from "./components/cards/GameCard";

function App() {
  const games = [
    {
      title: "7 Days to Die",
      description: "Zombie survival, exploration, and base building.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      title: "Project Zomboid",
      description: "Hardcore survival and cooperative gameplay.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      title: "Conan Exiles",
      description: "Open-world survival with clans and progression.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },
    {
      title: "Scum",
      description: "Team survival, PvP encounters, and long-term progression.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },
  ];

  return (
    <div className="bg-night min-h-screen text-white">

      <Navbar />
      <HeroSection/>
      <StatsBar/>
      
      {/*Divider*/}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-12 max-w-7xl mx-auto opacity-70" />

      <GameCarousel/>

      <section id="community" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-purple-900/40 bg-purple-950/20 p-8 shadow-[0_0_40px_rgba(124,58,237,0.15)]">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
              Join the Community
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Built for players who want more than random lobbies.
            </h2>

            <p className="mt-4 max-w-3xl text-gray-400">
              NightShade Gaming is a multi-game community focused on teamwork,
              events, long-term progression, and finding people who actually want
              to play together.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-purple-800/40 bg-black/30 p-5">
                <h3 className="text-lg font-semibold text-purple-300">
                  Find Your Squad
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Connect with players across survival, sandbox, and co-op games.
                </p>
              </div>

              <div className="rounded-xl border border-green-800/40 bg-black/30 p-5">
                <h3 className="text-lg font-semibold text-green-300">
                  Join Events
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Take part in game nights, challenges, community sessions, and future events.
                </p>
              </div>

              <div className="rounded-xl border border-purple-800/40 bg-black/30 p-5">
                <h3 className="text-lg font-semibold text-purple-300">
                  Stay Connected
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Discord keeps the community organized with updates, channels, and announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="discord" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-green-500/30 bg-gradient-to-r from-purple-950/40 to-green-950/20 p-8 shadow-[0_0_40px_rgba(34,197,94,0.12)] md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
                Ready to join?
              </p>

              <h2 className="text-3xl font-bold text-white">
                Step into the NightShade community.
              </h2>

              <p className="mt-3 max-w-2xl text-gray-400">
                Join the Discord to connect with other players, follow announcements,
                participate in events, and help shape what comes next.
              </p>
            </div>

            <a
              href="https://discord.gg/nightshade-servers-561094823231356959"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(34,197,94,0.35)] transition hover:bg-green-400"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;