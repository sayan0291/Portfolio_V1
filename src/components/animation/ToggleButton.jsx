import { motion } from "motion/react"

export const ToggleButton = ({children}) => (
    <motion.span
        key="moon"
        className="absolute flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
        transition={{ duration: 0.2 }}
        >
            {children}
    </motion.span>
)