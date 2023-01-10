import { ThemeProvider } from "styled-components";
import { BlogProvider } from "./contexts/BlogContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/routes";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BlogProvider>
          <Router />
        </BlogProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
