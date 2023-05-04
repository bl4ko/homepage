/**
 * Wrapper box for section content. Provides smooth animations for the
 * transition between pages using Framer Motion library.
 */

import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

// Create `motion` version of `Box` component
const MotionBox = motion(Box);

// Duration of the animation
const transition = {
    duration: 1.0,
};

const variants = (delay: number) => ({
    // Initial state of the component
    initial: {
        y: 10,
        opacity: 0,
        transition: { ...transition, delay },
    },
    // Final state of the component
    animate: {
        y: 0,
        opacity: 1,
        transition,
    },
});

interface SectionProps {
    children: React.ReactNode;
    delay?: number;
}

export default function Section({ children, delay = 0 }: SectionProps) {
    return (
        <MotionBox
            initial="initial"
            animate="animate"
            variants={variants(delay)}
            mb={6}
        >
            {children}
        </MotionBox>
    );
}
