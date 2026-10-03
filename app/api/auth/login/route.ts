import { NextResponse } from 'next/server';

const demoUsers = new Map<string, { name: string; email: string; password: string }>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'E-mail e senha são obrigatórios.' }, { status: 400 });
    }

    const user = demoUsers.get(String(email).toLowerCase());

    if (!user || user.password !== String(password)) {
      return NextResponse.json({ message: 'Credenciais inválidas.' }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao processar login.' }, { status: 500 });
  }
}

export function registerDemoUser(name: string, email: string, password: string) {
  demoUsers.set(String(email).toLowerCase(), { name, email, password });
}
