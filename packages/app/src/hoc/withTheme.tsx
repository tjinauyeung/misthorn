import React from "react";
import { ThemeProvider } from "emotion-theming";

export const baseTheme = {
  colors: {
    primary: "#1dff82",
    border: '#222',
    text: "#ccc",
    textDark: "#777"
  },
  typography: {
    fontFamily:
      "-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
  }
};

const withTheme = (component, theme = baseTheme) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export default withTheme;
