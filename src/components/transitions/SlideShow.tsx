"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Animations bug with nextjs for component exit: https://github.com/vercel/next.js/issues/49279
// Possible workaround: https://github.com/vercel/next.js/issues/49596#issuecomment-1752141334
export default function SlideShow({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.article
        key={path}
        initial={{ opacity: 0, x: 0, y: 45 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: 45 }}
        transition={{ duration: 1, type: "easeInOut" }}
      >
        {children}
      </motion.article>
    </AnimatePresence>
  );
}
