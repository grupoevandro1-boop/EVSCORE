import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    status: 'ok',
    uptime: Date.now(),
    name: 'EVSCORE API',
    version: '1.0.0',
  });
}
