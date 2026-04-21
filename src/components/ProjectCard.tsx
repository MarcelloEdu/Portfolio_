import { motion } from "motion/react";
import { ANIMATIONS } from "../constants";

export const ProjectCard = ({ project, delay }: any) => {
  const Icon = project.icon;

  return (
    <motion.div 
      className={`group p-10 bg-surface-container border border-white/5 hover:border-${project.color}/30 transition-all duration-500 rounded-2xl relative overflow-hidden`}
      {...ANIMATIONS.fadeIn}
      transition={{ delay }}
    >
      <div className={`absolute top-8 right-8 text-white/5 group-hover:text-${project.color}/10 transition-colors duration-500`}>
        <Icon size={120} strokeWidth={0.5} />
      </div>
      <h4 className="font-headline text-2xl font-bold text-white mb-2">{project.title}</h4>
      <p className={`font-label text-[10px] tracking-widest text-${project.color} uppercase mb-8`}>{project.period}</p>
      <p className="font-sans text-zinc-400 font-light leading-relaxed mb-10 text-lg">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 font-label text-[10px] tracking-widest uppercase text-zinc-400 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};