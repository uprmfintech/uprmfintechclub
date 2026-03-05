import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata = {
  title: "UPRM FinTech Club",
  description: "Building the future of finance through engineering and math.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-brand-dark text-brand-white font-sans antialiased relative">
        <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        {children}
      </body>
    </html>
  );
}
