import { motion } from "motion/react";
import { EXPERIENCES, ANIMATIONS } from "../constants";
import { ExperienceCardPrimary, ExperienceCardSecondary } from "./ExperienceCard";

export const ExperienceSection = () => {
  const primaryExp = EXPERIENCES.find(e => e.isPrimary);
  const secondaryExps = EXPERIENCES.filter(e => !e.isPrimary);

  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 bg-surface max-w-[1440px] mx-auto">
      <motion.div className="mb-20" {...ANIMATIONS.fadeIn}>
        <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">Liderança & Experiência</h2>
        <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">Atuação Profissional</h3>
      </motion.div>

      <div className="space-y-24">
        {primaryExp && <ExperienceCardPrimary experience={primaryExp} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryExps.map((exp, index) => (
            <ExperienceCardSecondary key={exp.id} experience={exp} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};