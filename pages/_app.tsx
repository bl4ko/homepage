import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import AppLayout from "../components/layouts/app";
import { createContext, useEffect, useState } from "react";
import ContentLayout from "@/components/layouts/content";
import Footer from "@/components/footer";

// Disable scroll restoration
if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

// Create theme context
export const ThemeContext = createContext<{
    theme: "dark" | "light";
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}>({ theme: "dark", setTheme: () => { } });

export default function App({ Component, pageProps, router }: AppProps) {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.setAttribute("data-theme", theme);
        }
    })

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <AppLayout router={router}>
                <AnimatePresence
                    mode='wait'
                    onExitComplete={() => {
                        // Scroll to the top of the page when the route changes
                        if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <ContentLayout key={router.route}>
                        <Component {...pageProps} />
                    </ContentLayout>
                </AnimatePresence>
                <AnimatePresence mode='wait'>
                    <Footer key={router.route} />
                </AnimatePresence>
            </AppLayout>
        </ThemeContext.Provider >
    );
}
