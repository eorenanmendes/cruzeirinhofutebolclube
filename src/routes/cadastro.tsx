import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { DigitalSignature } from "@/components/DigitalSignature";
import { ImageUpload } from "@/components/ImageUpload";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().min(2),
  birth_date: z.string().min(1),
  cpf: z.string().optional(),
  rg: z.string().optional(),
  parent_name: z.string().min(2),
  parent_cpf: z.string().min(2),
  parent_rg: z.string().optional(),
  phone: z.string().min(10),
  email: z.string().email(),
  address: z.string().min(5),
  modality: z.string().min(1),
  category: z.string().min(1),
  notes: z.string().optional(),
});

export const Route = createFileRoute("/cadastro")({
  component: Cadastro,
});

function Cadastro() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema)
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    if (!signature) {
      toast.error("Por favor, realize a assinatura digital.");
      return;
    }
    if (!photo) {
      toast.error("Por favor, envie a foto 3x4 do aluno.");
      return;
    }
    setLoading(true);

    try {
      // 1. Upload Photo
      const photoExt = photo.name.split('.').pop();
      const photoName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${photoExt}`;
      const { error: photoError } = await supabase.storage
        .from('student-photos')
        .upload(photoName, photo);
      
      if (photoError) throw photoError;

      // 2. Upload Signature (base64 to Blob)
      const sigBlob = await (await fetch(signature)).blob();
      const sigName = `${Math.random().toString(36).substring(2)}-${Date.now()}.png`;
      const { error: sigError } = await supabase.storage
        .from('signatures')
        .upload(sigName, sigBlob);

      if (sigError) throw sigError;

      // 3. Create Student record
      const protocol = `CRZ-${Math.floor(100000 + Math.random() * 900000)}`;
      const { error: dbError } = await supabase
        .from('students')
        .insert({
          ...data,
          photo_url: photoName,
          signature_url: sigName,
          protocol,
          status: 'pending'
        });

      if (dbError) throw dbError;

      // 4. WhatsApp Message Logic (Mock for now, using a placeholder number)
      const waMsg = `NOVO CADASTRO DE ALUNO\nProtocolo: ${protocol}\nNome: ${data.name}\nResponsável: ${data.parent_name}`;
      window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(waMsg)}`, '_blank');

      toast.success(`Cadastro realizado com sucesso! Protocolo: ${protocol}`);
      reset();
      setPhoto(null);
      setSignature(null);
    } catch (err: any) {
      console.error(err);
      toast.error(`Erro ao cadastrar: ${err.message || 'Verifique sua conexão'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-24">
      <Toaster />
      <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">Cadastro de Aluno</h1>
        <p className="text-slate-400 mb-12">Preencha os dados abaixo para realizar o cadastro do aluno no Cruzeirinho Jd. Maringá.</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          {/* Dados do Aluno */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase text-blue-500 italic flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sm not-italic">01</span>
              Dados do Aluno
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Nome Completo</label>
                <input {...register("name")} placeholder="Nome do aluno" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Data de Nascimento</label>
                <input type="date" {...register("birth_date")} className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all text-slate-400" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">CPF (Opcional)</label>
                <input {...register("cpf")} placeholder="000.000.000-00" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">RG (Opcional)</label>
                <input {...register("rg")} placeholder="00.000.000-0" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
              </div>
            </div>
            <ImageUpload label="Foto 3x4 do aluno" onUpload={setPhoto} />
          </div>

          {/* Dados do Responsável */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase text-blue-500 italic flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sm not-italic">02</span>
              Dados do Responsável
            </h3>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Nome Completo do Responsável</label>
              <input {...register("parent_name")} placeholder="Nome completo" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">CPF</label>
                <input {...register("parent_cpf")} placeholder="000.000.000-00" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">RG</label>
                <input {...register("parent_rg")} placeholder="00.000.000-0" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">WhatsApp</label>
                <input {...register("phone")} placeholder="(00) 00000-0000" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">E-mail</label>
                <input {...register("email")} placeholder="exemplo@email.com" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Endereço Completo</label>
              <input {...register("address")} placeholder="Rua, número, bairro, cidade - UF" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" />
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase text-blue-500 italic flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sm not-italic">03</span>
              Informações Adicionais
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Modalidade / Projeto</label>
                <select {...register("modality")} className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all appearance-none text-slate-400">
                  <option value="">Selecione</option>
                  <option value="futebol">Futebol</option>
                  <option value="jiu-jitsu">Jiu-Jitsu</option>
                  <option value="capoeira">Capoeira</option>
                  <option value="projeto-social">Projeto Social</option>
                  <option value="clube-escola">Clube Escola</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Categoria / Turma</label>
                <select {...register("category")} className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all appearance-none text-slate-400">
                  <option value="">Selecione</option>
                  <option value="sub-7">Sub-7</option>
                  <option value="sub-9">Sub-9</option>
                  <option value="sub-11">Sub-11</option>
                  <option value="sub-13">Sub-13</option>
                  <option value="sub-15">Sub-15</option>
                  <option value="sub-17">Sub-17</option>
                  <option value="adulto">Adulto</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Observações</label>
              <textarea {...register("notes")} placeholder="Alguma condição médica ou observação importante?" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all min-h-[100px] placeholder:text-slate-700" />
            </div>
          </div>

          {/* Assinatura */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase text-blue-500 italic flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sm not-italic">04</span>
              Assinatura e Termos
            </h3>
            <DigitalSignature onSave={setSignature} />
            <div className="bg-blue-600/10 border border-blue-600/20 p-6 rounded-2xl space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1.5 w-4 h-4 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-blue-600 focus:ring-offset-slate-900" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                  Declaro que as informações fornecidas neste formulário são verdadeiras e autorizo o cadastro do aluno no Cruzeirinho Jd. Maringá. Li e concordo com os termos.
                </span>
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-6 rounded-2xl font-black uppercase tracking-widest text-lg transition shadow-2xl shadow-blue-600/20"
          >
            {loading ? "Processando..." : "Finalizar Cadastro"}
          </button>
        </form>
      </div>
    </div>
  );
}
