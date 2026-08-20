import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Lock, ArrowRight, User, Key } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast, Toaster } from 'sonner';

export const Route = createFileRoute('/auth')({
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.includes('@') ? email : `${email}@cruzeirinho.com.br`,
        password: password,
      });

      if (error) throw error;

      toast.success('Login realizado com sucesso!');
      navigate({ to: '/admin' });
    } catch (error: any) {
      toast.error(error.message || 'Erro ao realizar login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 selection:bg-blue-600/30">
      <Toaster />
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-600/20 rotate-3">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Área Restrita</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Acesso Administrativo Cruzeirinho FC</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Login / Usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-5 pl-12 pr-6 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-black uppercase tracking-tighter text-sm"
              />
            </div>

            <div className="relative group">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-5 pl-12 pr-6 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-black uppercase tracking-tighter text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            {loading ? 'Autenticando...' : (
              <>
                Entrar no Painel <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <a href="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-blue-500 transition-colors">
            Voltar para o site principal
          </a>
        </div>
      </div>
    </div>
  );
}
