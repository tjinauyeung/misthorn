import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import Global from "./styles";
import { baseTheme } from "./hoc/withTheme";

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
