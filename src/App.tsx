import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Home";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;
