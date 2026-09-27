import { motion } from "motion/react"
import { Github,Linkedin } from "lucide-react"

export const Footer = ({t}) => (
    <motion.footer
          className={`flex gap-6 pt-6 mt-14 border-t ${t.border}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/sayan0291"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-sm flex items-center gap-1.5 ${t.dim} hover:opacity-70 hover:translate-x-1 transition-all duration-200`}
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sayan-ghanta-b4376035a/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-sm flex items-center gap-1.5 ${t.dim} hover:opacity-70 hover:translate-x-1 transition-all duration-200`}
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </motion.footer>
)