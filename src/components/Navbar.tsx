import { Terminal } from "lucide-react";
import { useScrolled } from "../hooks";
import { PERSONAL_INFO } from "../constants";

export const Navbar = () => {
  const isScrolled = useScrolled();

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-surface/80 backdrop-blur-2xl border-white/5 py-4" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center font-label tracking-tight text-xs uppercase">
        <div className="flex items-center gap-2">
          <span className="text-xl font-headline font-black tracking-tighter text-white">{PERSONAL_INFO.name}</span>
          <span className="text-primary/50 font-light">/</span>
          <span className="font-semibold text-on-surface-variant">{PERSONAL_INFO.role}</span>
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
  );
};