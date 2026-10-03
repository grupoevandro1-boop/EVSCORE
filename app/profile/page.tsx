'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('evscore_user');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-50">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">EVSCORE</p>
            <h1 className="mt-2 text-3xl font-black">Perfil do usuário</h1>
          </div>
          <Link href="/dashboard" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-slate-950">
            Dashboard
          </Link>
        </div>

        {user ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Nome</div>
              <div className="mt-2 text-xl font-black text-white">{user.name}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">E-mail</div>
              <div className="mt-2 text-xl font-black text-white">{user.email}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Plano</div>
              <div className="mt-2 text-xl font-black text-emerald-300">Premium</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Status</div>
              <div className="mt-2 text-xl font-black text-white">Ativo</div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
            Nenhum usuário autenticado foi encontrado no momento.
          </div>
        )}
      </div>
    </main>
  );
}
