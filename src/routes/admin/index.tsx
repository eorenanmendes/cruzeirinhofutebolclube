import React, { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { 
  Users, 
  Search, 
  Filter, 
  Settings, 
  LogOut, 
  LayoutDashboard,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  Printer,
  Download,
  Trash2,
  Eye,
  Camera
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useSignedUrl } from "@/lib/signed-url";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function StudentAvatar({ path, name }: { path?: string | null; name: string }) {
  const url = useSignedUrl("student-photos", path);
  if (!url) return <Users className="w-5 h-5 text-slate-600" />;
  return <img src={url} alt={name} className="w-full h-full object-cover" />;
}

function AdminDashboard() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, active: 0 });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const selectedPhotoUrl = useSignedUrl("student-photos", selectedStudent?.photo_url);
  const selectedSignatureUrl = useSignedUrl("signatures", selectedStudent?.signature_url);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate({ to: "/" });
      } else {
        fetchData();
      }
      setLoading(false);
    });
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Erro ao carregar dados.");
      return;
    }

    setStudents(data);
    setStats({
      total: data.length,
      pending: data.filter(s => s.status === 'pending').length,
      active: data.filter(s => s.status === 'active').length,
    });
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("students")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      toast.error("Erro ao atualizar status.");
    } else {
      toast.success("Status atualizado!");
      fetchData();
      if (selectedStudent?.id === id) {
        setSelectedStudent({ ...selectedStudent, status: newStatus });
      }
    }
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.protocol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Carregando...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Toaster />
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl flex flex-col p-6 hidden md:flex">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-xl font-black italic">C</div>
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-tighter">Admin</span>
            <span className="text-[10px] font-bold uppercase text-slate-500">Cruzeirinho FC</span>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 p-4 rounded-xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs transition-all">
            <LayoutDashboard className="w-4 h-4" /> Painel
          </button>
          <button className="flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-white font-black uppercase tracking-widest text-xs transition-all">
            <Users className="w-4 h-4" /> Alunos
          </button>
          <button className="flex items-center gap-3 p-4 rounded-xl text-slate-500 hover:text-white font-black uppercase tracking-widest text-xs transition-all">
            <Settings className="w-4 h-4" /> Configurações
          </button>
        </nav>

        <button 
          onClick={() => supabase.auth.signOut().then(() => navigate({ to: "/" }))}
          className="mt-auto flex items-center gap-3 p-4 rounded-xl text-rose-500 hover:bg-rose-500/10 font-black uppercase tracking-widest text-xs transition-all"
        >
          <LogOut className="w-4 h-4" /> Sair
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-black italic uppercase tracking-tighter">Secretaria Cruzeirinho</h1>
              <p className="text-slate-500 text-sm mt-1">Gestão de alunos e cadastros.</p>
            </div>
            <a 
              href="/cadastro" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> Novo Cadastro
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl">
              <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">Total</span>
              <span className="text-2xl font-black italic text-white">{stats.total}</span>
            </div>
            <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl">
              <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">Pendentes</span>
              <span className="text-2xl font-black italic text-amber-500">{stats.pending}</span>
            </div>
            <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl">
              <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">Ativos</span>
              <span className="text-2xl font-black italic text-blue-500">{stats.active}</span>
            </div>
          </div>
        </header>

        {/* List Section */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] overflow-hidden">
          <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nome ou protocolo..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-black border border-white/5 outline-none focus:border-blue-600 transition-all text-sm" 
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800 text-white font-black uppercase tracking-widest text-[10px]">
              <Filter className="w-4 h-4" /> Filtros
            </button>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Aluno</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Protocolo</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Modalidade</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Status</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredStudents.map((s) => (
                <tr key={s.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden border border-white/10">
                        <StudentAvatar path={s.photo_url} name={s.name} />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-tighter">{s.name}</p>
                        <p className="text-[10px] text-slate-500">{new Date(s.created_at).toLocaleDateString('pt-BR')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-sm font-mono text-slate-400">{s.protocol}</td>
                  <td className="p-6">
                    <span className="text-[10px] font-black uppercase px-3 py-1 bg-slate-800 rounded-full">{s.modality}</span>
                  </td>
                  <td className="p-6">
                    <span className={`text-[10px] font-black uppercase flex items-center gap-2 ${
                      s.status === 'active' ? 'text-emerald-500' : 
                      s.status === 'pending' ? 'text-amber-500' : 'text-slate-500'
                    }`}>
                      {s.status === 'active' ? <CheckCircle2 className="w-3 h-3" /> : 
                       s.status === 'pending' ? <Clock className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {s.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <button 
                      onClick={() => setSelectedStudent(s)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-blue-600 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] border border-white/10 shadow-2xl relative">
            <button 
              onClick={() => setSelectedStudent(null)}
              className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <XCircle className="w-6 h-6" />
            </button>
            
            <div className="p-12">
              <div className="flex flex-col md:flex-row gap-12 mb-12">
                <div className="w-48 h-64 bg-slate-800 rounded-[2rem] overflow-hidden border border-white/10 shrink-0">
                  {selectedStudent.photo_url ? (
                    <img 
                      src={selectedPhotoUrl ?? undefined} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  ) : <div className="w-full h-full flex items-center justify-center"><Camera className="w-12 h-12 text-slate-700" /></div>}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black uppercase px-4 py-1.5 bg-blue-600 rounded-full">{selectedStudent.protocol}</span>
                    <span className={`text-[10px] font-black uppercase px-4 py-1.5 rounded-full ${
                      selectedStudent.status === 'active' ? 'bg-emerald-600/20 text-emerald-500' : 'bg-amber-600/20 text-amber-500'
                    }`}>{selectedStudent.status}</span>
                  </div>
                  <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-2">{selectedStudent.name}</h2>
                  <p className="text-xl text-slate-500 font-light mb-8 italic">Data de Nasc: {selectedStudent.birth_date}</p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-1">Modalidade</p>
                      <p className="text-lg font-black italic uppercase">{selectedStudent.modality}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-1">Categoria</p>
                      <p className="text-lg font-black italic uppercase">{selectedStudent.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
                <div className="space-y-8">
                  <section>
                    <h4 className="text-[10px] font-black uppercase text-blue-500 italic mb-4">Dados do Responsável</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-500">Nome</p>
                        <p className="text-sm font-black uppercase">{selectedStudent.parent_name}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-black uppercase text-slate-500">WhatsApp</p>
                          <p className="text-sm font-black uppercase">{selectedStudent.phone}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase text-slate-500">E-mail</p>
                          <p className="text-sm font-black uppercase truncate">{selectedStudent.email}</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h4 className="text-[10px] font-black uppercase text-blue-500 italic mb-4">Endereço</h4>
                    <p className="text-sm font-black uppercase leading-relaxed text-slate-400">{selectedStudent.address}</p>
                  </section>
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-[10px] font-black uppercase text-blue-500 italic mb-4">Assinatura</h4>
                    <div className="bg-white rounded-2xl p-6 h-40 flex items-center justify-center overflow-hidden border-4 border-slate-800">
                      {selectedStudent.signature_url ? (
                        <img 
                          src={selectedSignatureUrl ?? undefined} 
                          className="max-h-full"
                          alt="Signature"
                        />
                      ) : <p className="text-slate-400 text-xs italic">Sem assinatura</p>}
                    </div>
                  </section>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => handleStatusChange(selectedStudent.id, 'active')}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Aprovar
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2"
                    >
                      <Printer className="w-4 h-4" /> Imprimir
                    </button>
                    <a 
                      href={selectedPhotoUrl ?? '#'}
                      download={`foto-${selectedStudent.name}.jpg`}
                      target="_blank"
                      className="flex-1 bg-blue-600/20 hover:bg-blue-600 text-blue-500 hover:text-white p-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" /> Baixar Foto
                    </a>
                    <button 
                      onClick={async () => {
                        if (confirm('Deseja realmente excluir este aluno?')) {
                          const { error } = await supabase.from('students').delete().eq('id', selectedStudent.id);
                          if (error) toast.error('Erro ao excluir');
                          else {
                            toast.success('Aluno removido');
                            setSelectedStudent(null);
                            fetchData();
                          }
                        }
                      }}
                      className="flex-1 bg-rose-600/20 hover:bg-rose-600 text-rose-500 hover:text-white p-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" /> Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
