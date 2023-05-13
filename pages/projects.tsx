import Tilt from "react-parallax-tilt";
import { projects } from "@/constants";
import { motion } from "framer-motion";


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
        <motion.div transition={{ delay: 1 + 1 * index, type: "spring", duration: 1 }} initial={{ opacity: 0, x: 0, y: 100 }} animate={{ x: 0, opacity: 1, y: 0 }}>
            <Tilt className="bg-secondary p-4 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[200px]">
                    <img src={`/images/tesseract.png`} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
                </div>

                <div className="absolute inset-0 flex justify-end">
                    <div onClick={() => window.open(project.source, "_blank")} className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer">
                        <img src='/images/github.png' alt="github" className="w-1/2 h-1/2 object-contain" />
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="font-bold text-[20px]">{project.name}</h3>
                    <p className="mt-2 text-textSecondary text-[12px]">{project.description}</p>
                </div>

                <div className="flex flex-wrap mt-4 gap-2">
                    {project.tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] text-${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );

}

export default function Projects(): JSX.Element {
    return (
        <>
            <div className="w-full flex">
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
            </div>

            <div className="mt-20 flex flex-wrap gap-5">
                {projects.map((project, index) => (
                    < ProjectCard key={`poject-${index}`} index={index} project={project} />
                ))}
            </div>
        </>
    );
}