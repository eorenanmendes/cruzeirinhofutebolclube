import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Users, Shield, ArrowRight, Mail, Phone, MapPin, ChevronLeft, MessageCircle, Star, Target } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import socialTeamGroup from "@/assets/social-team-group.png.asset.json";
import clubeEscolaHero from "@/assets/clube-escola-hero.png.asset.json";
import ce1 from "@/assets/clube-escola-1.png.asset.json";
import ce2 from "@/assets/clube-escola-2.png.asset.json";
import ce3 from "@/assets/clube-escola-3.png.asset.json";
import ce4 from "@/assets/clube-escola-4.png.asset.json";

export const Route = createFileRoute("/projeto-clube-escola")({
  component: ProjetoClubeEscola,
});

function ProjetoClubeEscola() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600/30 font-sans">
      {/* Mini-site Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-black italic uppercase tracking-tighter leading-none">Clube Escola</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Formação Profissional</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">O Clube</a>
            <a href="#metodologia" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Metodologia</a>
            <a href="#categorias" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Categorias</a>
            <a href="#galeria" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Galeria</a>
          </div>

          <Link to="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-blue-500 transition-colors px-6 py-2 rounded-full border border-white/10 hover:border-blue-500/50">
            <ChevronLeft className="w-3 h-3" />
            Voltar ao Cruzeirinho
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10" />
          <img 
            src={clubeEscolaHero.url} 
            className="w-full h-full object-cover opacity-30"
            alt="Futebol Profissional"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-blue-600" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em]">Centro de Treinamento Avançado</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter italic uppercase">
              Elite em <br />
              <span className="text-blue-600">Formação.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
              O caminho para o futebol profissional começa com base sólida, técnica refinada e mentalidade de campeão.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://wa.me/5511993436066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-[0_20px_40px_rgba(37,99,235,0.25)] flex items-center gap-3 group"
              >
                Quero Conhecer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
        
      </section>

      {/* Sobre o Clube Escola */}
      <section id="sobre" className="py-40 px-6 relative bg-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 relative z-10">
               <img src={socialTeamGroup.url} className="w-full h-full object-cover transition-all duration-700" alt="Treinamento" />
            </div>
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-blue-600/20 rounded-[3rem] -z-10" />
          </div>
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-tight">Onde a <br />Elite se forma.</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-medium">
              O Clube Escola Cruzeirinho é o ápice do nosso sistema de formação. Aqui, atletas selecionados recebem treinamento de nível profissional, focado em tática avançada, preparação física e inteligência emocional.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-black italic text-blue-500 mb-2">100%</h4>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">Foco Profissional</p>
              </div>
              <div>
                <h4 className="text-3xl font-black italic text-blue-500 mb-2">CT</h4>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">Estrutura Própria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-40 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter">Nossa Metodologia</h2>
            <p className="text-blue-500 mt-4 uppercase tracking-[0.3em] text-xs font-black">Desenvolvimento 360 Graus</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Tática Avançada", icon: Target, desc: "Compreensão profunda do jogo e sistemas táticos modernos." },
              { title: "Performance Física", icon: Trophy, desc: "Preparação de alto nível para suportar o ritmo do futebol profissional." },
              { title: "Mentalidade", icon: Star, desc: "Resiliência e foco psicológico para grandes desafios." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="p-12 rounded-[3rem] bg-slate-950 border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-[5rem] -z-10 group-hover:bg-blue-600/10 transition-colors" />
                <item.icon className="w-12 h-12 text-blue-500 mb-8" />
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias & Equipe */}
      <section id="categorias" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                 <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-8 leading-tight">Categorias <br />de Base.</h2>
                 <p className="text-slate-400 font-medium mb-12">Nossas categorias são divididas por faixa etária e nível técnico, garantindo o melhor desenvolvimento para cada atleta.</p>
                 <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-blue-500 hover:gap-6 transition-all">
                   Ver Quadro Completo <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                 {["Sub-11 & Sub-13", "Sub-15 & Sub-17"].map((cat, i) => (
                   <div key={i} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group">
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-black italic uppercase tracking-tighter">{cat}</span>
                        <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:animate-ping" />
                     </div>
                     <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-sm text-slate-500 font-bold uppercase tracking-widest">
                          <div className="w-1 h-1 bg-blue-500" /> Treinos 4x por semana
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-500 font-bold uppercase tracking-widest">
                          <div className="w-1 h-1 bg-blue-500" /> Competições Estaduais
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-500 font-bold uppercase tracking-widest">
                          <div className="w-1 h-1 bg-blue-500" /> Análise de Vídeo
                        </li>
                     </ul>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>


      {/* Galeria Premium Grid Assimétrica */}
      <section id="galeria" className="py-40 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
             <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-right">Portfolio <br /><span className="text-blue-600">de Elite.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
             <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-7 aspect-[16/9] rounded-[3rem] overflow-hidden group relative">
                <img src={ce1.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria" />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
             </motion.div>
             <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-5 aspect-[4/5] rounded-[3rem] overflow-hidden group relative">
                <img src={ce2.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria" />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
             </motion.div>
             <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-5 aspect-[4/5] rounded-[3rem] overflow-hidden group relative">
                <img src={ce3.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria" />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
             </motion.div>
             <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-7 aspect-[16/9] rounded-[3rem] overflow-hidden group relative">
                <img src={ce4.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria" />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-60 px-6 text-center bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-blue-600)_0%,transparent_70%)]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter leading-none">Faça parte <br />da história.</h2>
          <a 
            href="https://wa.me/5511993436066" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-16 py-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-[0_30px_60px_rgba(37,99,235,0.3)]"
          >
            Quero me Inscrever
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black flex flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Logo" className="w-10 h-10" />
          <div className="flex flex-col text-left">
            <span className="text-xl font-black italic uppercase tracking-tighter leading-none">Clube Escola</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Cruzeirinho FC</span>
          </div>
        </div>
        <div className="flex gap-10">
          <MessageCircle className="w-6 h-6 text-slate-600 hover:text-blue-500 cursor-pointer transition-colors" />
          <Mail className="w-6 h-6 text-slate-600 hover:text-blue-500 cursor-pointer transition-colors" />
          <MapPin className="w-6 h-6 text-slate-600 hover:text-blue-500 cursor-pointer transition-colors" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-800">© 2026 Clube Escola Cruzeirinho. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
