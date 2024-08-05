import EarthCanvas from "@/components/canvas/Earth";
import { ThemeProvider } from "@/context/ThemeProvider";
import SlideShow from "@/components/transitions/SlideShow";
import { JetBrains_Mono } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
// import Cursor from "@/components/Cursor";
import CommandMenu from "@/components/Cmdk";

import { Metadata } from "next";
import StarsCanvas from "@/components/canvas/Stars";

import "./globals.css";

// Meta API for Head element
export const metadata: Metadata = {
  title: "Bl4ko",
  description: "Bl4ko's homepage",
  authors: [{ name: "bl4ko" }],
  keywords: "Bl4ko, Bl4ko's homepage",
  robots: "index, follow",
  icons: "/images/profile_no_background.png",
};

// Font optimization
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font optimization not added yet: https://github.com/vercel/next.js/discussions/42881#discussion-4564506 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-mono bg-primary text-textPrimary">
        <main className={`relative pb-8 h-full ${jetBrainsMono.className}`}>
          <ThemeProvider>
            <StarsCanvas />
            <Navbar />
            {/* <Cursor /> */}
            <div className="text-base md:text-lg max-w-6xl pt-14 mx-auto xl:px-16 lg:px-12 md:px-10 xs:px-8 px-4">
              <EarthCanvas />
              <SlideShow>{children}</SlideShow>
              <Footer />
            </div>
            <CommandMenu />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
