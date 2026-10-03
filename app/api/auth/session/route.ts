import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    authenticated: true,
    user: {
      name: 'Usuário EVSCORE',
      email: 'usuario@evscore.app',
      plan: 'Premium',
    },
  });
}
