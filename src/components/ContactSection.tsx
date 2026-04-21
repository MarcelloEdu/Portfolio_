import { motion } from "motion/react";
import { Mail, Linkedin, MessageSquare } from "lucide-react";
import { PERSONAL_INFO, ANIMATIONS } from "../constants";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-40 px-6 relative flex items-center justify-center overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grain opacity-40 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full z-0" />
      
      <motion.div className="max-w-4xl mx-auto relative z-10 text-center space-y-10" {...ANIMATIONS.fadeIn}>
        <h2 className="font-label text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6 flex items-center justify-center gap-6">
          <span className="w-12 h-px bg-white/10" />
          Contato
          <span className="w-12 h-px bg-white/10" />
        </h2>
        
        <h3 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">Vamos conversar</h3>
        
        <p className="font-sans text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Tem um projeto em mente ou quer bater um papo sobre tecnologia e produto? Sinta-se à vontade para me mandar uma mensagem.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 pt-10">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-all rounded-full shadow-2xl shadow-primary/20 group"
          >
            <Mail size={18} className="group-hover:-rotate-12 transition-transform" />
            <span>Email</span>
          </a>
          <a 
            href={PERSONAL_INFO.linkedin} 
            className="inline-flex items-center gap-4 px-10 py-5 bg-surface-container-high border border-white/10 text-white font-label text-xs uppercase tracking-widest hover:bg-white/5 transition-all rounded-full group"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a 
            href={PERSONAL_INFO.whatsapp} 
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-label text-xs uppercase tracking-widest hover:bg-[#25D366]/20 transition-all rounded-full"
          >
            <MessageSquare size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};