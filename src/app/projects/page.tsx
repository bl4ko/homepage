"use client";
import { projects, Project, Color, contributions, Contribution } from "@/constants";
import { motion } from "framer-motion";
import { JSX } from "react";

type ColorClassesType = Record<Color, string>;

const colorClasses: ColorClassesType = {
  blue: "text-blue",
  green: "text-green",
  purple: "text-purple",
  yellow: "text-yellow",
  red: "text-red",
  black: "text-black",
  aqua: "text-aqua",
};

type UnifiedProject = {
  name: string;
  description: string;
  url: string;
  role: "Author" | "Contributor";
  tags?: { name: string; color: Color }[];
};

function getAllProjects(): UnifiedProject[] {
  const authored: UnifiedProject[] = projects.map((p: Project) => ({
    name: p.name,
    description: p.description,
    url: p.source,
    role: "Author",
    tags: p.tags,
  }));
  const contributed: UnifiedProject[] = contributions.map((c: Contribution) => ({
    name: c.name,
    description: c.description,
    url: c.url,
    role: "Contributor",
  }));
  return [...authored, ...contributed];
}

function ProjectCard({ project, index }: { project: UnifiedProject; index: number }): JSX.Element {
  return (
    <motion.a
      href={project.url || undefined}
      target={project.url ? "_blank" : undefined}
      transition={{ delay: 0.1 * index, type: "spring", duration: 5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary p-5 rounded-2xl border border-green/10 no-underline hover:border-green/30 transition-colors duration-200 flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-green">{project.name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          project.role === "Author"
            ? "bg-green/15 text-green"
            : "bg-cyan/15 text-cyan"
        }`}>
          {project.role}
        </span>
      </div>
      <p className="text-text-secondary text-sm flex-grow">{project.description}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap mt-3 gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={`${tag.name}-${i}`}
              className={`text-xs ${colorClasses[tag.color]}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      )}
    </motion.a>
  );
}

export default function Projects(): JSX.Element {
  const allProjects = getAllProjects();

  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold text-green">Projects</h1>
        <p className="text-text-secondary mt-2">Tools I&apos;ve built and open source projects I&apos;ve contributed to.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
