import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Trophy, Users, Calendar, MessageCircle, Mail, Menu, X, ChevronRight, Star, Heart, Shield } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import logoAsset from "@/assets/logo.asset.json";
import img2Asset from "@/assets/image-2.png.asset.json";
import img3Asset from "@/assets/image-3.png.asset.json";
import img4Asset from "@/assets/image-4.png.asset.json";
import img5Asset from "@/assets/image-5.png.asset.json";
import imgWebpAsset from "@/assets/image.webp.asset.json";
import bookingBgAsset from "@/assets/team-group.png.asset.json";
import ballAsset from "@/assets/soccer-ball.png.asset.json";
import socialTeamGroup from "@/assets/social-team-group.png.asset.json";
import jiuJitsuHero from "@/assets/jiu-jitsu-hero.png.asset.json";
import jiuJitsu1 from "@/assets/jiu-jitsu-1.png.asset.json";
import ce1 from "@/assets/clube-escola-1.png.asset.json";


const schema = z.object({
  name: z.string().min(2),
  age: z.string().min(1),
  parent: z.string().min(2),
  whatsapp: z.string().min(10),
  category: z.string().min(1),
  notes: z.string().optional(),
});

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMapOpen, setIsMapOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = () => {
    toast.success("Solicitação recebida! Entraremos em contato em breve.");
    setIsBookingOpen(false);
    reset();
  };

  const categories = [
    { id: "sub7", title: "Sub-7", age: "5 a 7 anos", desc: "Introdução lúdica e fundamentos básicos do futebol." },
    { id: "sub9", title: "Sub-9", age: "8 a 9 anos", desc: "Início do desenvolvimento técnico e tática individual." },
    { id: "sub11", title: "Sub-11", age: "10 a 11 anos", desc: "Aprimoramento da leitura de jogo e coordenação motora." },
    { id: "sub13", title: "Sub-13", age: "12 a 13 anos", desc: "Consolidação dos fundamentos e inteligência tática." },
    { id: "sub15", title: "Sub-15", age: "14 a 15 anos", desc: "Preparação competitiva e disciplina atlética profissional." },
    { id: "sub17", title: "Sub-17", age: "16 a 17 anos", desc: "Alta performance e transição para o futebol profissional." }
  ];

  const services = [
    { title: "Treino Coletivo", icon: Users, price: "Grátis (1ª aula)" },
    { title: "Personal Soccer", icon: Star, price: "Sob consulta" },
    { title: "Análise de Desempenho", icon: Trophy, price: "Incluso" }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600/30">
      <Toaster />

      {/* Header/Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Cruzeirinho Logo" className="w-12 h-12 md:w-14 md:h-14" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black italic uppercase tracking-tighter leading-none">Cruzeirinho</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Futebol Clube</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#projetos" className="text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Projetos</a>
            <a href="#categorias" className="text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Categorias</a>
            
            <button onClick={() => setIsBookingOpen(true)} className="text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Agendar Aula</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs transition shadow-lg shadow-blue-600/20">
              Contato
            </button>
          </div>
          
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-start justify-center p-6 md:p-24 bg-slate-950 text-white overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={jiuJitsuHero.url} 

            className="w-full h-full object-cover opacity-30"
            alt="Soccer Field"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-blue-600/20 text-blue-500 font-bold uppercase tracking-widest text-sm mb-6 rounded-full border border-blue-600/30 backdrop-blur-sm"
          >
            Matrículas Abertas
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter italic uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 animate-pulse">
              O futuro do futebol
            </span><br />
            começa aqui.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
            Metodologia exclusiva de ensino focada no desenvolvimento técnico e humano para jovens atletas de alto rendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter text-lg transition shadow-xl w-full sm:w-auto text-center"
              onClick={() => setIsBookingOpen(true)}
            >
              Agendar Aula Experimental
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              onClick={() => setIsMapOpen(true)}
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter text-lg transition w-full sm:w-auto text-center"
            >
              Conhecer CT
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Nossos Projetos */}
      <section id="projetos" className="py-32 px-6 bg-black relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter relative">
              <span className="absolute -top-10 -left-12 text-9xl opacity-5 text-blue-500 select-none">PROJETOS</span>
              Conheça Nossos Projetos
            </h2>
            <p className="text-slate-500 mt-6 font-bold uppercase tracking-widest text-center max-w-2xl">
              Experiências completas e profissionais para cada modalidade e objetivo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                title: "PROJETO SOCIAL", 
                desc: "Impacto, inclusão e esperança através do esporte na comunidade.", 
                icon: Heart, 
                color: "rose", 
                href: "/projeto-social",
                img: socialTeamGroup.url
              },
              { 
                title: "🥋 JIU-JITSU", 
                desc: "Disciplina, técnica e força na nossa elite team de artes marciais.", 
                icon: Shield, 
                color: "blue", 
                href: "/jiu-jitsu",
                img: jiuJitsu1.url
              },
              { 
                title: "⚽ PROJETO CLUBE ESCOLA", 
                desc: "Formação de elite e alto rendimento para o futebol profissional.", 
                icon: Trophy, 
                color: "blue", 
                href: "/projeto-clube-escola",
                img: ce1.url
              }
            ].map((proj, i) => (
              <motion.a 
                key={i} 
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -15 }}
                className="group relative block aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10"
              >
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 group-hover:bg-${proj.color}-600 transition-colors duration-500`}>
                    <proj.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-3 group-hover:text-blue-500 transition-colors">{proj.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {proj.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorar Mini-site <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias (Old section title changed to maintain clarity if needed, or keeping it as detailed tech specs) */}
      <section id="categorias" className="py-24 px-6 bg-slate-950 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter relative">
              <span className="absolute -top-6 -left-8 text-7xl opacity-5 text-blue-500 select-none">NIVEIS</span>
              Categorias de Treinamento
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-slate-900/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{cat.title}</h3>
                <p className="text-blue-500 font-semibold mb-4">{cat.age}</p>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Diferenciais Section */}
      <section className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-500 font-black uppercase tracking-widest mb-6">Por que escolher o Cruzeirinho?</div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 italic uppercase tracking-tighter leading-[0.9]">A força da<br /><span className="text-blue-500 underline decoration-blue-500/30">Zona Leste.</span></h2>
            <div className="space-y-8">
              {[
                { title: "Tradição da ZL", desc: "A essência do futebol de várzea com técnica profissional." },
                { title: "Raça e Talento", desc: "Aqui formamos jogadores com a garra da nossa região." },
                { title: "Comunidade Forte", desc: "Mais que uma escolinha, somos a família Cruzeirinho." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 text-white font-black italic">
                    0{i+1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">{item.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Galeria Horizontal (Mobile) / Grade 3D (Desktop) */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl opacity-5 text-blue-500 select-none">GALERIA</span>
              Nossa Vivência Profissional
            </h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto px-6">Experiência real, conquistas e formação de elite em um ambiente de alto rendimento.</p>
          </div>
          
          {/* Container Mobile: Scroll Horizontal | Desktop: Grid */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 px-6 md:px-0 snap-x snap-mandatory scrollbar-hide perspective-1000">
            {[
              { src: socialTeamGroup.url, title: "Nossa Família", desc: "União e raça dentro do nosso CT." },
              { src: img2Asset.url, title: "Grandes Conquistas", desc: "Campeões com dedicação e talento." },
              { src: img3Asset.url, title: "Formação de Elite", desc: "Preparação para o topo do futebol." },
              { src: img4Asset.url, title: "Ambiente Profissional", desc: "Vestiários e estrutura de primeira linha." },
              { src: img5Asset.url, title: "Reconhecimento", desc: "Medalhas que coroam o esforço diário." }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateY: 20, y: 50 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotateY: -10, 
                  rotateX: 10, 
                  scale: 1.05,
                  z: 50,
                  boxShadow: "0 20px 40px rgba(37,99,235,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl preserve-3d cursor-pointer min-w-[280px] md:min-w-0 snap-center"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 w-full translate-z-20">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter mb-2 text-white group-hover:text-blue-400 transition-colors">{img.title}</h4>
                  <p className="text-sm text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-32 px-6 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[radial-gradient(circle_at_center,var(--color-blue-600)_0%,transparent_70%)]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter">Venha Treinar Conosco!</h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Agende uma aula experimental gratuita para seu filho e descubra por que somos referência em formação de atletas.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full font-black uppercase tracking-tighter text-xl transition shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            onClick={() => setIsBookingOpen(true)}
          >
            Agendar Aula Agora
          </motion.button>
        </div>
      </section>

      {/* Informações */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            { icon: MapPin, val: "CT Geração Craques", label: "São Paulo / SP", color: "text-blue-500" },
            { icon: Trophy, val: "15+", label: "Títulos Conquistados", color: "text-amber-500" },
            { icon: Users, val: "1.2k", label: "Atletas Formados", color: "text-emerald-500" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className={`w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className="w-10 h-10" />
              </div>
              <div className="text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-blue-500 transition-colors duration-500">{item.val}</div>
              <div className="text-slate-500 font-black uppercase tracking-widest text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formulário */}
      <section id="agendar" className="py-24 px-6 bg-black">
        <div className="max-w-2xl mx-auto bg-slate-900/40 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/5">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center italic uppercase tracking-tighter relative">
            <span className="absolute -top-6 -left-4 text-8xl opacity-5 text-blue-500 select-none">AULA</span>
            Agende uma Aula
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Nome do Atleta</label>
                <input {...register("name")} placeholder="Ex: João Silva" className="w-full p-5 rounded-2xl border-2 border-white/5 bg-white/5 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg text-white placeholder:text-slate-600" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Idade</label>
                <input {...register("age")} placeholder="Ex: 10 anos" className="w-full p-5 rounded-2xl border-2 border-white/5 bg-white/5 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg text-white placeholder:text-slate-600" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Nome do Responsável</label>
              <input {...register("parent")} placeholder="Ex: Maria Souza" className="w-full p-5 rounded-2xl border-2 border-white/5 bg-white/5 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg text-white placeholder:text-slate-600" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">WhatsApp de Contato</label>
              <input {...register("whatsapp")} placeholder="(00) 00000-0000" className="w-full p-5 rounded-2xl border-2 border-white/5 bg-white/5 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg text-white placeholder:text-slate-600" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Selecione a Categoria</label>
              <select {...register("category")} className="w-full p-5 rounded-2xl border-2 border-white/5 bg-white/5 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg text-white bg-slate-900 appearance-none">
                <option value="" className="bg-slate-900">Escolher categoria...</option>
                <option value="sub7" className="bg-slate-900">Sub-7 (5 a 7 anos)</option>
                <option value="sub9" className="bg-slate-900">Sub-9 (8 a 9 anos)</option>
                <option value="sub11" className="bg-slate-900">Sub-11 (10 a 11 anos)</option>
                <option value="sub13" className="bg-slate-900">Sub-13 (12 a 13 anos)</option>
                <option value="sub15" className="bg-slate-900">Sub-15 (14 a 15 anos)</option>
                <option value="sub17" className="bg-slate-900">Sub-17 (16 a 17 anos)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Observações Adicionais</label>
              <textarea {...register("notes")} placeholder="Conte-nos um pouco sobre a experiência do atleta..." className="w-full p-5 rounded-2xl border-2 border-white/5 bg-white/5 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg text-white placeholder:text-slate-600 h-32" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(37,99,235,0.2)" }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-2xl font-black uppercase tracking-widest text-xl transition-all shadow-2xl"
            >
              Agendar Agora
            </motion.button>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={img2Asset.url} className="w-full h-full object-cover grayscale brightness-50" />
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter">Prepare seu filho para o topo.</h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Não perca a chance de transformar o futuro do seu pequeno atleta com a melhor estrutura de treinamento.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xl transition-all flex items-center gap-4 mx-auto shadow-[0_0_40px_rgba(34,197,94,0.3)]"
          >
            <MessageCircle className="w-8 h-8" /> Chamar no WhatsApp
          </motion.button>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="py-16 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="Cruzeirinho Logo" className="w-12 h-12" />
                <div className="flex flex-col text-left">
                  <span className="text-xl font-black italic uppercase tracking-tighter leading-none">Cruzeirinho</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Futebol Clube</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mt-4">
                Formando atletas e cidadãos na Zona Leste desde 1969. Excelência técnica e compromisso social.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Redes Sociais</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/cruzeirinho.fc.1969/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest leading-none mb-1 group-hover:text-blue-500">Escolinha Oficial</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">@cruzeirinho.fc.1969</p>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/cruzeirinhops/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest leading-none mb-1 group-hover:text-blue-500">Projeto Social</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">@cruzeirinhops</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Localização</h4>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Custódio Lobo Nº 7<br />
                  Jardim Maringá, São Paulo - SP<br />
                  CEP: 03525-080
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest">
              © 2026 Cruzeirinho Futebol Clube. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <Mail className="w-5 h-5 text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
              <MessageCircle className="w-5 h-5 text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="Logo" className="w-10 h-10" />
                <span className="text-xl font-black italic uppercase tracking-tighter">Cruzeirinho</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/5 rounded-full">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {[
                { label: "Início", href: "#" },
                { label: "Projetos", href: "#projetos" },
                { label: "Categorias", href: "#categorias" },
                { label: "Sobre Nós", href: "#diferenciais" },
                { label: "Localização", href: "#localizacao" }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black italic uppercase tracking-tighter hover:text-blue-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full bg-blue-600 text-white p-5 rounded-2xl font-black uppercase tracking-widest text-lg"
              >
                Agendar Aula
              </button>
              <div className="flex flex-col gap-4 py-4">
                <a 
                  href="/projeto-social" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-black italic uppercase tracking-tighter text-rose-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PROJETO SOCIAL
                </a>
                <a 
                  href="/jiu-jitsu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-black italic uppercase tracking-tighter text-amber-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🥋 JIU-JITSU
                </a>
                <a 
                  href="/projeto-clube-escola" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-black italic uppercase tracking-tighter text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ⚽ PROJETO CLUBE ESCOLA
                </a>
              </div>
              <div className="flex justify-center gap-6 text-slate-500">
                <a href="https://www.instagram.com/cruzeirinho.fc.1969/" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <Mail className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D-like Modal Overlay */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-2xl bg-black/80"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 20, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -20, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl bg-slate-900/90 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5),0_0_80px_rgba(37,99,235,0.15)] flex flex-col md:flex-row h-[90vh] md:h-auto md:min-h-[80vh] perspective-1000"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] p-3 bg-black/50 md:bg-white/5 hover:bg-white/10 rounded-full text-white backdrop-blur-md transition-colors border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Sidebar: Services & Stats */}
               <div className="hidden md:flex md:w-80 bg-slate-950 p-12 flex-col justify-between text-white relative overflow-hidden border-r border-white/5">
                 <div className="absolute inset-0 opacity-20">
                   <img src={bookingBgAsset.url} className="w-full h-full object-cover grayscale brightness-50" alt="Sidebar BG" />
                 </div>
                 <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col items-center gap-4 mb-12">
                    <img src={logoAsset.url} alt="Logo" className="w-24 h-24 brightness-0 invert" />
                  </div>
                  
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-8 leading-tight text-center md:text-left">Escolha sua <br />experiência</h3>
                  
                  <div className="space-y-6">
                    {services.map((s, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <s.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-black uppercase tracking-widest leading-none mb-1">{s.title}</p>
                          <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{s.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-12">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Destaque</p>
                    <p className="text-xs font-bold leading-relaxed italic">"Formamos não apenas atletas, mas cidadãos preparados para vencer."</p>
                  </div>
                </div>
              </div>

              {/* Main Content: Categories & Form */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[80vh] md:max-h-none scrollbar-hide relative">
                {/* Background Image requested by user */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={bookingBgAsset.url} 
                    className="w-full h-full object-cover opacity-40 grayscale-0 brightness-75"
                    alt="Background"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-black/90" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col min-h-full">
                {!selectedCategory ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="mb-10 text-center md:text-left">
                      <img src={logoAsset.url} alt="Logo" className="w-16 h-16 mx-auto md:mx-0 mb-4 md:hidden" />
                      <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-2">Selecione a Categoria</h2>
                      <p className="text-slate-400 font-medium text-sm md:text-base">Escolha abaixo para iniciar seu agendamento.</p>
                    </div>

                    <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setValue("category", cat.id);
                          }}
                          className="group relative bg-white/5 hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/50 p-6 rounded-2xl text-left transition-all duration-300 min-w-[260px] md:min-w-0 snap-center"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-black italic uppercase tracking-tighter group-hover:text-blue-500">{cat.title}</span>
                            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">{cat.age}</p>
                          <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-2">{cat.desc}</p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <div>
                        <button 
                          onClick={() => setSelectedCategory(null)}
                          className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
                        >
                          ← Voltar
                        </button>
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter">Finalizar Agendamento</h2>
                      </div>
                      <div className="px-4 py-2 bg-blue-600/10 rounded-xl border border-blue-500/20">
                        <span className="text-blue-500 font-black italic uppercase tracking-tighter">
                          {categories.find(c => c.id === selectedCategory)?.title}
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Nome do Atleta</label>
                          <input {...register("name")} placeholder="João Silva" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Idade</label>
                          <input {...register("age")} placeholder="10 anos" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all text-sm" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">WhatsApp Responsável</label>
                        <input {...register("whatsapp")} placeholder="(00) 00000-0000" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all text-sm" />
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-blue-600/20"
                      >
                        Confirmar Aula Grátis
                      </motion.button>
                    </form>
                  </motion.div>
                )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-2xl bg-black/80"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 20, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -20, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl bg-slate-950 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col h-[90vh] md:h-[85vh] perspective-1000"
            >
              <button 
                onClick={() => setIsMapOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 bg-black/50 md:bg-white/5 hover:bg-white/10 rounded-full text-white backdrop-blur-md transition-colors border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex-1 w-full h-full p-6 md:p-12 flex flex-col overflow-y-auto scrollbar-hide">
                <div className="mb-6 md:mb-10 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">Nosso CT</h2>
                  <p className="text-slate-400 font-medium flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Custódio Lobo Nº 7 - Jardim Maringá, São Paulo - SP
                  </p>
                </div>
 
                <div className="flex-1 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner min-h-[300px] md:min-h-[450px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4260211142514!2d-46.5186043!3d-23.5531238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e71415f36e3%3A0xe54d68e6587c4f4a!2zUi4gQ3VzdMOzZGlvIExvYm8sIDcgLSBKYXJkaW0gTWFyaW5nw6EsIF8_byBQYXVsbyAtIFNQLCAwMzUyNS0wODA!5e0!3m2!1spt-BR!2sbr!4v1713456789012!5m2!1spt-BR!2sbr" 
                    className="w-full h-full border-0 grayscale invert brightness-90 contrast-125"
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                <div className="mt-8 flex justify-center">
                   <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua+Custodio+Lobo+7+Jardim+Maringa+Sao+Paulo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3"
                  >
                    Como Chegar <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
