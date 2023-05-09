import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ContentLayout from "@/components/layouts/content";
import { projects } from "@/constants";
import Image from "next/image";

const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

interface Project {
    name: string;
    description: string;
    tags: Tag[];
    image: string;
    source: string;
}

interface Tag {
    name: string;
    color: string;
}

function ProjectCard({ index, project }: { index: number, project: Project }): JSX.Element {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <img src={`/images/tesseract.png`} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
                </div>

                <div className="absolute inset-0 flex justify-end">
                    <div onClick={() => window.open(project.source, "_blank")} className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer">
                        <img src='/images/github.png' alt="github" className="w-1/2 h-1/2 object-contain" />
                    </div>
                </div>
                <div className="mt-5">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            </Tilt>
        </motion.div>
        // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        //     <Tilt
        //         options={{
        //             max: 45,
        //             scale: 1,
        //             speed: 450,
        //         }}
        //         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        //     >
        //         <div className='relative w-full h-[230px]'>
        //             <img
        //                 src={`/images/tesseract.png`}
        //                 alt='project_image'
        //                 className='w-full h-full object-cover rounded-2xl'
        //             />

        //             <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        //                 <div
        //                     onClick={() => window.open(project.source, "_blank")}
        //                     className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        //                 >
        //                     <img
        //                         // src={`/images/${project.source}`}
        //                         src={`/images/github.png`}
        //                         alt='source code'
        //                         className='w-1/2 h-1/2 object-contain'
        //                     />
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='mt-5'>
        //             <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
        //             <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
        //         </div>

        //         <div className='mt-4 flex flex-wrap gap-2'>
        //             {project.tags && project.tags.map((tag) => (
        //                 <p
        //                     key={`${name}-${tag.name}`}
        //                     className={`text-[14px] ${tag.color}`}
        //                 >
        //                     #{tag.name}
        //                 </p>
        //             ))}
        //         </div>
        //     </Tilt>
        // </motion.div >
    );

}

export default function Projects() {
    return (
        <>
            {/* <ContentLayout> */}
            <div className="w-full flex">
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`poject-${index}`} index={index} project={project} />
                ))}
            </div>
            {/* </ContentLayout> */}
        </>
    )
}