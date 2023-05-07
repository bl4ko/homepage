import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import AppLayout from "../components/layouts/app";
import { createContext, useEffect, useState } from "react";

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
                    mode="wait" // Wait for the exit animation to complete before unmounting the component
                    initial={true} // Animate the initial mount
                    onExitComplete={() => {
                        // Scroll to the top of the page when the route changes
                        if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </AppLayout>
        </ThemeContext.Provider>
    );
}
