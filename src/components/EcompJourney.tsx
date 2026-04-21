import { motion } from "motion/react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ECOMP_TIMELINE } from "../constants";

// Importações de assets (Substitua pelas suas fotos reais na pasta assets)
import logoEcomp from '../assets/logo_ecomp.png';
import fotoAssessor from '../assets/inicio.jpg'; 
import fotoDupla from '../assets/dupla.jpeg';       
import fotoGerente from '../assets/gerentes.jpeg';   
import fotoDiretor from '../assets/diretor.png';   

// Dicionário para mapear a foto correta para cada fase da jornada
const phaseImages: { [key: string]: string } = {
  "Assessor de Negócios": fotoAssessor,
  "Dupla Diretoria: Negócios & Comunicação": fotoDupla,
  "Gerente de Comunicação": fotoGerente,
  "Diretor de Negócios": fotoDiretor,
};

// Definição das variantes de animação para a Timeline
const timelineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

// Definição das variantes de animação para as Imagens (Escorregar)
const imageSlideVariants = (isEven: boolean) => ({
  hidden: { opacity: 0, x: isEven ? 80 : -80 }, // Começa escondida e deslocada
  visible: { 
    opacity: 0.5, // Começa com metade da opacidade
    x: 0,
    transition: { duration: 1, ease: "easeOut" }
  },
  hover: { 
    opacity: 1, 
    scale: 1.05,
    transition: { duration: 0.4 }
  }
});

export const EcompJourney = () => {
  return (
    <div 
      className="min-h-screen bg-surface py-20 px-6 overflow-hidden"
      // Mantendo o Verde Ecomp restrito a esta página
      style={{ 
        '--color-primary': '#00DF9A',
        '--color-primary-container': '#00A874',
        '--color-on-primary-container': '#e6fff6'
      } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Botão de Voltar */}
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors mb-12 font-label text-xs uppercase tracking-widest relative z-20">
          <ArrowLeft size={16} /> Voltar para o início
        </Link>

        {/* Header com a Logo */}
        <header className="mb-32 flex flex-col items-center md:items-start text-center md:text-left relative z-20">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mb-6">
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tighter">
              Jornada
            </h1>
            <img src={logoEcomp} alt="ECOMP" className="h-10 md:h-16 object-contain translate-y-1" />
          </div>
          <p className="font-sans text-xl text-zinc-400 font-light max-w-2xl">
            Uma linha do tempo da minha evolução como líder e estrategista de produto.
          </p>
        </header>

        {/* Timeline Centralizada */}
        <div className="relative py-10 z-10">
          
          {/* Linha Central */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {ECOMP_TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const cardPhoto = phaseImages[item.role];

              return (
                <motion.div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  // Usamos viewPort: { once: true, amount: 0.3 } para garantir que a imagem comece a escorregar só quando estiver visível
                  viewport={{ once: true, amount: 0.3 }}
                  variants={timelineVariants}
                >
                  
                  {/* Ponto na Linha Central */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary)] -translate-x-1/2 z-10" />

                  {/* Lado Vazio no Desktop (Onde a imagem vai escorregar) */}
                  <div className="hidden md:block md:w-1/2 relative pr-16 pl-4 md:px-16 overflow-hidden">
                    {cardPhoto && (
                      <motion.div
                        className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-surface-container shadow-2xl shadow-black/30"
                        variants={imageSlideVariants(isEven)}
                        whileHover="hover"
                      >
                        <img 
                          src={cardPhoto} 
                          alt={item.role}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* Conteúdo do Card (Ocupa todo o mobile, e metade do Desktop) */}
                  <div className={`w-full md:w-1/2 pl-16 pr-4 md:px-16 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    
                    {/* O Card em si com brilho e escala no hover */}
                    <div className="group bg-surface-container-low border border-white/5 p-8 md:p-10 rounded-2xl opacity-70 hover:opacity-100 hover:scale-[1.02] hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,223,154,0.1)] transition-all duration-500">
                      
                      <div className={`flex flex-col md:flex-row gap-3 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'} items-start md:items-center`}>
                        <span className="font-label text-[10px] text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                          {item.date}
                        </span>
                        <h2 className="font-headline text-2xl font-bold text-white tracking-tight leading-tight">{item.role}</h2>
                      </div>

                      <p className="font-sans text-zinc-400 leading-relaxed mb-8 font-light text-lg">
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.milestones.map((ms, i) => (
                          <span key={i} className="flex items-center gap-2 font-label text-[9px] uppercase tracking-widest text-zinc-500 bg-white/5 px-3 py-2 rounded border border-white/10 group-hover:border-primary/30 group-hover:text-zinc-300 transition-colors">
                            <ChevronRight size={10} className="text-primary" /> {ms}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};