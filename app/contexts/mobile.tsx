"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type MobileProps = {
  children: ReactNode;
};

type MobileContextType = {
  isMobile: boolean;
  screenWidth: number;
  fullScreen: boolean;
  lgScreen: boolean;
  xlScreen: boolean;
};

export const IsMobileContext = createContext<MobileContextType>({
  isMobile: false,
  screenWidth: 0,
  fullScreen: false,
  lgScreen: false,
  xlScreen: false,
});

export const IsMobile = ({ children }: MobileProps) => {
  const [isMobile, setIsMobile] = useState<MobileContextType>({
    isMobile: false,
    screenWidth: 0,
    fullScreen: false,
    lgScreen: false,
    xlScreen: false,
  });

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setIsMobile({
        isMobile: true,
        screenWidth: window.innerWidth,
        fullScreen: false,
        lgScreen: false,
        xlScreen: false,
      });
    } else if (window.innerWidth >= 1536) {
      setIsMobile({
        isMobile: false,
        screenWidth: window.innerWidth,
        fullScreen: true,
        lgScreen: true,
        xlScreen: true,
      });
    } else if (window.innerWidth >= 1024) {
      setIsMobile({
        isMobile: false,
        screenWidth: window.innerWidth,
        fullScreen: false,
        lgScreen: true,
        xlScreen: false,
      });
    } else if (window.innerWidth >= 1200) {
      setIsMobile({
        isMobile: false,
        screenWidth: window.innerWidth,
        fullScreen: false,
        lgScreen: true,
        xlScreen: true,
      });
    } else {
      setIsMobile({
        isMobile: false,
        screenWidth: window.innerWidth,
        fullScreen: false,
        lgScreen: false,
        xlScreen: false,
      });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 480) {
        setIsMobile({
          isMobile: true,
          screenWidth: window.innerWidth,
          fullScreen: false,
          lgScreen: false,
          xlScreen: false,
        });
      } else if (window.innerWidth >= 1536) {
        setIsMobile({
          isMobile: false,
          screenWidth: window.innerWidth,
          fullScreen: true,
          lgScreen: true,
          xlScreen: true,
        });
      } else if (window.innerWidth >= 1024) {
        setIsMobile({
          isMobile: false,
          screenWidth: window.innerWidth,
          fullScreen: false,
          lgScreen: true,
          xlScreen: false,
        });
      } else if (window.innerWidth >= 1200) {
        setIsMobile({
          isMobile: false,
          screenWidth: window.innerWidth,
          fullScreen: false,
          lgScreen: true,
          xlScreen: true,
        });
      } else {
        setIsMobile({
          isMobile: false,
          screenWidth: window.innerWidth,
          fullScreen: false,
          lgScreen: false,
          xlScreen: false,
        });
      }
    });
    return () =>
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 480) {
          setIsMobile({
            isMobile: true,
            screenWidth: window.innerWidth,
            fullScreen: false,
            lgScreen: false,
            xlScreen: false,
          });
        } else if (window.innerWidth >= 1536) {
          setIsMobile({
            isMobile: false,
            screenWidth: window.innerWidth,
            fullScreen: true,
            lgScreen: true,
            xlScreen: true,
          });
        } else if (window.innerWidth >= 1024) {
          setIsMobile({
            isMobile: false,
            screenWidth: window.innerWidth,
            fullScreen: false,
            lgScreen: true,
            xlScreen: false,
          });
        } else if (window.innerWidth >= 1200) {
          setIsMobile({
            isMobile: false,
            screenWidth: window.innerWidth,
            fullScreen: false,
            lgScreen: true,
            xlScreen: true,
          });
        } else {
          setIsMobile({
            isMobile: false,
            screenWidth: window.innerWidth,
            fullScreen: false,
            lgScreen: false,
            xlScreen: false,
          });
        }
      });
  }, []);

  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
};

export const useMobileContext = () => {
  return useContext(IsMobileContext);
};
