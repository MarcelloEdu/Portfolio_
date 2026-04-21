import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ANIMATIONS } from "../constants";

export const ExperienceCardPrimary = ({ experience }: any) => {
  return (
    <div className="relative pl-8 md:pl-16 border-l border-white/10">
      <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(79,117,255,0.8)]" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h4 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight text-balance">
            {experience.title}
          </h4>
          <p className="font-label text-primary uppercase tracking-[0.15em] text-xs mt-3">{experience.role}</p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-label text-sm text-zinc-400 tracking-widest uppercase">{experience.period}</p>
          <p className="font-sans text-xs text-zinc-500 mt-1 uppercase tracking-tighter italic">{experience.location}</p>
        </div>
      </div>

      <div className="bg-surface-container-low border border-white/5 rounded-2xl p-8 md:p-10 hover:border-primary/20 transition-colors duration-500">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {experience.responsibilities.map((resp: any, i: number) => {
            const Icon = resp.icon;
            const parts = resp.text.split(resp.highlight);
            
            return (
              <li key={i} className="flex items-start gap-5">
                <div className="p-2 bg-primary/10 rounded flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="font-sans text-zinc-300 leading-relaxed">
                  {parts[0]}
                  {resp.highlight && <strong className="text-white">{resp.highlight}</strong>}
                  {parts[1]}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Link para a Subpágina de Jornada */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <Link 
            to="/ecomp" 
            className="inline-flex items-center gap-2 text-primary font-label text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform group"
          >
            <span>Ver jornada detalhada</span>
            <ChevronRight size={14} className="group-hover:animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ExperienceCardSecondary = ({ experience, delay }: any) => {
  return (
    <motion.div 
      className="p-8 bg-surface-container-low rounded-2xl border border-white/5" 
      {...ANIMATIONS.fadeIn} 
      transition={{ delay }}
    >
      <div className="flex justify-between items-start mb-6">
        <h4 className="font-headline text-xl font-bold text-white">{experience.title}</h4>
        <p className="font-label text-[10px] text-zinc-500 uppercase tracking-widest text-right">{experience.period}</p>
      </div>
      <p className={`font-label text-${experience.color} uppercase tracking-[0.2em] text-[10px] mb-6`}>{experience.role}</p>
      <ul className="space-y-4">
        {experience.responsibilities.map((resp: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm font-light">
            <span className={`w-1.5 h-1.5 rounded-full bg-${experience.color}/50 mt-1.5 flex-shrink-0`} />
            {resp}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};