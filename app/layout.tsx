import type { Metadata, Viewport } from "next";
import { SiteBehavior } from "@/components/site-behavior";
import { descriptions, titles } from "@/lib/copy";
import "./globals.css";

export const metadata: Metadata = {
  title: titles.en,
  description: descriptions.en,
  icons: { icon: "/images/logo-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#0c1b33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteBehavior />
        {children}
      </body>
    </html>
  );
}
