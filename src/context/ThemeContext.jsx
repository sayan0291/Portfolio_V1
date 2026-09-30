import { createContext,useEffect,useState } from "react";

export const ThemeContext = createContext();

import { theme } from "../utils/setTheme.js"

const ThemeProvider = ({children}) => {

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

    const headerContainer = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
    };
    
    const headerItem = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return(
        <ThemeContext.Provider value={{ headerContainer,headerItem,toggleTheme,isDark,t,selected,setSelected,curtain,setCurtain }} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;