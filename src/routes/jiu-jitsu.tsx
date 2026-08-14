import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Users, Shield, ArrowRight, Mail, Phone, MapPin, ChevronLeft, MessageCircle, Star } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";

export const Route = createFileRoute("/jiu-jitsu")({
  component: JiuJitsu,
});

function JiuJitsu() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500/30 font-sans">
      {/* Mini-site Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase tracking-tighter leading-none">Jiu-Jitsu</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500">Elite Team</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-[10px] font-black uppercase tracking-widest hover:text-amber-500 transition-colors">Sobre</a>
            <a href="#metodologia" className="text-[10px] font-black uppercase tracking-widest hover:text-amber-500 transition-colors">Metodologia</a>
            <a href="#horarios" className="text-[10px] font-black uppercase tracking-widest hover:text-amber-500 transition-colors">Horários</a>
            <a href="#galeria" className="text-[10px] font-black uppercase tracking-widest hover:text-amber-500 transition-colors">Galeria</a>
          </div>

          <Link to="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-amber-500 transition-colors px-4 py-2 rounded-lg border border-white/10 hover:border-amber-500/50">
            <ChevronLeft className="w-3 h-3" />
            Voltar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
         <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Jiu Jitsu Training"
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
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-amber-500/30 mb-8 backdrop-blur-sm">A Arte Suave na Zona Leste</span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter italic uppercase">
              Disciplina & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">Poder.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl font-medium leading-relaxed uppercase tracking-wide">
              Transforme sua mente e corpo através da técnica milenar do Jiu-Jitsu. Foco, respeito e evolução constante.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-12 py-6 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_40px_rgba(245,158,11,0.3)] flex items-center justify-center gap-3 group">
                Agendar Aula Experimental <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre o Jiu-Jitsu */}
      <section id="sobre" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <Shield className="w-16 h-16 text-amber-500 mb-12" />
          <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-tight">
             Respeito ao Tatame, <br />
             Evolução na Vida.
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-3xl font-medium uppercase tracking-tighter">
            Nossa academia oferece um ambiente de alto nível para praticantes de todas as idades. Do iniciante ao avançado, focamos na técnica refinada e na formação de caráter.
          </p>
        </div>
      </section>

      {/* Metodologia e Benefícios */}
      <section id="metodologia" className="py-32 px-6 bg-neutral-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Defesa Pessoal", icon: Shield, desc: "Aprenda a se defender com técnicas eficientes e reais." },
            { title: "Disciplina", icon: Star, desc: "Foco mental e autocontrole aplicados em todas as áreas." },
            { title: "Condicionamento", icon: Users, desc: "Prepare seu corpo com treinos intensos e funcionais." },
            { title: "Respeito", icon: Trophy, desc: "Hierarquia e honra são os pilares do nosso tatame." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-[2rem] bg-neutral-950 border border-white/5 hover:border-amber-500/50 transition-all group"
            >
              <item.icon className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-300 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Horários */}
      <section id="horarios" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Nossos Horários</h2>
             <p className="text-neutral-500 mt-4 uppercase tracking-widest text-xs font-black">Encontre o melhor momento para treinar</p>
          </div>
          
          <div className="space-y-4">
             {["Segunda & Quarta", "Terça & Quinta", "Sexta-feira", "Sábado (Open Mat)"].map((day, i) => (
               <div key={i} className="flex flex-col md:flex-row items-center justify-between p-8 bg-neutral-900 rounded-[2rem] border border-white/5 hover:bg-neutral-800 transition-colors">
                  <span className="text-2xl font-black italic uppercase tracking-tighter mb-4 md:mb-0">{day}</span>
                  <div className="flex gap-4">
                    <span className="px-6 py-2 bg-amber-500/10 text-amber-500 text-xs font-black rounded-full border border-amber-500/20">07:00 — 08:30</span>
                    <span className="px-6 py-2 bg-neutral-800 text-neutral-400 text-xs font-black rounded-full">19:30 — 21:00</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Professores e Equipe */}
      <section className="py-32 px-6 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-center">Nossos Mestres</h2>
            <p className="text-amber-500 mt-4 uppercase tracking-widest text-xs font-black">Liderança e Experiência no Tatame</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
             <div className="text-center group">
                <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-amber-500/20 mb-8 relative">
                   <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Professor" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">Mestre Silva</h3>
                <p className="text-amber-500 text-xs font-black uppercase tracking-widest">Faixa Preta 4º Grau</p>
             </div>
             <div className="text-center group">
                <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-amber-500/20 mb-8 relative">
                   <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Professor" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">Professor Santos</h3>
                <p className="text-amber-500 text-xs font-black uppercase tracking-widest">Faixa Preta 1º Grau</p>
             </div>
          </div>
        </div>
      </section>

      {/* Galeria Premium 3D */}
      <section id="galeria" className="py-32 px-6 bg-neutral-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter relative">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10rem] opacity-5 text-amber-500 select-none">TATAME</span>
              Nossa Galeria
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 perspective-1000">
            {[
              "https://images.unsplash.com/photo-1599058917232-d750c18590e7?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517438476312-10d79c6777ed?q=80&w=2072&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1549476464-37392f717551?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ rotateY: 10, scale: 1.05, z: 50 }}
                className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src={img} className="w-full h-full object-cover" alt="Tatame" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter leading-none">Entre para o <br />Time.</h2>
          <button className="px-16 py-8 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-black uppercase tracking-widest text-lg transition-all shadow-[0_0_50px_rgba(245,158,11,0.4)]">Agendar Aula Agora</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black flex flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Logo" className="w-8 h-8 brightness-0 invert" />
          <span className="text-lg font-black italic uppercase tracking-tighter">Jiu-Jitsu Elite</span>
        </div>
        <div className="flex gap-10">
          <MessageCircle className="w-5 h-5 text-neutral-500 hover:text-amber-500 cursor-pointer transition-colors" />
          <Mail className="w-5 h-5 text-neutral-500 hover:text-amber-500 cursor-pointer transition-colors" />
          <MapPin className="w-5 h-5 text-neutral-500 hover:text-amber-500 cursor-pointer transition-colors" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-700">© 2026 Jiu-Jitsu Elite Team. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
