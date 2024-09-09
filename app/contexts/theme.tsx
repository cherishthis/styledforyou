"use client";
import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.cyan[400],
    },
    secondary: {
      main: colors.yellow.A700,
    },
  },
});

export default theme;
