import { NextResponse } from 'next/server';
import { getFixtures } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    success: true,
    fixtures: getFixtures(),
    generatedAt: new Date().toISOString(),
  });
}
