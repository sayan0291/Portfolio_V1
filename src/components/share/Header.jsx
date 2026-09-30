import { motion,AnimatePresence } from "motion/react"
import { ToggleButton } from "../../components"
import { useTheme } from "../../hooks/useTheme"
import { Moon,Sun } from "lucide-react"


export const Header = () => {

    const { headerContainer,headerItem,t,isDark,toggleTheme } = useTheme()

    return(
        <>
            <motion.header
                className="flex justify-between items-start gap-4 mb-16"
                variants={headerContainer}
                initial="hidden"
                animate="visible"
                >
                <div>
                    <motion.div variants={headerItem} className={`font-mono text-sm ${t.dim}`}>
                    sayan0291
                    </motion.div>
                    <motion.h1
                    variants={headerItem}
                    className="font-mono text-3xl md:text-4xl font-bold tracking-tight my-3"
                    >
                    Sayan Ghanta
                    </motion.h1>
                    <motion.div variants={headerItem} className={`font-mono text-sm mb-4 ${t.accent}`}>
                    Software Developer
                    </motion.div>
                    <motion.p variants={headerItem} className={`text-sm leading-relaxed max-w-md ${t.dim}`}>
                    I build small web tools and side projects — from a minor-project code editor to
                    weekend experiments. Based on Earth, mostly found in the terminal.
                    </motion.p>
                </div>

                {/* theme toggle: spring knob slide + icon crossfade */}
                <motion.button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    className={`relative w-12 h-7 rounded-full border ${t.border} ${t.card} flex-shrink-0 transition-colors duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full ${t.accentBg} flex items-center justify-center`}
                    animate={{ x: isDark ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    >
                    <AnimatePresence initial={false} mode="wait">
                        {isDark ? (
                        <ToggleButton>
                            <Moon size={11} className="text-zinc-950" />
                        </ToggleButton>
                        ) : (
                        <ToggleButton>
                            <Sun size={11} className="text-white" />
                        </ToggleButton>
                        )}
                    </AnimatePresence>
                    </motion.span>
                </motion.button>
            </motion.header>
        </>
    )
}