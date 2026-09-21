import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  Dumbbell,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  Shield,
  Swords,
} from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import muayThai1 from "@/assets/muay-thai-1.jpeg.asset.json";
import muayThai2 from "@/assets/muay-thai-2.jpeg.asset.json";
import muayThai3 from "@/assets/muay-thai-3.jpeg.asset.json";

export const Route = createFileRoute("/muay-thai")({
  head: () => ({
    meta: [
      { title: "Muay Thai — Cruzeirinho Futebol Clube" },
      {
        name: "description",
        content:
          "Treinos de Muay Thai no Cruzeirinho Futebol Clube com foco em técnica, disciplina e condicionamento.",
      },
      { property: "og:title", content: "Muay Thai — Cruzeirinho Futebol Clube" },
      {
        property: "og:description",
        content:
          "Conheça o Muay Thai do Cruzeirinho e agende uma aula experimental.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MuayThai,
});

const benefits = [
  {
    title: "Técnica",
    description: "Fundamentos de golpes, defesa e movimentação desenvolvidos passo a passo.",
    icon: Swords,
  },
  {
    title: "Disciplina",
    description: "Foco, respeito e autocontrole presentes em cada etapa do treinamento.",
    icon: Shield,
  },
  {
    title: "Condicionamento",
    description: "Treinos completos para trabalhar força, resistência, agilidade e coordenação.",
    icon: HeartPulse,
  },
  {
    title: "Evolução",
    description: "Acompanhamento contínuo para alunos iniciantes e praticantes experientes.",
    icon: Dumbbell,
  },
];

const galleryPhotos = [
  { url: muayThai1.url, alt: "Treino físico da turma de Muay Thai no Cruzeirinho" },
  { url: muayThai2.url, alt: "Atletas de Muay Thai em aula no Cruzeirinho" },
  { url: muayThai3.url, alt: "Turma de Muay Thai do Cruzeirinho reunida após treino" },
];

function MuayThai() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white selection:bg-blue-600/30">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Cruzeirinho Futebol Clube"
              className="h-11 w-11 object-contain md:h-14 md:w-14"
            />
            <div className="flex flex-col">
              <span className="text-base font-black uppercase italic leading-none md:text-lg">
                Cruzeirinho
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
                Muay Thai
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#sobre" className="text-[10px] font-black uppercase tracking-widest transition-colors hover:text-blue-500">Sobre</a>
            <a href="#beneficios" className="text-[10px] font-black uppercase tracking-widest transition-colors hover:text-blue-500">Benefícios</a>
            <a href="#galeria" className="text-[10px] font-black uppercase tracking-widest transition-colors hover:text-blue-500">Galeria</a>
          </div>

          <Link
            to="/"
            aria-label="Voltar ao Cruzeirinho"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white/60 transition-colors hover:border-blue-500/50 hover:text-blue-500 md:px-4"
          >
            <ChevronLeft className="h-3 w-3" />
            <span className="hidden sm:inline">Voltar ao Cruzeirinho</span>
            <span className="sm:hidden">Voltar</span>
          </Link>
        </div>
      </nav>

      <main>
        <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-20 pt-32">
          <div className="absolute inset-0">
            <img
              src={muayThai1.url}
              alt="Treino de Muay Thai no Cruzeirinho"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(37,99,235,0.22),transparent_36%)]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-neutral-950 to-transparent" />
          <div className="absolute right-[-5%] top-1/3 select-none text-[7rem] font-black uppercase text-blue-500/5 md:text-[15rem]">
            LUTA
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="mb-8 inline-block rounded-full border border-blue-600/30 bg-blue-600/20 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
                A arte das oito armas
              </span>
              <h1 className="mb-8 text-6xl font-black uppercase italic leading-[0.88] md:text-9xl">
                Força &amp; <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                  Disciplina.
                </span>
              </h1>
              <p className="mb-12 max-w-2xl text-base font-medium uppercase leading-relaxed text-neutral-400 md:text-xl">
                Treine corpo e mente com técnica, respeito e intensidade no Muay Thai do Cruzeirinho.
              </p>
              <a
                href="https://wa.me/5511993436066"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-5 text-sm font-black uppercase tracking-widest transition-colors hover:bg-blue-700 md:px-12 md:py-6"
              >
                Agendar Aula Experimental
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="px-6 py-28 md:py-32">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <Swords className="mb-10 h-16 w-16 text-blue-500" />
            <h2 className="mb-10 text-4xl font-black uppercase italic leading-tight md:text-7xl">
              Respeito na luta, <br /> evolução na vida.
            </h2>
            <p className="max-w-3xl text-lg font-medium uppercase leading-relaxed text-neutral-500 md:text-xl">
              Um treinamento para diferentes níveis, com fundamentos técnicos, preparo físico e valores que acompanham o aluno dentro e fora da academia.
            </p>
          </div>
        </section>

        <section id="beneficios" className="bg-neutral-900/50 px-6 py-28 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/5 bg-neutral-950 p-8 transition-colors hover:border-blue-500/50 md:p-10"
              >
                <item.icon className="mb-6 h-10 w-10 text-blue-500" />
                <h3 className="mb-4 text-xl font-black uppercase italic">{item.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-neutral-500">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="galeria" className="overflow-hidden bg-neutral-900/30 px-6 py-28 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center md:mb-20">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">Em breve</span>
              <h2 className="mt-4 text-5xl font-black uppercase italic md:text-8xl">Nossa Galeria</h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm font-bold uppercase tracking-widest text-neutral-500">
                Este espaço está preparado para receber as fotos oficiais dos treinos.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
              {galleryPhotos.map((photo, i) => (
                <motion.div
                  key={photo.url}
                  whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-blue-500/25 bg-neutral-900"
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-5 right-6 text-5xl font-black text-white/20">
                    0{i + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-32 text-center md:py-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_52%)]" />
          <div className="relative z-10">
            <h2 className="mb-10 text-5xl font-black uppercase italic leading-none md:text-9xl">
              Entre para <br /> o time.
            </h2>
            <a
              href="https://wa.me/5511993436066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-6 text-sm font-black uppercase tracking-widest transition-colors hover:bg-blue-700 md:px-16 md:py-8 md:text-lg"
            >
              Agendar Aula Agora
            </a>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-8 border-t border-white/5 bg-black px-6 py-20">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Cruzeirinho Futebol Clube" className="h-8 w-8" />
          <span className="text-lg font-black uppercase italic">Cruzeirinho Muay Thai</span>
        </div>
        <div className="flex gap-10 text-neutral-500">
          <a href="https://wa.me/5511993436066" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5 transition-colors hover:text-blue-500" />
          </a>
          <Mail className="h-5 w-5" />
          <MapPin className="h-5 w-5" />
        </div>
        <p className="text-center text-[10px] font-black uppercase tracking-widest text-neutral-700">
          © 2026 Cruzeirinho Futebol Clube. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}