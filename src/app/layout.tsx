import EarthCanvas from "../components/canvas/Earth";
import { ThemeProvider } from "@/src/context/ThemeProvider";
import SlideShow from "@/src/components/transitions/SlideShow";

import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import "./globals.css";

import { Metadata } from "next";
import StarsCanvas from "../components/canvas/Stars";

export const metadata: Metadata = {
  title: "Bl4ko",
  description: "Bl4ko's homepage",
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
      {/* <Head>
        {" "}
        <link rel="icon" href="/images/profile_no_background.png" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Bl4ko's homepage" />
        <meta name="author" content="Bl4ko" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Bl4ko, Bl4ko's homepage" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap"
        />
      </Head> */}
      <body>
        <main className="relative pb-8 h-full">
          <ThemeProvider>
            <StarsCanvas />
            <Navbar />
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
