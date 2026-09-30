import { motion } from "motion/react";
import { Reveal } from "../components";

const techStack = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Git"];

export const TechStack = ({t}) => (
    <Reveal>
        <div className={`font-mono text-sm ${t.dim} pb-3 mb-4 border-b ${t.border}`}>
        tech stack
        </div>
        <div className="flex flex-wrap gap-2">
        {techStack.map((item) => (
            <motion.span
            key={item}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border ${t.border} ${t.dim} inline-block`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            >
            {item}
            </motion.span>
        ))}
        </div>
    </Reveal>
)