"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Bodoni_Moda",
  },
  palette: {
    primary: {
      main: "#FFDBCD",
      light: "#FFF4EE",
    },
    secondary: {
      // main: "#BBC2E2",
      main: "#9C8990",
    },
  },
});

export default theme;
