import { MainLayouts } from "./components";
import ThemeProvider from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";

export default function App() {

  return (
      <ThemeProvider>
        <MainLayouts />
      </ThemeProvider>
  );
}