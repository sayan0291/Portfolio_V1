import { MainLayouts } from "./components";
import ThemeProvider from "./context/ThemeContext";

export default function App() {

  return (
      <ThemeProvider>
        <MainLayouts />
      </ThemeProvider>
  );
}