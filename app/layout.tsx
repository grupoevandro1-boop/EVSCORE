import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EVSCORE | Prognósticos de Futebol',
  description: 'Dashboard completo de palpites, estatísticas e previsões para futebol.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
