# EVSCORE - Aplicativo de Prognósticos de Futebol

## 📊 Visão Geral
Sistema completo para prognósticos de futebol e palpites com análise de dados, previsões de resultados, gerenciamento de apostas e painel administrativo.

## 🚀 Stack Tecnológica
- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express API
- **Banco de Dados:** PostgreSQL + Prisma ORM
- **Autenticação:** NextAuth.js
- **APIs Externas:** Football-Data.org
- **Deployment:** Vercel + Railway

## 📁 Estrutura do Projeto
```
EVSCORE/
├── apps/
│   ├── web/                    # Frontend Next.js
│   ├── api/                    # Backend API
│   └── mobile/                 # React Native (Expo)
├── packages/
│   ├── ui/                     # Componentes compartilhados
│   ├── database/               # Schema e migrations
│   └── types/                  # Types compartilhados
├── docker-compose.yml
├── .env.example
├── package.json
└── README.md
```

## ✨ Funcionalidades Principais
- ✅ Prognósticos automáticos de partidas
- ✅ Análise estatística de times
- ✅ Histórico de palpites e acurácia
- ✅ Comparação de odds
- ✅ Painel de favoritos
- ✅ Rankings e leaderboards
- ✅ Gerenciamento de carteiras de apostas
- ✅ Notificações de partidas
- ✅ Dashboard administrativo
- ✅ Suporte a múltiplas ligas

## 🔐 Autenticação
- Cadastro/Login com email
- OAuth (Google/GitHub)
- Two-Factor Authentication (2FA)
- Gerenciamento de sessões

## 📱 Responsividade
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🛠️ Como Começar
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure o arquivo `.env` com suas credenciais
4. Execute migrations: `npm run db:migrate`
5. Inicie o servidor de desenvolvimento: `npm run dev`

## 📚 Documentação
- [API Documentation](./apps/api/README.md)
- [Frontend Guide](./apps/web/README.md)
- [Database Schema](./packages/database/README.md)

## 👥 Equipe
Desenvolvido para análise de prognósticos de futebol com precisão e confiabilidade.

## 📄 Licença
MIT
