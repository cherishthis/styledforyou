import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const bodoni = Bodoni_Moda({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Style for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoni.className} tracking-wide text-black min-h-screen flex flex-col bg-primary-200`}
      >
        <Providers>
          <div className="flex-1 flex flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
