import { GlowCard } from "../ui/Glowcard";
import { Button } from "../ui/Button";
import {motion} from "framer-motion";

export function GameCard({ title, description, image, url }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="transition duration-300 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
        <GlowCard>
                <div className="border border-purple-900/30 group cursor-pointer">

                {/* Image */}
                <div className="h-40 rounded-xl overflow-hidden mb-4">
                    <img
                        src={image}
                        alt={title}
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-110 brightness-90 contrast-110 group-hover:brightness-100" 
                    />
                </div>
                {/* TITLE */}
                <div className="h-px bg-purple-500/20 my-2" />
                <h3 className="text-lg font-semibold mb-1">{title}</h3>

                {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                        {description}
                    </p>

                {/* CTA */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                            Learn More
                        </Button>
                    </a>
            </div>
        </GlowCard>
        </motion.div>
    )
}