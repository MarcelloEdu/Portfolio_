/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Terminal, 
  ArrowDown, 
  School, 
  MapPin, 
  Users, 
  Component, 
  Handshake, 
  Megaphone, 
  Mail, 
  Briefcase, 
  MessageSquare,
  Github,
  Linkedin,
  CodeXml,
  Database
} from "lucide-react";
import { useEffect, useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-surface/80 backdrop-blur-2xl border-white/5 py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center font-label tracking-tight text-xs uppercase">
          <div className="flex items-center gap-2">
            <span className="text-xl font-headline font-black tracking-tighter text-white">MARCELLO</span>
            <span className="text-primary/50 font-light">/</span>
            <span className="font-semibold text-on-surface-variant">CS + PO</span>
          </div>
          
          <div className="hidden md:flex gap-10">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">Sobre</a>
            <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">Experiência</a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projetos</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden sm:flex items-center gap-2 text-primary hover:text-white transition-colors group">
              <Terminal size={18} className="group-hover:animate-pulse" />
              <span>Currículo</span>
            </button>
            <a 
              href="#contact" 
              className="px-5 py-2 bg-primary text-white hover:bg-primary-container transition-colors rounded"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 md:px-16 overflow-hidden hero-gradient">
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
                Ciência da Computação <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                  x Visão de Produto
                </span>
              </h1>
              
              <p className="font-sans text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                Estudante na UFPR e Product Owner. Transformando teoria computacional complexa em produtos digitais de impacto através de liderança ágil e análise de dados.
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
                  href="https://github.com/MarcelloEdu" 
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
                <img 
                  src="https://picsum.photos/seed/tech/800/1000" 
                  alt="Abstract Tech" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen group-hover:scale-105 transition-transform duration-1000 animate-slow-pan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
                    <div>
                      <p className="font-label text-[10px] text-primary uppercase tracking-[0.2em] mb-2">Status</p>
                      <p className="font-headline text-2xl text-white font-bold">Diretor de Negócios</p>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center text-white/30">
                      <Terminal size={32} strokeWidth={1} />
                    </div>
                  </div>
                  <div className="flex gap-4 font-label text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    <span>SCRUM</span>
                    <span>•</span>
                    <span>DATA-DRIVEN</span>
                    <span>•</span>
                    <span>PRODUCT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-16 lg:px-24 bg-surface-container-low relative border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <motion.div className="lg:col-span-4 flex flex-col justify-between h-full" {...fadeIn}>
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
                    <p className="font-headline font-bold text-white">UFPR</p>
                    <p className="font-sans text-sm text-zinc-400">Bacharelado em Ciência da Computação</p>
                    <p className="font-label text-[10px] text-zinc-500 uppercase mt-1">2024 — 2028</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 p-6 bg-surface rounded-xl border border-white/5">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin size={24} />
                  </div>
                  <p className="font-headline font-bold text-white">Curitiba, PR</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-8 space-y-12" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="font-sans text-xl text-zinc-300 leading-relaxed max-w-3xl space-y-8 font-light">
                <p>
                  Minha jornada na computação vai além de escrever algoritmos eficientes. Na Universidade Federal do Paraná, mergulho profundamente nos fundamentos da computação, matemática e arquitetura de software.
                </p>
                <p>
                  No entanto, descobri que a verdadeira força da tecnologia se manifesta quando aliada a uma visão de negócios clara. Como <strong className="text-white font-medium">Diretor de Negócios e Product Owner na ECOMP</strong>, atuo como a ponte tradutora entre as necessidades complexas de stakeholders e o desenvolvimento de software prático.
                </p>
                <p>
                  Meu foco é unir a excelência técnica de linguagens como C++ e .NET com metodologias ágeis (Scrum/Kanban) para entregar produtos que realmente resolvem problemas do mundo real, sempre pautado por dados e inteligência de mercado.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                <div className="space-y-6">
                  <h4 className="font-label text-xs uppercase tracking-[0.2em] text-primary">Desenvolvimento & Tech</h4>
                  <div className="flex flex-wrap gap-3">
                    {["C / C++ / C#", ".NET / EF Core", "Python", "SQL Server", "React / APIs REST"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-surface-container border border-white/5 font-label text-[11px] tracking-wider text-zinc-300 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Produto & Gestão</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Scrum / Kanban", "Product Ownership", "Gestão de Stakeholders", "Google Analytics / Ads", "OKRs"].map(skill => (
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

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 bg-surface max-w-[1440px] mx-auto">
          <motion.div className="mb-20" {...fadeIn}>
            <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">Liderança & Experiência</h2>
            <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">Atuação Profissional</h3>
          </motion.div>

          <div className="space-y-24">
            <div className="relative pl-8 md:pl-16 border-l border-white/10">
              <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(79,117,255,0.8)]" />
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h4 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight text-balance">
                    ECOMP – Empresa Júnior de Computação
                  </h4>
                  <p className="font-label text-primary uppercase tracking-[0.15em] text-xs mt-3">Diretor de Negócios / Product Owner / Marketing</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-label text-sm text-zinc-400 tracking-widest uppercase">Set 2024 – Atual</p>
                  <p className="font-sans text-xs text-zinc-500 mt-1 uppercase tracking-tighter italic">Curitiba • UFPR</p>
                </div>
              </div>

              <div className="bg-surface-container-low border border-white/5 rounded-2xl p-8 md:p-10 hover:border-primary/20 transition-colors duration-500">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <li className="flex items-start gap-5">
                    <div className="p-2 bg-primary/10 rounded flex-shrink-0"><Users size={20} className="text-primary" /></div>
                    <p className="font-sans text-zinc-300 leading-relaxed">Liderança de equipe comercial com <strong className="text-white">7 membros</strong> e gestão estruturada de pipeline.</p>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="p-2 bg-primary/10 rounded flex-shrink-0"><Component size={20} className="text-primary" /></div>
                    <p className="font-sans text-zinc-300 leading-relaxed">Atuação como <strong className="text-white">Product Owner</strong> em projetos ágeis: definição de backlog e Sprints.</p>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="p-2 bg-primary/10 rounded flex-shrink-0"><Handshake size={20} className="text-primary" /></div>
                    <p className="font-sans text-zinc-300 leading-relaxed">Levantamento de requisitos em <strong className="text-white">4 projetos reais de software</strong>.</p>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="p-2 bg-primary/10 rounded flex-shrink-0"><Megaphone size={20} className="text-primary" /></div>
                    <p className="font-sans text-zinc-300 leading-relaxed">Gestão de campanhas e análise de dados utilizando <strong className="text-white">Google Ads/Analytics</strong>.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div className="p-8 bg-surface-container-low rounded-2xl border border-white/5" {...fadeIn}>
                <div className="flex justify-between items-start mb-6">
                  <h4 className="font-headline text-xl font-bold text-white">C.A. Alexandre Direne</h4>
                  <p className="font-label text-[10px] text-zinc-500 uppercase tracking-widest text-right">Jul 2024 — Atual</p>
                </div>
                <p className="font-label text-secondary uppercase tracking-[0.2em] text-[10px] mb-6">Equipe de Marketing</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-zinc-400 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 mt-1.5 flex-shrink-0" />
                    Planejamento de comunicação institucional e eventos acadêmicos.
                  </li>
                  <li className="flex items-start gap-3 text-zinc-400 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 mt-1.5 flex-shrink-0" />
                    Gestão de redes sociais e produção de conteúdo.
                  </li>
                </ul>
              </motion.div>

              <motion.div className="p-8 bg-surface-container-low rounded-2xl border border-white/5" {...fadeIn} transition={{ delay: 0.1 }}>
                <div className="flex justify-between items-start mb-6">
                  <h4 className="font-headline text-xl font-bold text-white">Atlética Vikings C7</h4>
                  <p className="font-label text-[10px] text-zinc-500 uppercase tracking-widest text-right">Mai 2024 — Atual</p>
                </div>
                <p className="font-label text-tertiary uppercase tracking-[0.2em] text-[10px] mb-6">Cheerleading / Marketing</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-zinc-400 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary/50 mt-1.5 flex-shrink-0" />
                    Produção de conteúdo para divulgação do time e eventos.
                  </li>
                  <li className="flex items-start gap-3 text-zinc-400 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary/50 mt-1.5 flex-shrink-0" />
                    Apoio na comunicação digital e engajamento.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects / Education Section */}
        <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 bg-surface-container-low border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8" {...fadeIn}>
              <div>
                <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4">Projetos & Formação</h2>
                <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white">Desenvolvimento</h3>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="group p-10 bg-surface-container border border-white/5 hover:border-primary/30 transition-all duration-500 rounded-2xl relative overflow-hidden"
                {...fadeIn}
              >
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                  <Database size={120} strokeWidth={0.5} />
                </div>
                <h4 className="font-headline text-2xl font-bold text-white mb-2">Capacitação Volvo + PUCPR</h4>
                <p className="font-label text-[10px] tracking-widest text-primary uppercase mb-8">Jan 2026 – Fev 2026 • 52h</p>
                <p className="font-sans text-zinc-400 font-light leading-relaxed mb-10 text-lg">
                  Formação intensiva em desenvolvimento backend focado no ecossistema Microsoft. Manipulação avançada de dados e projeto prático integrando tecnologias .NET.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["C#", ".NET", "SQL Server", "Entity Framework"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 font-label text-[10px] tracking-widest uppercase text-zinc-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="group p-10 bg-surface-container border border-white/5 hover:border-secondary/30 transition-all duration-500 rounded-2xl relative overflow-hidden"
                {...fadeIn}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-secondary/10 transition-colors duration-500">
                  <CodeXml size={120} strokeWidth={0.5} />
                </div>
                <h4 className="font-headline text-2xl font-bold text-white mb-2">Projetos Acadêmicos UFPR</h4>
                <p className="font-label text-[10px] tracking-widest text-secondary uppercase mb-8">2024 – Atual</p>
                <p className="font-sans text-zinc-400 font-light leading-relaxed mb-10 text-lg">
                  Foco em algoritmos complexos, estruturas de dados otimizadas e modelagem arquitetural de bancos de dados relacionais.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["C", "C++", "SQL", "Algoritmos"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 font-label text-[10px] tracking-widest uppercase text-zinc-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 relative flex items-center justify-center overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-grain opacity-40 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full z-0" />
          
          <motion.div className="max-w-4xl mx-auto relative z-10 text-center space-y-10" {...fadeIn}>
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
                href="mailto:eduardomarcello912@gmail.com" 
                className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-all rounded-full shadow-2xl shadow-primary/20 group"
              >
                <Mail size={18} className="group-hover:-rotate-12 transition-transform" />
                <span>Email</span>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-4 px-10 py-5 bg-surface-container-high border border-white/10 text-white font-label text-xs uppercase tracking-widest hover:bg-white/5 transition-all rounded-full group"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-label text-xs uppercase tracking-widest hover:bg-[#25D366]/20 transition-all rounded-full"
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 bg-surface border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left space-y-4">
            <p className="font-headline text-lg font-black tracking-tighter text-white">MARCELLO EDUARDO PEREIRA JORGE</p>
            <p className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-500">eduardomarcello912@gmail.com</p>
          </div>
          
          <div className="flex gap-10 font-label text-[10px] tracking-[0.2em] uppercase">
            <a href="https://github.com/MarcelloEdu" target="_blank" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
              <Github size={14} /> GitHub
            </a>
            <a href="#" target="_blank" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
          <p className="font-label text-[9px] text-zinc-600 tracking-[0.3em] uppercase">© 2026 • Designed for Excellence</p>
        </div>
      </footer>
    </div>
  );
}
