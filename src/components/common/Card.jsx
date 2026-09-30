import { AnimatePresence,motion } from "motion/react"
import { ExternalLink,GitFork,X } from "lucide-react"
import { useTheme } from "../../hooks/useTheme"
import { projects } from "../../data/projectData"

export const Card = () => {

  const { selected,setSelected,t } = useTheme()

  return (
    <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className={`${t.card} ${t.text} max-w-md w-full rounded-lg border ${t.border} p-6`}
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-mono text-xl font-bold">{projects[selected].name}</h2>
                  <div className={`font-mono text-xs mt-1 flex items-center gap-1 ${t.dim}`}>
                    {projects[selected].fork && <GitFork size={12} />}
                    {projects[selected].tag}
                    {projects[selected].fork && " · fork"}
                  </div>
                </div>
                <motion.button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className={`${t.dim}`}
                  whileHover={{ opacity: 0.7, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${t.dim}`}>
                {projects[selected].details}
              </p>

              <a
                href={projects[selected].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-mono text-sm ${t.accent} hover:opacity-70 transition-opacity`}
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
)
}