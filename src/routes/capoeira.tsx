import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Users, Shield, ArrowRight, Mail, Phone, MapPin, ChevronLeft, MessageCircle, Star } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import capoeira1 from "@/assets/capoeira-1.png.asset.json";
import capoeira2 from "@/assets/capoeira-2.png.asset.json";
import capoeira3 from "@/assets/capoeira-3.png.asset.json";
import socialTeamGroup from "@/assets/social-team-group.png.asset.json";

export const Route = createFileRoute("/capoeira")({
  component: Capoeira,
});

function Capoeira() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-600/30 font-sans">
      {/* Mini-site Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase tracking-tighter leading-none">Cruzeirinho</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Capoeira</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Sobre</a>
            <a href="#metodologia" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Metodologia</a>
            <a href="#roda" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">A Roda</a>
          </div>

          <Link to="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-blue-500 transition-colors px-4 py-2 rounded-lg border border-white/10 hover:border-blue-500/50">
            <ChevronLeft className="w-3 h-3" />
            Voltar ao Cruzeirinho
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
         <div className="absolute inset-0 z-0">
          <img 
            src={capoeira3.url} 
            className="w-full h-full object-cover opacity-50 grayscale-0"
            alt="Capoeira Training"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-600/30 mb-8 backdrop-blur-sm">Cultura e Movimento na Zona Leste</span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter italic uppercase">
              Ritmo & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">Liberdade.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl font-medium leading-relaxed uppercase tracking-wide">
              Descubra a arte que une luta, dança e musicalidade. Um patrimônio cultural para fortalecer o corpo e a alma.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://wa.me/5511993436066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 group"
              >
                Agendar Aula Experimental <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre a Capoeira */}
      <section id="sobre" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <Users className="w-16 h-16 text-blue-500 mb-12" />
          <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-tight">
             Respeito à Raiz, <br />
             Força na Ginga.
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-3xl font-medium uppercase tracking-tighter">
            Nossa roda é aberta para todos. Pratique a Capoeira como forma de expressão, defesa e condicionamento físico completo, mantendo viva a nossa tradição.
          </p>
        </div>
      </section>

      {/* Metodologia e Benefícios */}
      <section id="metodologia" className="py-32 px-6 bg-neutral-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Flexibilidade", icon: Star, desc: "Aumente sua amplitude de movimento com a ginga e as esquivas." },
            { title: "Musicalidade", icon: Users, desc: "Aprenda o toque do berimbau e os cantos tradicionais." },
            { title: "Autoestima", icon: Shield, desc: "Desenvolva confiança e controle emocional através do jogo." },
            { title: "Condicionamento", icon: Trophy, desc: "Trabalhe todos os grupos musculares de forma dinâmica." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-[2rem] bg-neutral-950 border border-white/5 hover:border-blue-500/50 transition-all group"
            >
              <item.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-300 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeria / A Roda */}
      <section id="roda" className="py-32 px-6 bg-neutral-900/30 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter relative">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10rem] opacity-5 text-blue-500 select-none">AXÉ</span>
              Nossa Roda
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/5] md:aspect-square"
            >
              <img src={capoeira1.url} className="w-full h-full object-cover" alt="Roda de Capoeira 1" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/5] md:aspect-square"
            >
              <img src={capoeira2.url} className="w-full h-full object-cover" alt="Roda de Capoeira 2" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/5] md:aspect-square"
            >
              <img src={capoeira3.url} className="w-full h-full object-cover" alt="Roda de Capoeira 3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter leading-none">Venha Jogar <br />com a gente.</h2>
          <a 
            href="https://wa.me/5511993436066" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-16 py-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-black uppercase tracking-widest text-lg transition-all shadow-[0_0_50px_rgba(37,99,235,0.4)]"
          >
            Agendar Aula Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black flex flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-black italic uppercase tracking-tighter">Cruzeirinho Capoeira</span>
        </div>
        <div className="flex gap-10">
          <MessageCircle className="w-5 h-5 text-neutral-500 hover:text-blue-500 cursor-pointer transition-colors" />
          <Mail className="w-5 h-5 text-neutral-500 hover:text-blue-500 cursor-pointer transition-colors" />
          <MapPin className="w-5 h-5 text-neutral-500 hover:text-blue-500 cursor-pointer transition-colors" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-700">© 2026 Cruzeirinho Futebol Clube. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
