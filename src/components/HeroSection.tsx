import { motion } from "motion/react";
import { ArrowDown, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

// Importação apenas da sua foto
import fotoMarcello from "../assets/eu.jpg";

export const HeroSection = () => {
  return (
    <section 
      // Restaurei a classe 'hero-gradient' original para um fundo limpo e tecnológico
      className="relative min-h-[85vh] flex items-center pt-32 pb-24 px-6 md:px-16 overflow-hidden hero-gradient"
    >
      {/* Overlay de grão para manter o estilo original */}
      <div className="bg-grain" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          className="lg:col-span-7 space-y-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container/50 border border-white/5 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Disponível para oportunidades</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl xl:text-8xl leading-tight font-extrabold text-white tracking-tighter">
            Desenvolvedor <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
              x Visão de Produto
            </span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
            {PERSONAL_INFO.shortDesc}
          </p>
          
          <div className="pt-6 flex flex-wrap gap-6">
            <a 
              href="#experience" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-label text-sm uppercase tracking-widest hover:bg-primary-container transition-all rounded group"
            >
              <span>Minha Experiência</span>
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-outline-variant text-white font-label text-sm uppercase tracking-widest hover:border-white transition-all rounded"
            >
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] bg-surface-container border border-white/5 rounded-2xl overflow-hidden group shadow-2xl shadow-primary/5">
            {/* Imagem Normal: Removi grayscale, opacity-30 e mix-blend-luminosity */}
            <img 
              src={fotoMarcello} 
              alt="Marcello" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Gradiente escuro apenas na parte inferior para garantir a leitura do texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent opacity-90" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
                <div>
                  <p className="font-label text-[10px] text-primary uppercase tracking-[0.2em] mb-2">Foco</p>
                  <p className="font-headline text-2xl text-white font-bold leading-snug">Ciência da Computação <br/> + PO</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center text-white/30">
                  <Terminal size={32} strokeWidth={1} />
                </div>
              </div>
              <div className="flex gap-4 font-label text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                <span>DEV</span>
                <span>•</span>
                <span>BCC UFPR</span>
                <span>•</span>
                <span>PO</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};