import { motion, useScroll } from 'framer-motion';
import { Experience as ExperienceType, experiences } from '@/constants';
import { useRef } from 'react';
import LiIcon from '@/components/LiIcon';

function Details({ experience }: { experience: ExperienceType }) {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1, type: "spring" }}>
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
            // Start animation when the top of the element is 50% in viewport
            // End animation when bottom of the element is above the end of the viewport
            offset: ["start center", "end end"]
        }
    );

    return (
        <div className="my-12">
            <div className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-cyan origin-top shadow-3xl" />
                <ul ref={ref} className="w-full flex flex-col items-start justify-between ml-4">
                    {experiences.map((experience: ExperienceType, index: number) => (
                        <Details key={index} experience={experience} />
                    ))}
                </ul>
            </div>
        </div >
    );
}