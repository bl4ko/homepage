import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@/components/icons"; // Import your custom icons
import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                style={{ display: "inline-block" }}
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <button
                    aria-label="Toggle theme"
                    className={`rounded p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === "light"
                        ? "bg-purple hover:bg-purple"
                        : "bg-yellow hover:bg-orange"
                        }`}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </button>
            </motion.div>
        </AnimatePresence >
    );
}
