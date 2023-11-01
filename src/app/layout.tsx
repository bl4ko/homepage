import EarthCanvas from "@/src/components/canvas/Earth";
import { ThemeProvider } from "@/src/context/ThemeProvider";
import SlideShow from "@/src/components/transitions/SlideShow";

import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import Cursor from "@/src/components/Cursor";

import { Metadata } from "next";
import StarsCanvas from "@/src/components/canvas/Stars";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bl4ko",
  description: "Bl4ko's homepage",
  authors: [{ name: "bl4ko" }],
  keywords: "Bl4ko, Bl4ko's homepage",
  robots: "index, follow",
  icons: "/images/profile_no_background.png",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative pb-8 h-full">
          <ThemeProvider>
            <StarsCanvas />
            <Navbar />
            <Cursor />
            <div className="text-base md:text-lg max-w-6xl pt-14 mx-auto xl:px-16 lg:px-12 md:px-10 xs:px-8 px-4">
              <EarthCanvas />
              <SlideShow>{children}</SlideShow>
              <Footer />
            </div>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
