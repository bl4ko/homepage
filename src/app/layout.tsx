import EarthCanvas from "@/components/canvas/Earth";
import { ThemeProvider } from "@/context/ThemeProvider";
import SlideShow from "@/components/transitions/SlideShow";
import { JetBrains_Mono } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import { Metadata } from "next";
import StarsCanvas from "@/components/canvas/Stars";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bl4ko.com"),
  title: "Gašper Oblak | Platform & Site Reliability Engineer",
  description:
    "Platform and site reliability engineer specializing in Kubernetes, agent infrastructure, Terraform, observability, and cloud-native security.",
  authors: [{ name: "Gašper Oblak" }],
  keywords: "Platform Engineer, Site Reliability Engineer, Agent Infrastructure, Kubernetes, Terraform, Argo CD, Observability",
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gašper Oblak | Platform & Site Reliability Engineer",
    description:
      "Platform and site reliability engineer specializing in Kubernetes, agent infrastructure, Terraform, observability, and cloud-native security.",
    url: "https://bl4ko.com",
    siteName: "Gašper Oblak",
    type: "website",
    images: [{ url: "/images/profile.png", width: 1024, height: 1024, alt: "Gašper Oblak" }],
  },
  twitter: {
    card: "summary",
    title: "Gašper Oblak | Platform & Site Reliability Engineer",
    description:
      "Kubernetes, agent infrastructure, Terraform, observability, and cloud-native security.",
    images: ["/images/profile.png"],
  },
};

// Set data-theme before first paint to avoid a flash of unstyled background.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gašper Oblak",
  jobTitle: "Platform and Site Reliability Engineer",
  url: "https://bl4ko.com",
  email: "mailto:gasperoblak@bl4ko.com",
  sameAs: [
    "https://github.com/bl4ko",
    "https://www.linkedin.com/in/ga%C5%A1per-oblak-b3779b2ba/",
  ],
  knowsAbout: ["Kubernetes", "Agent Infrastructure", "Terraform", "Argo CD", "Site Reliability Engineering", "Observability", "Cloud-Native Security"],
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
    // suppressHydrationWarning: themeInitScript sets data-theme before hydration
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={jetBrainsMono.className}>
        <ThemeProvider>
          <StarsCanvas />
          <Navbar />
          <main className="relative pb-8 h-full">
            <div className="text-base md:text-lg max-w-6xl pt-14 mx-auto xl:px-16 lg:px-12 md:px-10 xs:px-8 px-4">
              <EarthCanvas />
              <SlideShow>{children}</SlideShow>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
