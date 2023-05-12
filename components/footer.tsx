import { motion } from 'framer-motion';


export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, x: 0, y: 45 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 45 }}
            transition={{ duration: 1, mode: "easeInOut" }}
        >
            <div className="text-center opacity-[0.4] text-sm mt-5">
                © {new Date().getFullYear()} Bl4ko. Copy as much as you want.
            </div>
        </motion.footer>
    );
}
