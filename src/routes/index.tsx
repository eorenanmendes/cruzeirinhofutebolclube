import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Trophy, Users, Calendar, MessageCircle, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "sonner";

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
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = () => {
    toast.success("Solicitação recebida! Entraremos em contato em breve.");
    reset();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Toaster />
      
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-6 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Soccer Field"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 font-bold uppercase tracking-widest text-sm mb-6 rounded-full border border-blue-500/30 backdrop-blur-sm"
          >
            Matrículas Abertas
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight tracking-tighter italic uppercase">
            Onde nascem os<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 animate-pulse">
              futuros craques.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Metodologia exclusiva de ensino focada no desenvolvimento técnico e humano para jovens atletas de alto rendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter text-lg transition shadow-xl"
            >
              Agendar Aula Experimental
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter text-lg transition"
            >
              Conhecer CT
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Categorias */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nossas Categorias</h2>
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
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{cat.age}</p>
                <p className="text-slate-600 leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Diferenciais Section (Adicionada para alinhar com o nível visual da referência) */}
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
              src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Atleta em treinamento" 
            />
          </motion.div>
        </div>
      </section>

      {/* Equipe Técnica */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 italic uppercase tracking-tighter">Nossa Equipe Técnica</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Prof. Ricardo Silva", role: "Coordenador Técnico", desc: "Mais de 15 anos de experiência na formação de atletas de base." },
              { name: "Prof. Ana Souza", role: "Preparadora Física", desc: "Especialista em performance e prevenção de lesões em jovens." },
              { name: "Prof. Lucas Mendes", role: "Treinador de Goleiros", desc: "Metodologia moderna de treinamento específico para goleiros." }
            ].map((staff, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl text-center border-b-4 border-blue-600 transition-all"
              >
                <div className="w-28 h-28 bg-slate-100 rounded-full mx-auto mb-8 border-4 border-slate-50 overflow-hidden shadow-inner flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600/30" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter">{staff.name}</h3>
                <div className="bg-blue-600/10 text-blue-600 text-xs font-black uppercase tracking-widest mt-3 py-1 px-3 rounded-full inline-block">{staff.role}</div>
                <p className="text-slate-500 mt-6 text-sm leading-relaxed font-medium">{staff.desc}</p>
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
          >
            Agendar Aula Agora
          </motion.button>
        </div>
      </section>

      {/* Informações */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            { icon: MapPin, val: "CT Geração Craques", label: "São Paulo / SP", color: "text-blue-600" },
            { icon: Trophy, val: "15+", label: "Títulos Conquistados", color: "text-amber-500" },
            { icon: Users, val: "1.2k", label: "Atletas Formados", color: "text-emerald-500" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm ${item.color}`}>
                <item.icon className="w-10 h-10" />
              </div>
              <div className="text-6xl font-black text-slate-950 mb-3 tracking-tighter">{item.val}</div>
              <div className="text-slate-400 font-black uppercase tracking-widest text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formulário */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-4xl font-bold mb-10 text-center">Agende uma Aula</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Nome do Atleta</label>
                <input {...register("name")} placeholder="Ex: João Silva" className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Idade</label>
                <input {...register("age")} placeholder="Ex: 10 anos" className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Nome do Responsável</label>
              <input {...register("parent")} placeholder="Ex: Maria Souza" className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">WhatsApp de Contato</label>
              <input {...register("whatsapp")} placeholder="(00) 00000-0000" className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Selecione a Categoria</label>
              <select {...register("category")} className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg bg-white appearance-none">
                <option value="">Escolher categoria...</option>
                <option value="sub7">Sub-7 (5 a 7 anos)</option>
                <option value="sub9">Sub-9 (8 a 9 anos)</option>
                <option value="sub11">Sub-11 (10 a 11 anos)</option>
                <option value="sub13">Sub-13 (12 a 13 anos)</option>
                <option value="sub15">Sub-15 (14 a 15 anos)</option>
                <option value="sub17">Sub-17 (16 a 17 anos)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Observações Adicionais</label>
              <textarea {...register("notes")} placeholder="Conte-nos um pouco sobre a experiência do atleta..." className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 focus:ring-0 outline-none transition-all font-medium text-lg h-32" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-slate-900 hover:bg-black text-white p-6 rounded-2xl font-black uppercase tracking-widest text-xl transition-all shadow-2xl"
            >
              Confirmar Solicitação
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
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xl transition-all flex items-center gap-4 mx-auto shadow-[0_0_40px_rgba(34,197,94,0.3)]"
          >
            <MessageCircle className="w-8 h-8" /> Falar com Consultor no WhatsApp
          </motion.button>
          <div className="mt-12 text-slate-500 font-black uppercase tracking-widest text-xs">
            © 2026 GERAÇÃO CRAQUES • TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </section>
    </div>
  );
}
