"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, x: 0, y: 45 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: 45 }}
      transition={{ duration: 1, mode: "easeInOut" }}
    >
      <div className="text-center opacity-[0.4] text-sm mt-5">
        &copy; {new Date().getFullYear()} bl4ko, Gašper Oblak. All rights reserved.
      </div>
    </motion.footer>
  );
}
