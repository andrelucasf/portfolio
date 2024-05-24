import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./pages/Home/home";
import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
