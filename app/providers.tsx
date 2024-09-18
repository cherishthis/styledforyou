"use client";

import { ThemeProvider } from "@mui/material";
import { IsMobile } from "./contexts/mobile";
import { Responses } from "./contexts/responses";
import theme from "./contexts/theme";
import { User } from "./contexts/user";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <IsMobile>
        <User>
          <Responses>{children}</Responses>
        </User>
      </IsMobile>
    </ThemeProvider>
  );
}
