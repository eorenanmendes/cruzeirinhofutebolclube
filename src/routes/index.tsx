import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Trophy, Users, Calendar, MessageCircle, Mail, Menu, X, ChevronRight, Star } from "lucide-react";
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
import bookingBgAsset from "@/assets/image-6.png.asset.json";

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
            <a href="#categorias" className="text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Categorias</a>
            <a href="#equipe" className="text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Equipe</a>
            <button onClick={() => setIsBookingOpen(true)} className="text-sm font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Agendar Aula</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs transition shadow-lg shadow-blue-600/20">
              Contato
            </button>
          </div>
          
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-start justify-center p-6 md:p-24 bg-slate-950 text-white overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
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
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter text-lg transition w-full sm:w-auto text-center"
            >
              Conhecer CT
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Categorias */}
      <section id="categorias" className="py-24 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter relative">
              <span className="absolute -top-6 -left-8 text-8xl opacity-5 text-blue-500 select-none">TOPICOS</span>
              Nossas Categorias
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sub-7", age: "5 a 7 anos", desc: "Introdução lúdica e fundamentos básicos do futebol." },
              { title: "Sub-9", age: "8 a 9 anos", desc: "Início do desenvolvimento técnico e tática individual." },
              { title: "Sub-11", age: "10 a 11 anos", desc: "Aprimoramento da leitura de jogo e coordenação motora." },
              { title: "Sub-13", age: "12 a 13 anos", desc: "Consolidação dos fundamentos e inteligência tática." },
              { title: "Sub-15", age: "14 a 15 anos", desc: "Preparação competitiva e disciplina atlética profissional." },
              { title: "Sub-17", age: "16 a 17 anos", desc: "Alta performance e transição para o futebol profissional." }
            ].map((cat, i) => (
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
            <div className="text-blue-500 font-black uppercase tracking-widest mb-6">Por que escolher a Geração Craques?</div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 italic uppercase tracking-tighter leading-[0.9]">Excelência em cada<br /><span className="text-blue-500 underline decoration-blue-500/30">detalhe.</span></h2>
            <div className="space-y-8">
              {[
                { title: "Metodologia Europeia", desc: "Treinamentos baseados nos maiores clubes do mundo." },
                { title: "CT de Última Geração", desc: "Gramado sintético profissional e estrutura completa." },
                { title: "Foco no Caráter", desc: "Desenvolvemos cidadãos antes de atletas." }
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-20 blur-2xl"></div>
            <img 
              src={img2Asset.url} 
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Atleta em treinamento" 
            />
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
              { src: img2Asset.url, title: "Grandes Conquistas", desc: "Campeões com dedicação e talento." },
              { src: img3Asset.url, title: "Formação de Elite", desc: "Preparação para o topo do futebol." },
              { src: img4Asset.url, title: "Ambiente Profissional", desc: "Vestiários e estrutura de primeira linha." },
              { src: img5Asset.url, title: "Reconhecimento", desc: "Medalhas que coroam o esforço diário." },
              { src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800", title: "Paixão pelo Esporte", desc: "Onde o sonho se torna realidade." }
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

      {/* Equipe Técnica */}
      <section id="equipe" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-center italic uppercase tracking-tighter relative">
              <span className="absolute -top-6 -left-12 text-8xl opacity-5 text-blue-500 select-none">EQUIPE</span>
              Nossa Equipe Técnica
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Prof. Ricardo Silva", role: "Coordenador Técnico", desc: "Mais de 15 anos de experiência na formação de atletas de base." },
              { name: "Prof. Ana Souza", role: "Preparadora Física", desc: "Especialista em performance e prevenção de lesões em jovens." },
              { name: "Prof. Lucas Mendes", role: "Treinador de Goleiros", desc: "Metodologia moderna de treinamento específico para goleiros." }
            ].map((staff, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, borderColor: "rgba(37,99,235,1)" }}
                className="bg-slate-900/30 backdrop-blur-sm p-10 rounded-[2rem] shadow-2xl text-center border-b-4 border-white/5 transition-all group"
              >
                <div className="w-28 h-28 bg-white/5 rounded-full mx-auto mb-8 border-4 border-white/5 overflow-hidden shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-blue-500/30 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-blue-400 transition-colors">{staff.name}</h3>
                <div className="bg-blue-600/10 text-blue-400 text-xs font-black uppercase tracking-widest mt-3 py-1 px-3 rounded-full inline-block border border-blue-500/20">{staff.role}</div>
                <p className="text-slate-400 mt-6 text-sm leading-relaxed font-medium">{staff.desc}</p>
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
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
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
      <footer className="py-12 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Cruzeirinho Logo" className="w-10 h-10" />
            <div className="flex flex-col text-left">
              <span className="text-lg font-black italic uppercase tracking-tighter leading-none">Cruzeirinho</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-500">Futebol Clube</span>
            </div>
          </div>
          <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © 2026 Cruzeirinho Futebol Clube. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <Mail className="w-5 h-5 text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
            <MessageCircle className="w-5 h-5 text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

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
              className="relative w-full max-w-5xl bg-slate-900/90 border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5),0_0_80px_rgba(37,99,235,0.15)] flex flex-col md:flex-row min-h-[80vh] perspective-1000"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Sidebar: Services & Stats */}
              <div className="w-full md:w-80 bg-blue-600 p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-12">
                    <img src={logoAsset.url} alt="Logo" className="w-12 h-12 brightness-0 invert" />
                    <span className="text-xl font-black italic uppercase tracking-tighter">Booking</span>
                  </div>
                  
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-8 leading-tight">Escolha sua <br />experiência</h3>
                  
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
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">Destaque</p>
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
                    className="w-full h-full object-cover opacity-20 grayscale brightness-50"
                    alt="Background"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-900/90" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                {!selectedCategory ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="mb-10">
                      <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">Selecione a Categoria</h2>
                      <p className="text-slate-400 font-medium">O primeiro passo para o futuro começa com a escolha certa.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setValue("category", cat.id);
                          }}
                          className="group relative bg-white/5 hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/50 p-6 rounded-2xl text-left transition-all duration-300"
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
    </div>
  );
}
