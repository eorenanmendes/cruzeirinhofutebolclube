import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Users, Globe, ArrowRight, Mail, Phone, MapPin, ChevronLeft, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import socialGroup1 from "@/assets/social-group-1.png.asset.json";
import socialGroup2 from "@/assets/social-group-2.png.asset.json";
import socialLocker from "@/assets/social-team-locker.png.asset.json";

export const Route = createFileRoute("/projeto-social")({
  component: ProjetoSocial,
});

function ProjetoSocial() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-rose-100 selection:text-rose-600 font-sans">
      {/* Mini-site Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-black italic uppercase tracking-tighter text-slate-900 leading-none">Projeto Social</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500">Cruzeirinho FC</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-rose-500 transition-colors">Sobre</a>
            <a href="#proposito" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-rose-500 transition-colors">Propósito</a>
            <a href="#galeria" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-rose-500 transition-colors">Galeria</a>
            <a href="#contato" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-rose-500 transition-colors">Contato</a>
          </div>

          <Link to="/" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-rose-500 transition-colors px-4 py-2 rounded-full border border-slate-200 hover:border-rose-200">
            <ChevronLeft className="w-3 h-3" />
            Voltar ao Cruzeirinho
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-rose-50 text-rose-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">Transformação Social</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              O esporte como ferramenta de <span className="text-rose-500">esperança</span>.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Nosso projeto social vai além das quatro linhas, focando na educação, cidadania e no futuro das nossas crianças na Zona Leste.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-bold transition-all shadow-xl shadow-rose-200 flex items-center gap-3 group">
                Conheça o Projeto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
               <img 
                src={socialGroup2.url} 
                alt="Impacto Social" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse delay-700" />
          </motion.div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section id="sobre" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight italic uppercase">Sobre o Projeto</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            O Projeto Social Cruzeirinho nasceu da necessidade de oferecer oportunidades reais para jovens em situação de vulnerabilidade. Acreditamos que o futebol é a porta de entrada para a disciplina, o respeito e a educação integral.
          </p>
        </div>
      </section>

      {/* Propósito e Objetivos */}
      <section id="proposito" className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Educação", icon: Heart, desc: "Acompanhamento escolar e incentivo aos estudos como prioridade absoluta." },
            { title: "Cidadania", icon: Globe, desc: "Formação de valores, ética e respeito mútuo dentro e fora de campo." },
            { title: "Inclusão", icon: Users, desc: "Acesso gratuito ao esporte de qualidade para todos da comunidade." }
          ].map((obj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-8">
                <obj.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 italic uppercase tracking-tighter">{obj.title}</h3>
              <p className="text-slate-500 leading-relaxed">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Atividades e Como Funciona */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight italic uppercase">Nossas Atividades</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">Oferecemos um suporte completo que vai muito além do treinamento esportivo, cuidando do desenvolvimento humano em sua totalidade.</p>
              <div className="space-y-6">
                {[
                  "Treinos de Futebol Gratuitos",
                  "Acompanhamento Psicossocial",
                  "Palestras Educativas e Cidadania",
                  "Eventos Comunitários e Festividades",
                  "Suporte Alimentar para Famílias"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-lg font-bold text-slate-800 italic uppercase tracking-tighter">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-rose-50 p-12 rounded-[3rem] border border-rose-100">
              <h3 className="text-2xl font-bold text-rose-600 mb-6 italic uppercase tracking-tight">Onde queremos chegar</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Nossa meta é atingir mais de 500 crianças na região, transformando o Jardim Maringá em um polo de educação e esporte, reduzindo drasticamente a evasão escolar.
              </p>
              <div className="flex gap-4 items-baseline">
                <span className="text-5xl font-black text-rose-500 italic">85%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Aproveitamento Escolar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Premium */}
      <section id="galeria" className="py-32 px-6 bg-[#fafafa] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-rose-500 font-bold uppercase tracking-widest text-xs">Momentos Inesquecíveis</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 tracking-tight italic uppercase">Nossa Galeria</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-8 md:row-span-2 rounded-[2.5rem] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <p className="text-white font-bold text-xl italic uppercase tracking-tighter">Treino Comunitário</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-4 md:row-span-1 rounded-[2.5rem] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-lg italic uppercase tracking-tighter">União e Garra</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-4 md:row-span-1 rounded-[2.5rem] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1526232762683-21758f0d70e8?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeria" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-lg italic uppercase tracking-tighter">Futuro Craque</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 italic uppercase tracking-tighter leading-tight">Faça parte da nossa <span className="text-rose-500 underline">Transformação</span>.</h2>
            <p className="text-slate-400 text-xl mb-12 font-light">Seja um apoiador, voluntário ou traga seu filho para conhecer o projeto social que está mudando a Zona Leste.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-rose-500 transition-all group-hover:bg-rose-500 group-hover:text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Localização</p>
                  <p className="text-lg font-bold">Jardim Maringá, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-rose-500 transition-all group-hover:bg-rose-500 group-hover:text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Instagram</p>
                  <p className="text-lg font-bold">@cruzeirinhops</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-xl">
             <h3 className="text-2xl font-bold mb-8 italic uppercase tracking-tighter">Entre em Contato</h3>
             <form className="space-y-6">
                <input type="text" placeholder="Seu Nome" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-rose-500 outline-none transition-all" />
                <input type="email" placeholder="Seu E-mail" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-rose-500 outline-none transition-all" />
                <textarea placeholder="Como você deseja ajudar?" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-rose-500 outline-none transition-all h-32" />
                <button className="w-full py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold transition-all uppercase tracking-widest text-sm">Enviar Mensagem</button>
             </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        © 2026 Projeto Social Cruzeirinho FC. Todos os direitos reservados.
      </footer>
    </div>
  );
}
