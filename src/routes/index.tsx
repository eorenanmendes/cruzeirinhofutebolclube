import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Trophy, Users, Calendar, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Soccer Field"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="text-blue-400 font-bold uppercase tracking-widest mb-4 block">Formando atletas dentro e fora de campo</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Onde nascem os<br />futuros craques.</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Metodologia exclusiva de ensino focada no desenvolvimento técnico e humano para jovens atletas.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition">Agendar Aula</button>
            <button className="bg-white hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold transition">Visitar</button>
          </div>
        </motion.div>
      </section>

      {/* Categorias */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nossas Categorias</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sub-7", age: "5 a 7 anos", desc: "Introdução lúdica e fundamentos básicos." },
              { title: "Sub-9", age: "8 a 9 anos", desc: "Início do desenvolvimento técnico e tático." },
              { title: "Sub-11", age: "10 a 11 anos", desc: "Aprimoramento da leitura de jogo e coordenação." },
              { title: "Sub-13", age: "12 a 13 anos", desc: "Consolidação dos fundamentos e inteligência tática." },
              { title: "Sub-15", age: "14 a 15 anos", desc: "Preparação competitiva e disciplina atlética." },
              { title: "Sub-17", age: "16 a 17 anos", desc: "Alta performance e transição para o futebol profissional." }
            ].map((cat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{cat.age}</p>
                <p className="text-slate-600">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Venha Treinar<br />com a gente!</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">Agende uma aula experimental para seu filho e conheça de perto nossa estrutura e metodologia de ensino.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition">Agendar Aula</button>
      </section>
    </div>
  );
}
