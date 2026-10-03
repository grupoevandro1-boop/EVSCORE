import { NextResponse } from 'next/server';

const demoUsers = new Map<string, { name: string; email: string; password: string }>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Nome, e-mail e senha são obrigatórios.' }, { status: 400 });
    }

    if (String(password).length < 6) {
      return NextResponse.json({ message: 'A senha deve ter no mínimo 6 caracteres.' }, { status: 400 });
    }

    const normalizedEmail = String(email).toLowerCase();

    if (demoUsers.has(normalizedEmail)) {
      return NextResponse.json({ message: 'Este e-mail já está em uso.' }, { status: 409 });
    }

    demoUsers.set(normalizedEmail, {
      name: String(name),
      email: normalizedEmail,
      password: String(password),
    });

    return NextResponse.json({
      success: true,
      user: {
        name: String(name),
        email: normalizedEmail,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao processar cadastro.' }, { status: 500 });
  }
}
