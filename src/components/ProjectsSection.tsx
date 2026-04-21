import { motion } from "motion/react";
import { PROJECTS, ANIMATIONS } from "../constants";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 bg-surface-container-low border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8" {...ANIMATIONS.fadeIn}>
          <div>
            <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">Projetos & Formação</h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white">Desenvolvimento</h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};