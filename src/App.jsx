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
import { ToggleButton } from "./components/animation/ToggleButton";


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
        

        <Project t={t} setSelected={setSelected} />

        <TechStack t={t} />
        <Footer t={t} />
        
      </div>

      <Card selected={selected} setSelected={setSelected} t={t} projects={projects} />
    </div>
  );
}