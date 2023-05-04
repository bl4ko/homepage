/**
 * Article.tsx
 *
 * This module defines the Article layout component that handles the display
 * of individual articles or pages on the website. It provides smooth animations
 * for the transition between pages using Framer Motion library and ensures that
 * the title and metadata are updated in the head section of the document.
 */
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const variants: Variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
};

export default function ArticleLayout({ children, title }: LayoutProps) {
    const t = `${title} - Bl4ko`;
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
            style={{ position: "relative" }}
        >
            <>
                {title && (
                    <Head>
                        <title>{t}</title>
                        <meta name="twitter:title" content={t} />
                        <meta property="og:title" content={t} />
                    </Head>
                )}
                {children}

                <GridItemStyle />
            </>
        </motion.article>
    );
}
