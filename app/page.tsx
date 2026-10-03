import Link from 'next/link';
import { ArrowRight, BarChart3, CalendarDays, Flame, ShieldCheck, Star, TrendingUp, Trophy, Users } from 'lucide-react';
import { getFixtures } from '@/lib/data';

export default function HomePage() {
  const fixtures = getFixtures();
  const featured = fixtures.slice(0, 3);
  const stats = [
    { label: 'Acurácia geral', value: '68.4%', icon: TrendingUp },
    { label: 'Palpites em 30d', value: '142', icon: CalendarDays },
    { label: 'Stake médio', value: '4.8%', icon: BarChart3 },
    { label: 'Seguidores', value: '24.8k', icon: Users },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">EVSCORE</p>
            <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Prognósticos inteligentes para o futebol</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-300">
              Entrar
            </Link>
            <Link href="/signup" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-soft transition hover:bg-emerald-400">
              Criar conta
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-950 p-7 shadow-soft">
            <div className="mb-6 flex items-center gap-2 text-emerald-300">
              <Flame className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Hoje em destaque</span>
            </div>
            <h2 className="max-w-xl text-4xl font-black leading-tight">
              Palpites com rigor, análise e alta probabilidade.
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-300">
              Dashboard completo com odds, tendências, históricos e previsões para partidas de alto valor em ligas europeias e nacionais.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
                Ver palpites <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dashboard" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                Explorar ligas
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Odds médias', value: '2.34' },
                { label: 'Jogos com valor', value: '18' },
                { label: 'Aposta de hoje', value: '+12.7%' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                  <div className="mt-2 text-2xl font-black text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Resumo da semana</h3>
              <Star className="h-5 w-5 text-amber-400" />
            </div>
            <div className="space-y-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{label}</div>
                      <div className="text-xl font-black text-white">{value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-black">Jogos em destaque</h3>
            <Link href="/dashboard" className="text-sm font-semibold text-emerald-300">Ver todos</Link>
          </div>
          <div className="grid gap-4 xl:grid-cols-3">
            {featured.map((fixture) => (
              <article key={fixture.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-soft">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>{fixture.league}</span>
                  <span>{fixture.date}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-lg font-black text-white">{fixture.home.short}</div>
                    <span className="mt-2 text-sm font-semibold">{fixture.home.name}</span>
                  </div>
                  <div className="text-center text-2xl font-black text-emerald-300">{fixture.homeScore} : {fixture.awayScore}</div>
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-lg font-black text-white">{fixture.away.short}</div>
                    <span className="mt-2 text-sm font-semibold">{fixture.away.name}</span>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Palpite</span>
                    <span className="text-sm font-bold text-emerald-300">{fixture.tip}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Probabilidade</span>
                    <span className="font-black text-white">{fixture.probability}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-black">Calendário de partidas</h3>
              <button className="rounded-full border border-white/10 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300">Hoje</button>
            </div>
            <div className="space-y-3">
              {fixtures.map((fixture) => (
                <div key={fixture.id} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sm font-black text-emerald-300">
                      {fixture.home.short}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{fixture.home.name}</div>
                      <div className="text-xs text-slate-400">vs {fixture.away.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">{fixture.date}</div>
                    <div className="text-sm font-bold text-emerald-300">{fixture.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-black">Status do sistema</h3>
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="space-y-4">
              {[
                { label: 'Banco de dados', value: 'Operando', tone: 'text-emerald-300' },
                { label: 'API de ligas', value: 'Sincronizada', tone: 'text-emerald-300' },
                { label: 'Modelos de previsão', value: 'Ativos', tone: 'text-emerald-300' },
                { label: 'Risco de apostas', value: 'Baixo', tone: 'text-amber-300' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.02] p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item.label}</span>
                    <span className={`font-black ${item.tone}`}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <Trophy className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Top form</span>
              </div>
              <div className="mt-3 space-y-2 text-sm text-slate-200">
                <div className="flex justify-between"><span>Real Madrid</span><span className="font-bold text-white">9/10</span></div>
                <div className="flex justify-between"><span>Arsenal</span><span className="font-bold text-white">8.8/10</span></div>
                <div className="flex justify-between"><span>Inter Miami</span><span className="font-bold text-white">8.5/10</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
