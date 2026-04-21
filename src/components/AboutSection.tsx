import { motion } from "motion/react";
import { School, MapPin } from "lucide-react";
import { PERSONAL_INFO, SKILLS, ANIMATIONS } from "../constants";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24 bg-surface-container-low relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        <motion.div className="lg:col-span-4 flex flex-col justify-between h-full" {...ANIMATIONS.fadeIn}>
          <div>
            <h2 className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-secondary/50" />
              Sobre Mim
            </h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
              A ponte entre <br/> o código e o <br/> negócio.
            </h3>
          </div>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-5 p-6 bg-surface rounded-xl border border-white/5">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <School size={24} />
              </div>
              <div>
                <p className="font-headline font-bold text-white">{PERSONAL_INFO.university}</p>
                <p className="font-sans text-sm text-zinc-400">{PERSONAL_INFO.degree}</p>
                <p className="font-label text-[10px] text-zinc-500 uppercase mt-1">{PERSONAL_INFO.period}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 p-6 bg-surface rounded-xl border border-white/5">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <p className="font-headline font-bold text-white">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-8 space-y-12" {...ANIMATIONS.fadeIn} transition={{ delay: 0.2 }}>
          <div className="font-sans text-xl text-zinc-300 leading-relaxed max-w-3xl space-y-8 font-light">
            <p>{PERSONAL_INFO.aboutText[0]}</p>
            <p>
              No entanto, descobri que a verdadeira força da tecnologia se manifesta quando aliada a uma visão de negócios clara. Como <strong className="text-white font-medium">Diretor de Negócios e Product Owner na ECOMP</strong>, atuo como a ponte tradutora entre as necessidades complexas de stakeholders e o desenvolvimento de software prático.
            </p>
            <p>{PERSONAL_INFO.aboutText[2]}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div className="space-y-6">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-primary">Desenvolvimento & Tech</h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.tech.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-surface-container border border-white/5 font-label text-[11px] tracking-wider text-zinc-300 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Produto & Gestão</h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.product.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-surface-container border border-white/5 font-label text-[11px] tracking-wider text-zinc-300 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};