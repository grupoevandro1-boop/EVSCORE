import Link from 'next/link';
import { ArrowUpRight, Bell, CalendarRange, ChartColumn, ShieldCheck, Star, TrendingUp } from 'lucide-react';
import { getFixtures } from '@/lib/data';

export default function DashboardPage() {
  const fixtures = getFixtures();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">EVSCORE</p>
            <h1 className="mt-2 text-2xl font-black">Dashboard de palpites</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-slate-800 p-2.5 text-slate-200">
              <Bell className="h-4 w-4" />
            </button>
            <Link href="/" className="rounded-full border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-200">Início</Link>
            <Link href="/login" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-slate-950">Perfil</Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Acurácia', value: '68.4%', icon: TrendingUp },
            { label: 'Palpites hoje', value: '12', icon: CalendarRange },
            { label: 'ROI', value: '+18.7%', icon: ChartColumn },
            { label: 'Favoritos', value: '24', icon: Star },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">{label}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="text-3xl font-black text-white">{value}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-black">Jogos com maior valor</h2>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Hoje
              </span>
            </div>

            <div className="space-y-4">
              {fixtures.map((fixture) => (
                <div key={fixture.id} className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{fixture.league}</span>
                    <span>{fixture.date}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 font-black text-emerald-300">{fixture.home.short}</div>
                      <span className="font-medium">{fixture.home.name}</span>
                    </div>
                    <div className="text-xl font-black text-white">{fixture.homeScore} : {fixture.awayScore}</div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{fixture.away.name}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 font-black text-emerald-300">{fixture.away.short}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Palpite</div>
                      <div className="mt-1 text-base font-black text-white">{fixture.tip}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Prob.</div>
                      <div className="mt-1 text-base font-black text-emerald-300">{fixture.probability}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-black">Seleção atual</h3>
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Aposta ativa', value: '1X / Overs', tone: 'text-emerald-300' },
                  { label: 'Stake', value: '2.5%', tone: 'text-white' },
                  { label: 'Risco', value: 'Médio', tone: 'text-amber-300' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950 p-3">
                    <span className="text-slate-300">{item.label}</span>
                    <span className={`font-black ${item.tone}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
              <h3 className="mb-4 text-lg font-black">Resumo rápido</h3>
              <div className="space-y-3">
                {[
                  { label: 'Vitórias', value: '9' },
                  { label: 'Derrotas', value: '3' },
                  { label: 'Empates', value: '2' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950 p-3">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-black text-white">{item.value}</span>
                  </div>
                ))}
              </div>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-400">
                Exportar relatório <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
