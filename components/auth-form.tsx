'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (key: 'name' | 'email' | 'password', value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Erro ao enviar formulário.');
        return;
      }

      if (mode === 'signup') {
        setSuccess('Conta criada com sucesso! Redirecionando...');
      } else {
        setSuccess('Login realizado com sucesso! Redirecionando...');
      }

      localStorage.setItem('evscore_user', JSON.stringify({ email: form.email, name: form.name || 'Usuário EVSCORE' }));

      setTimeout(() => router.push('/dashboard'), 700);
    } catch (err) {
      setError('Não foi possível conectar ao servidor. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === 'signup' && (
        <div>
          <label className="mb-2 block text-sm text-slate-300">Nome</label>
          <input
            value={form.name}
            onChange={(event) => handleChange('name', event.target.value)}
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none placeholder:text-slate-500 focus:border-emerald-500"
            required
          />
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm text-slate-300">E-mail</label>
        <input
          value={form.email}
          onChange={(event) => handleChange('email', event.target.value)}
          type="email"
          placeholder="seu@email.com"
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none placeholder:text-slate-500 focus:border-emerald-500"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Senha</label>
        <input
          value={form.password}
          onChange={(event) => handleChange('password', event.target.value)}
          type="password"
          placeholder={mode === 'login' ? '••••••••' : 'Mínimo 6 caracteres'}
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base outline-none placeholder:text-slate-500 focus:border-emerald-500"
          required
          minLength={6}
        />
      </div>

      {error && <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</div>}
      {success && <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">{success}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Enviando...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
      </button>
    </form>
  );
}
