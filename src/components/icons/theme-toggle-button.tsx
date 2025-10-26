"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@/components/icons"; // Import your custom icons
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="inline-block"
        key={theme}
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 25, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          aria-label="Toggle theme"
          className={`rounded p-2 focus:outline-hidden focus:ring-2 focus:ring-offset-2 ${
            theme === "light"
              ? "bg-purple hover:bg-[#9333ea]"
              : "bg-yellow hover:bg-orange-400"
          }`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
