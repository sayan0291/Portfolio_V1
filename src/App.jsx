import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, X, ExternalLink, GitFork, Sun, Moon } from "lucide-react";

const projects = [
  {
    name: "Online Code Editor",
    tag: "HTML",
    fork: false,
    summary: "A browser-based code editor built as a minor project.",
    details:
      "A lightweight code editor that runs entirely in the browser, letting you write and preview HTML/CSS/JS without any setup. Built as a college minor project focused on a clean, distraction-free editing surface.",
    url: "https://github.com/sayan0291/minor_project_online_code_editor",
  },
  {
    name: "Movie Suggest",
    tag: "JavaScript",
    fork: false,
    summary: "An app that recommends movies to watch.",
    details:
      "A small recommendation app that suggests movies based on your input. Focused on a simple, fast interface for browsing suggestions without the clutter of a full streaming platform.",
    url: "https://github.com/sayan0291/movie-suggest",
  },
  {
    name: "College Project",
    tag: "JavaScript",
    fork: false,
    summary: "Coursework project built during college.",
    details:
      "A coursework assignment built to practice core JavaScript fundamentals and project structure as part of the college curriculum.",
    url: "https://github.com/sayan0291/college_project",
  },
  {
    name: "Maggi",
    tag: "HTML",
    fork: false,
    summary: "A small HTML project.",
    details:
      "A compact HTML-based project used to practice page structure, layout, and styling fundamentals.",
    url: "https://github.com/sayan0291/maggi",
  },
  {
    name: "Ben10",
    tag: "JavaScript",
    fork: true,
    summary: "Forked project, extended and customized.",
    details:
      "Originally forked from divyashrma18/ben10, then extended and customized. Used as a base to explore JavaScript patterns beyond the original implementation.",
    url: "https://github.com/sayan0291/ben10",
  },
  {
    name: "Portfolio (v1)",
    tag: "TypeScript",
    fork: true,
    summary: "An earlier forked portfolio template.",
    details:
      "An earlier portfolio template forked from somnath-a612/PORTFOLIO, used as a reference before building a personal version from scratch.",
    url: "https://github.com/sayan0291/PORTFOLIO",
  },
];

// Fill this in with your own stack — order roughly by how much you use them.
const techStack = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Git"];

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

// Reveals children once the wrapped element scrolls into view.
function Reveal({ as: Tag = "div", className = "", style = {}, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default function App() {
  const [mode, setMode] = useState("light");
  const [selected, setSelected] = useState(null);
  const [curtain, setCurtain] = useState("idle"); // idle | sweep | retreat
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const t = theme[mode];
  const isDark = mode === "dark";

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (selected !== null) {
      const id = requestAnimationFrame(() => setModalVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setModalVisible(false);
  }, [selected]);

  const toggleTheme = () => {
    setCurtain("sweep");
    setTimeout(() => {
      setMode((m) => (m === "light" ? "dark" : "light"));
      setCurtain("retreat");
      setTimeout(() => setCurtain("idle"), 350);
    }, 350);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelected(null), 200);
  };

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} transition-colors duration-300 font-sans relative overflow-hidden`}>
      {/* curtain sweep overlay */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-50 pointer-events-none ${t.accentBg}`}
        style={{
          transformOrigin: curtain === "retreat" ? "right" : "left",
          transform: `scaleX(${curtain === "sweep" ? 1 : 0})`,
          transition: "transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      />

      <div className="max-w-2xl mx-auto px-6 py-16">
        <header
          className="flex justify-between items-start gap-4 mb-16"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div>
            <div
              className={`font-mono text-sm ${t.dim}`}
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.5s ease-out",
              }}
            >
              sayan0291
            </div>
            <h1
              className="font-mono text-3xl md:text-4xl font-bold tracking-tight my-3"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.55s ease-out 0.08s, transform 0.55s ease-out 0.08s",
              }}
            >
              Sayan Ghanta
            </h1>
            <div
              className={`font-mono text-sm mb-4 ${t.accent}`}
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.5s ease-out 0.16s, transform 0.5s ease-out 0.16s",
              }}
            >
              Software Developer
            </div>
            <p
              className={`text-sm leading-relaxed max-w-md ${t.dim}`}
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.5s ease-out 0.24s, transform 0.5s ease-out 0.24s",
              }}
            >
              I build small web tools and side projects — from a minor-project code editor to
              weekend experiments. Based on Earth, mostly found in the terminal.
            </p>
          </div>

          {/* theme toggle: spring-like knob slide + icon crossfade */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`relative w-12 h-7 rounded-full border ${t.border} ${t.card} flex-shrink-0 transition-colors duration-300 hover:scale-105 active:scale-90`}
            style={{ transition: "transform 0.15s ease-out, background-color 0.3s, border-color 0.3s" }}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full ${t.accentBg} flex items-center justify-center`}
              style={{
                transform: `translateX(${isDark ? 20 : 0}px)`,
                transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s",
              }}
            >
              <span
                className="absolute flex items-center justify-center"
                style={{
                  opacity: isDark ? 0 : 1,
                  transform: `scale(${isDark ? 0.5 : 1}) rotate(${isDark ? 90 : 0}deg)`,
                  transition: "opacity 0.2s, transform 0.2s",
                }}
              >
                <Sun size={11} className="text-white" />
              </span>
              <span
                className="absolute flex items-center justify-center"
                style={{
                  opacity: isDark ? 1 : 0,
                  transform: `scale(${isDark ? 1 : 0.5}) rotate(${isDark ? 0 : -90}deg)`,
                  transition: "opacity 0.2s, transform 0.2s",
                }}
              >
                <Moon size={11} className="text-zinc-950" />
              </span>
            </span>
          </button>
        </header>

        <Reveal className="mb-14">
          <div className={`font-mono text-sm ${t.dim} pb-3 mb-1 border-b ${t.border}`}>
            projects
          </div>

          {projects.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setSelected(i)}
              className={`w-full flex justify-between items-center gap-4 py-4 border-b ${t.border} last:border-none text-left group transition-transform duration-200 hover:translate-x-1.5 active:scale-[0.98]`}
            >
              <div className="min-w-0">
                <div className="text-base font-semibold group-hover:opacity-70 transition-opacity">
                  {p.name}
                </div>
                <div className={`text-sm ${t.dim}`}>{p.summary}</div>
              </div>
              <div className={`font-mono text-xs whitespace-nowrap flex items-center gap-1 ${t.dim}`}>
                {p.fork && <GitFork size={12} />}
                {p.tag}
              </div>
            </button>
          ))}
        </Reveal>

        <Reveal>
          <div className={`font-mono text-sm ${t.dim} pb-3 mb-4 border-b ${t.border}`}>
            tech stack
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <span
                key={item}
                className={`font-mono text-xs px-3 py-1.5 rounded-full border ${t.border} ${t.dim} transition-transform duration-200 hover:scale-110 inline-block`}
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <footer
          className={`flex gap-6 pt-6 mt-14 border-t ${t.border}`}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease-out 0.3s",
          }}
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
        </footer>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-40"
          style={{
            opacity: modalVisible ? 1 : 0,
            transition: "opacity 0.2s ease-out",
          }}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${t.card} ${t.text} max-w-md w-full rounded-lg border ${t.border} p-6`}
            style={{
              opacity: modalVisible ? 1 : 0,
              transform: modalVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(8px)",
              transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
            }}
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
              <button
                onClick={closeModal}
                aria-label="Close"
                className={`${t.dim} hover:opacity-70 hover:rotate-90 transition-all duration-200`}
              >
                <X size={20} />
              </button>
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
          </div>
        </div>
      )}
    </div>
  );
}