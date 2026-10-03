import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-50">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-950 p-8">
          <div className="mb-6 text-xs uppercase tracking-[0.24em] text-emerald-300">EVSCORE</div>
          <h1 className="text-3xl font-black">Crie sua conta e acompanhe palpites de alto valor.</h1>
          <div className="mt-8 space-y-4">
            {['Acesso ao painel de prognósticos', 'Favoritos por liga e time', 'Histórico de acurácia e estatísticas'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-300">
            <ArrowLeft className="h-4 w-4" /> Voltar ao início
          </Link>

          <h2 className="mb-6 text-2xl font-black">Criar conta</h2>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Nome</label>
                <input type="text" placeholder="Seu nome" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none placeholder:text-slate-500 focus:border-emerald-500" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Sobrenome</label>
                <input type="text" placeholder="Sobrenome" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none placeholder:text-slate-500 focus:border-emerald-500" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">E-mail</label>
              <input type="email" placeholder="seu@email.com" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none placeholder:text-slate-500 focus:border-emerald-500" />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Senha</label>
              <input type="password" placeholder="••••••••" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none placeholder:text-slate-500 focus:border-emerald-500" />
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              Sua conta será protegida com autenticação segura.
            </div>

            <button type="submit" className="w-full rounded-2xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-emerald-400">
              Criar conta
            </button>
          </form>

          <div className="mt-5 text-center text-sm text-slate-400">
            Já tem conta? <Link href="/login" className="font-semibold text-emerald-300">Entrar</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
