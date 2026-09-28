import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, X, ExternalLink, GitFork, Sun, Moon } from "lucide-react";
import Reveal from "./components/animation/Reveal";
import { SweepAnimation } from "./components/animation/SweepAnimation";
import { Footer } from "./components/share/Footer";
import { Card } from "./components/common/Card";
import { TechStack } from "./pages/TechStack";
import { projects } from "./data/projectData";
import { Project } from "./pages/Projects";


const theme = {
  light: {
    bg: "bg-stone-50",
    text: "text-stone-900",
    dim: "text-stone-500",
    border: "border-stone-200",
    card: "bg-white",
    accent: "text-amber-700",
    accentBg: "bg-amber-700",
  },
  dark: {
    bg: "bg-zinc-950",
    text: "text-zinc-100",
    dim: "text-zinc-400",
    border: "border-zinc-800",
    card: "bg-zinc-900",
    accent: "text-amber-400",
    accentBg: "bg-amber-400",
  },
};

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function App() {
  const [mode, setMode] = useState("light");
  const [selected, setSelected] = useState(null);
  const [curtain, setCurtain] = useState("idle"); // idle | sweep | retreat
  const t = theme[mode];
  const isDark = mode === "dark";

  const toggleTheme = () => {
    setCurtain("sweep");
    setTimeout(() => {
      setMode((m) => (m === "light" ? "dark" : "light"));
      setCurtain("retreat");
      setTimeout(() => setCurtain("idle"), 350);
    }, 350);
  };

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-300 font-sans relative overflow-hidden`}>
      {/* curtain sweep overlay */}
      <SweepAnimation t={t} curtain={curtain} />

      <div className="max-w-2xl mx-auto px-6 py-16">
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
                  <motion.span
                    key="moon"
                    className="absolute flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={11} className="text-zinc-950" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun" 
                    className="absolute flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={11} className="text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          </motion.button>
        </motion.header>

        <Project t={t} setSelected={setSelected} />

        <TechStack t={t} />
        <Footer t={t} />
        
      </div>

      <Card selected={selected} setSelected={setSelected} t={t} projects={projects} />
    </div>
  );
}