import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./page/Home";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <Home />
    </ThemeProvider>
    
);
