import { Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const Footer = () => {
  return (
    <footer className="w-full py-20 bg-surface border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left space-y-4">
          <p className="font-headline text-lg font-black tracking-tighter text-white">{PERSONAL_INFO.fullName}</p>
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-500">{PERSONAL_INFO.email}</p>
        </div>
        
        <div className="flex gap-10 font-label text-[10px] tracking-[0.2em] uppercase">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <Github size={14} /> GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="font-label text-[9px] text-zinc-600 tracking-[0.3em] uppercase">© 2026 • Designed for Excellence</p>
      </div>
    </footer>
  );
};