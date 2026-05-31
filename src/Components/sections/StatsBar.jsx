import { GlowCard } from "../ui/GlowCard";

export default function StatsBar() {
    const stats = [
        {
            title: "Multi-Game",
            description: "Survival, sandbox, and co-op experiences",
        },
        {
            title: "Events",
            description: "Community nights and group activities",
        },
        {
            title: "Discord",
            description: "The center of our community",
        },
        {
            title: "Growth",
            description: "Building something together",
        },
    ];

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <GlowCard key={stat.title}>

                            <div className="text-center transition group-hover:scale-105">
                                <p className="text-xl font-bold text-white">
                                    {stat.title}
                                </p>

                                <p className="text-gray-400 text-sm mt-2">
                                    {stat.description}
                                </p>
                            </div>

                        </GlowCard>
                    ))}
                </div>

            </div>
        </section>
    );
}