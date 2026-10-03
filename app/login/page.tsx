import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    stats: [
      { label: 'Acurácia geral', value: '68.4%' },
      { label: 'Palpites em 30d', value: '142' },
      { label: 'Stake médio', value: '4.8%' },
      { label: 'Seguidores', value: '24.8k' },
    ],
  });
}
