"use client";
import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.teal.A200,
    },
    secondary: {
      main: colors.deepPurple[300],
    },
  },
});

export default theme;
