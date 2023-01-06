import { ThemeProvider } from "styled-components";
import { BlogProvider } from "./contexts/BlogContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogProvider>
        <Home />
      </BlogProvider>
    </ThemeProvider>
  );
}
