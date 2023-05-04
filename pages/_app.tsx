/**
 * This component wraps the entire application and provides shared
 * functionality and styling including:
 ** Applying global styles from `styles/globals.css`
 ** Wrapping the application with the Chakra UI provider
 ** Handling animations during component mount and unmount using AnimatePresence
 ** Disabling the default scroll restoration behavior and manually scrolling to the top of th
 *  page on route changes
 */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import AppLayout from "../components/layouts/app";

// Disable scroll restoration
// Check if the window object is defined (meaning that the code is running in the 
// browser environment and not on server), and if so, it disables the default scroll
// restoration behavior. -> Manage scroll position when navigation between pages
if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
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
        </Chakra>
    );
}
