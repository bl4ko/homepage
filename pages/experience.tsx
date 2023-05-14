import { motion, useScroll } from 'framer-motion';
import { Experience as ExperienceType, experiences } from '@/constants';
import { useRef } from 'react';
import LiIcon from '@/components/LiIcon';

function Details({ experience }: { experience: ExperienceType }) {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className='capitalize font-bold text-2xl'>{experience.position}&nbsp;
                    <a className="text-cyan capitalize" target="_blank" href={experience.companyLink}>
                        @{experience.company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-gray">
                    {experience.time} | {experience.address}
                </span>
                <p className="font-medium w-full">
                    {experience.work}
                </p>
            </motion.div >
        </li >
    );
}

export default function Experience(): JSX.Element {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className="my-5">
            <h2 className="font-bold text-5xl mb-7 w-full text-center">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-cyan origin-top shadow-3xl" />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    {experiences.map((experience: ExperienceType, index: number) => (
                        <Details key={index} experience={experience} />
                    ))}
                </ul>
            </div>
        </div>
    );
}