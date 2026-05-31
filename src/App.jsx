import Navbar from "./components/layout/Navbar";
import HeroSection from "./Components/sections/HeroSection";
import StatsBar from "./components/sections/StatsBar";
import GameCarousel from "./components/sections/GameCarousel";
import NightShadeBillboard from "./components/assets/nightshade-billboard.png";
import NightShadeGaming from "./components/assets/nightshade-gaming.png";

function App() {
  return (
    <div className="bg-night min-h-screen text-white">

      <Navbar />
      <HeroSection/>
      <StatsBar/>
      
      {/*Divider*/}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-4 sm:my-8 max-w-7xl mx-auto opacity-70" />

      <GameCarousel/>

      <section id="community" className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 overflow-hidden rounded-3xl border border-purple-500/30 bg-black/40 p-6 shadow-[0_0_50px_rgba(124,58,237,0.18)] backdrop-blur-md lg:grid-cols-[0.9fr_1fr_1.1fr] lg:p-8">

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-green-400">
                Join the Community
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Built for players who want more than{" "}
                <span className="text-purple-400">random lobbies.</span>
              </h2>

              <p className="mt-5 text-gray-400">
                We focus on teamwork, events, long-term progression, and finding
                people who actually want to play together.
              </p>
            </div>

            <div className="space-y-5 border-purple-500/20 lg:border-l lg:border-purple-500/20 lg:pl-10">
              <div>
                <h3 className="text-lg font-semibold text-green-300">
                  👥 Find Your Squad
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Connect with players across multiple games and time zones.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-300">
                  📅 Join Events
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Take part in game nights, challenges, community sessions, and more.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-300">
                  💬 Stay Connected
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Discord keeps everything organized with channels, roles, and updates.
                </p>
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-purple-500/30 lg:min-h-full">
              <img
                src={NightShadeBillboard}
                alt="NightShade billboard saying We Game Together"
                className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="discord" className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-green-500/30 bg-black/40 p-6 shadow-[0_0_45px_rgba(34,197,94,0.14)] backdrop-blur-md sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-green-950/30" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-5">
                <div className="hidden rounded-2xl border border-purple-500/30 bg-purple-950/40 p-4 text-5xl shadow-[0_0_30px_rgba(168,85,247,0.25)] sm:block">
                  🎮
                </div>

                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.35em] text-green-400">
                    Ready to join?
                  </p>

                  <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                    Step into the{" "}
                    <span className="text-purple-400">NightShade</span> community.
                  </h2>

                  <p className="mt-3 max-w-2xl text-gray-400">
                    Join the Discord, introduce yourself, follow announcements, and
                    help shape what comes next.
                  </p>
                </div>
              </div>

              <a
                href="https://discord.gg/nightshade-servers-561094823231356959"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-green-500 px-8 py-4 text-center font-semibold text-black shadow-[0_0_25px_rgba(34,197,94,0.35)] transition hover:bg-green-400 md:w-auto"
              >
                🎮 Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-900/40 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-3xl border border-purple-500/20 bg-black/30 p-6 shadow-[0_0_40px_rgba(124,58,237,0.12)] backdrop-blur-md md:grid-cols-[1.2fr_0.8fr_0.8fr]">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={NightShadeGaming}
                  alt="NightShade Gaming"
                  className="h-14 w-auto drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                />

                <div>
                  <h3 className="text-xl font-bold text-white">
                    NightShade Gaming
                  </h3>
                  <p className="text-sm text-purple-300">
                    More than random lobbies.
                  </p>
                </div>
              </div>

              <p className="max-w-sm text-sm text-gray-400">
                A multi-game community built around teamwork, events, progression,
                and finding people who actually want to play together.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
                Quick Links
              </h4>

              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="#games" className="transition hover:text-green-400">
                  Games
                </a>
                <a href="#community" className="transition hover:text-green-400">
                  Community
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
                Join Us
              </h4>

              <a
                href="https://discord.gg/nightshade-servers-561094823231356959"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl border border-green-500/40 px-5 py-3 text-sm font-semibold text-green-300 transition hover:bg-green-500/10 hover:text-white"
              >
                🎮 Join Discord
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            © 2019-2026 NightShade Gaming. Built for community. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;