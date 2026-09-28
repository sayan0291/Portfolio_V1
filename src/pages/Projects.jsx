import { motion } from "motion/react";
import { projects } from "../data/projectData.js";
import Reveal from "../components/animation/Reveal.jsx";
import { GitFork } from "lucide-react";

export const Project = ({t,setSelected}) => (
    <Reveal className="mb-14">
          <div className={`font-mono text-sm ${t.dim} pb-3 mb-1 border-b ${t.border}`}>
            projects
          </div>

          {projects.map((p, i) => (
            <motion.button
              key={p.name}
              onClick={() => setSelected(i)}
              className={`w-full flex justify-between items-center gap-4 py-4 border-b ${t.border} last:border-none text-left group`}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="min-w-0">
                <div className="text-base font-semibold group-hover:opacity-80 transition-opacity">
                  {p.name}
                </div>
                <div className={`text-sm ${t.dim}`}>{p.summary}</div>
              </div>
              <div className={`font-mono text-xs whitespace-nowrap flex items-center gap-1 ${t.dim}`}>
                {p.fork && <GitFork size={12} />}
                {p.tag}
              </div>
            </motion.button>
          ))}
        </Reveal>
)