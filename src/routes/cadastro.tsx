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
      const { data: photoData, error: photoError } = await supabase.storage
        .from('student-photos')
        .upload(photoName, photo);
      
      if (photoError) throw photoError;

      // 2. Upload Signature (base64 to Blob)
      const sigBlob = await (await fetch(signature)).blob();
      const sigName = `${Math.random().toString(36).substring(2)}-${Date.now()}.png`;
      const { data: sigData, error: sigError } = await supabase.storage
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

      // 4. WhatsApp Message Logic (Mock for now, implementation details in instructions)
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
        <p className="text-slate-400 mb-12">Preencha os dados abaixo para realizar o cadastro do aluno no Cruzeirinho.</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase text-blue-500 italic">Dados do Aluno</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <input {...register("name")} placeholder="Nome completo do aluno" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all" />
              <input type="date" {...register("birth_date")} className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all" />
            </div>
            <ImageUpload label="Foto 3x4 do aluno" onUpload={setPhoto} />
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase text-blue-500 italic">Dados do Responsável</h3>
            <input {...register("parent_name")} placeholder="Nome completo do responsável" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all" />
            <div className="grid md:grid-cols-2 gap-6">
              <input {...register("phone")} placeholder="WhatsApp (00) 00000-0000" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all" />
              <input {...register("email")} placeholder="E-mail" className="w-full p-4 rounded-xl border border-white/10 bg-white/5 focus:border-blue-600 outline-none transition-all" />
            </div>
          </div>

          <DigitalSignature onSave={setSignature} />

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-6 rounded-2xl font-black uppercase tracking-widest text-lg transition shadow-2xl"
          >
            {loading ? "Processando..." : "Finalizar Cadastro"}
          </button>
        </form>
      </div>
    </div>
  );
}
