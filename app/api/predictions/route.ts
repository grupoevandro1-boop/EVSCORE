import { NextResponse } from 'next/server';

const predictionList = [
  {
    id: 101,
    fixture: 'Arsenal vs Manchester City',
    prediction: '1X / Overs',
    confidence: '68%',
    stake: '2.5%',
    status: 'Ativa',
  },
  {
    id: 102,
    fixture: 'Real Madrid vs Barcelona',
    prediction: 'X2 / Empate',
    confidence: '54%',
    stake: '1.8%',
    status: 'Analisando',
  },
  {
    id: 103,
    fixture: 'Palmeiras vs Flamengo',
    prediction: '1 / HT-FT',
    confidence: '71%',
    stake: '3.0%',
    status: 'Ativa',
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    predictions: predictionList,
  });
}
