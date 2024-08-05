"use client";
import Tilt from "react-parallax-tilt";
import { projects, Project, Color } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

type ColorClassesType = Record<Color, string>;

const colorClasses: ColorClassesType = {
  blue: "text-blue",
  green: "text-green",
  purple: "text-purple",
  yellow: "text-yellow",
  red: "text-red",
};

interface ProjectCardProps {
  key: string;
  index: number;
  project: Project;
}

function ProjectCard({ index, project }: ProjectCardProps): JSX.Element {
  return (
    <motion.div
      transition={{ delay: 1 + 1 * index, type: "spring", duration: 1 }}
      initial={{ opacity: 0, x: 0, y: 100 }}
      animate={{ x: 0, opacity: 1, y: 0 }}
      className="lg:w-[30%] sm:w-[45%] w-[90%] xs:w-[70%] playwright-card"
    >
      <Tilt className="bg-secondary p-4 rounded-2xl w-full h-full hover">
        <a href={project.source} className="no-underline hover:unerline">
          <div className="relative w-full h-[200px]">
            <Image
              src={`/images/${project.image}`}
              alt={project.name}
              fill={true}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 30vw"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          <div className="absolute inset-0 flex justify-end hover">
            <div className="fixed w-16 h-16 rounded-full flex justify-center items-center">
              <Image
                src="/images/github.png"
                alt="github"
                className="object-cover w-1/2 h-1/2 static"
                fill={true}
                sizes="5vw"
              />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-[20px]">{project.name}</h3>
            <p className="mt-2 text-textSecondary text-[12px]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap mt-4 gap-2">
            {project.tags.map((tag, index) => (
              <p
                key={`${tag.name}-${index}`}
                className={`text-[14px] ${colorClasses[tag.color]}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl underline text-center my-5 capitalize text-yellow">
        Projects
      </h1>
      <div className="w-full flex">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories. I have made projects in various fields like Web
        Development, Machine Learning and dev ops.
      </div>

      <div className="mt-10 flex flex-wrap gap-7 justify-around">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
}
