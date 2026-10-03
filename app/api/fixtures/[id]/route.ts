import { NextResponse } from 'next/server';
import { getFixtureById, getFixtures } from '@/lib/data';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const fixture = getFixtureById(id);

  if (!fixture) {
    return NextResponse.json({ success: false, message: 'Partida não encontrada.' }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    fixture,
  });
}

export async function GET_ALL() {
  return NextResponse.json({ success: true, fixtures: getFixtures() });
}
