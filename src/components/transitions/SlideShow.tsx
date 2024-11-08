"use client";
import { useRef, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Unresolved issued, framer motion on exit don't work: https://github.com/vercel/next.js/issues/49279
// Workaround with frozen router: https://github.com/vercel/next.js/issues/49279#issuecomment-2461600967
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

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
        <FrozenRouter>{children}</FrozenRouter>
      </motion.article>
    </AnimatePresence>
  );
}

// // Uncomment this when issues is resolved:
// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function SlideShow({ children }: { children: React.ReactNode }) {
//   const path = usePathname();
//   return (
//     <AnimatePresence
//       mode="wait"
//       onExitComplete={() => {
//         if (typeof window !== "undefined") {
//           window.scrollTo({ top: 0 });
//         }
//       }}
//     >
//       <motion.article
//         key={path}
//         initial={{ opacity: 0, x: 0, y: 45 }}
//         animate={{ opacity: 1, x: 0, y: 0 }}
//         exit={{ opacity: 0, x: 0, y: 45 }}
//         transition={{ duration: 1, type: "easeInOut" }}
//       >
//         {children}
//       </motion.article>
//     </AnimatePresence>
//   );
// }
