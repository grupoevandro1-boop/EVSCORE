import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-50">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-300">
          <ArrowLeft className="h-4 w-4" /> Voltar ao início
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-emerald-300">EVSCORE</div>
            <div className="text-lg font-black">Entrar</div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">E-mail</label>
            <input type="email" placeholder="seu@email.com" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Senha</label>
            <input type="password" placeholder="••••••••" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-slate-950" /> Manter conectado
            </label>
            <Link href="/signup" className="text-emerald-300">Criar conta</Link>
          </div>
          <button type="submit" className="w-full rounded-2xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-emerald-400">
            Entrar
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          <div className="h-px flex-1 bg-white/10" />
          <span>Seguro</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">
          <ShieldCheck className="h-4 w-4" />
          Dados protegidos e autenticação segura
        </div>
      </div>
    </main>
  );
}
