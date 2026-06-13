"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@/components/icons"; // Import your custom icons
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      aria-label="Toggle theme"
      className={`w-10 h-10 flex items-center justify-center rounded-full overflow-hidden focus:outline-hidden focus-visible:ring-2 focus-visible:ring-green ${
        theme === "light"
          ? "bg-purple hover:bg-[#9333ea]"
          : "bg-yellow hover:bg-orange-400"
      }`}
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          className="flex items-center justify-center"
          key={theme}
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 25, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
