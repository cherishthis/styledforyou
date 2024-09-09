"use client";

import { ThemeProvider } from "@mui/material";
import { IsMobile } from "./contexts/mobile";
import theme from "./contexts/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <IsMobile>{children}</IsMobile>
    </ThemeProvider>
  );
}
