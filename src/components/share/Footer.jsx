import { motion } from "motion/react"
import { Github,Linkedin } from "lucide-react"
import { Icon } from "../common/Icon"

export const Footer = ({t}) => (
    <motion.footer
          className={`flex gap-6 pt-6 mt-14 border-t ${t.border}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Icon link="https://github.com/sayan0291" t={t} >
            <Github size={14} /> GitHub
          </Icon>
          <Icon link="https://www.linkedin.com/in/sayan-ghanta-b4376035a/" t={t} >
            <Linkedin size={14} /> LinkedIn
          </Icon>
        </motion.footer>
)