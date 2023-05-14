import { motion, useScroll } from "framer-motion";

export default function LiIcon({ reference }: { reference: any }) {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["start end", "center start"]
        }
    );
    return (
        <figure className="absolute left-0 stroke-cyan">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className='stroke-cyan stroke-1 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-black' style={{
                    pathLength: scrollYProgress
                }} />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-cyan' />
            </svg>
        </figure>
    );
}
