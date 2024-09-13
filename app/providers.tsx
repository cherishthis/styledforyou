"use client";

import { ThemeProvider } from "@mui/material";
import { IsMobile } from "./contexts/mobile";
import { Responses } from "./contexts/responses";
import theme from "./contexts/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <IsMobile>
        <Responses>{children}</Responses>
      </IsMobile>
    </ThemeProvider>
  );
}
