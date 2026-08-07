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
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{cat.age}</p>
                <p className="text-slate-600 leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Técnica */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nossa Equipe Técnica</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Prof. Ricardo Silva", role: "Coordenador Técnico", desc: "Mais de 15 anos de experiência na formação de atletas de base." },
              { name: "Prof. Ana Souza", role: "Preparadora Física", desc: "Especialista em performance e prevenção de lesões em jovens." },
              { name: "Prof. Lucas Mendes", role: "Treinador de Goleiros", desc: "Metodologia moderna de treinamento específico para goleiros." }
            ].map((staff, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold">{staff.name}</h3>
                <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mt-1">{staff.role}</p>
                <p className="text-slate-600 mt-4 text-sm">{staff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Venha Treinar com a gente!</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">Agende uma aula experimental para seu filho e conheça de perto nossa estrutura e metodologia de ensino.</p>
        <button className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-5 rounded-full font-bold text-lg transition">Agendar Aula</button>
      </section>

      {/* Informações */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: MapPin, val: "CT Geração Craques", label: "São Paulo / SP" },
            { icon: Trophy, val: "3x", label: "Campeão Estadual" },
            { icon: Users, val: "+500", label: "Alunos Ativos" }
          ].map((item, i) => (
            <div key={i}>
              <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-6" />
              <div className="text-5xl font-bold text-slate-900 mb-2">{item.val}</div>
              <div className="text-slate-500 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulário */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-4xl font-bold mb-10 text-center">Agende uma Aula</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input {...register("name")} placeholder="Nome da Criança" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
              <input {...register("age")} placeholder="Idade" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <input {...register("parent")} placeholder="Nome do Responsável" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
            <input {...register("whatsapp")} placeholder="WhatsApp" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
            <select {...register("category")} className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="">Categoria Desejada</option>
              <option value="sub7">Sub-7</option>
              <option value="sub9">Sub-9</option>
            </select>
            <textarea {...register("notes")} placeholder="Observações" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none h-32" />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full font-bold text-lg transition">Agendar Aula</button>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-5xl font-bold mb-6">Seu próximo craque pode começar aqui.</h2>
        <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto">Faça parte da nossa escolinha e dê o próximo passo na formação do seu atleta.</p>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-full font-bold text-lg transition flex items-center gap-2 mx-auto">
          <MessageCircle className="w-5 h-5" /> Falar pelo WhatsApp
        </button>
      </section>
    </div>
  );
}
