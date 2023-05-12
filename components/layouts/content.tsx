import { motion } from "framer-motion";

interface LayoutProps {
    children: React.ReactNode;
}

export default function ContentLayout({ children }: LayoutProps) {
    return (
        <motion.article
            initial={{ opacity: 0, x: 0, y: 45 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 45 }}
            transition={{ duration: 1, type: "easeInOut" }}
            style={{ position: "relative" }}>

            {children}
        </ motion.article >
    );
}
