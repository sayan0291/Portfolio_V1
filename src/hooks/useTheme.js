import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) return { value: null,message: "Something went wrong on Product context" }
    return context;
}