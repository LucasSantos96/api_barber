# API Barber - Sistema de Gerenciamento de Barbearia

## 📋 Descrição

API REST desenvolvida com Node.js, Fastify e Prisma para gerenciar clientes e planos de uma barbearia. O sistema permite cadastrar, listar, atualizar e excluir clientes, além de gerenciar planos de assinatura.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM para TypeScript e Node.js
- **MySQL** - Banco de dados relacional
- **TypeScript** - Superset do JavaScript com tipagem estática
- **CORS** - Middleware para Cross-Origin Resource Sharing

## 📦 Dependências

### Produção
- `@fastify/cors` - Middleware CORS para Fastify
- `@prisma/client` - Cliente Prisma para banco de dados
- `cors` - Middleware CORS
- `fastify` - Framework web
- `tsx` - Executor TypeScript

### Desenvolvimento
- `@types/node` - Tipagens do Node.js
- `dotenv` - Gerenciamento de variáveis de ambiente
- `prisma` - CLI do Prisma
- `typescript` - Compilador TypeScript

## 🗄️ Estrutura do Banco de Dados

### Modelo Client
```prisma
model Client {
  id         String    @id @default(uuid())
  name       String    // Nome do cliente
  number     String    @unique // Telefone único
  planId     String?   // FK para Plan (opcional)
  plan       Plan?     @relation(fields: [planId], references: [id])
  status     String?   // Status da assinatura
  expires_at DateTime? // Data de expiração
  created_at DateTime? @default(now())
  updated_at DateTime? @updatedAt
}
```

### Modelo Plan
```prisma
model Plan {
  id         String    @id @default(uuid())
  name       String    // Nome do plano
  price      Decimal   // Preço do plano
  clients    Client[]  // Relação 1:N com clientes
  created_at DateTime? @default(now())
  updated_at DateTime? @updatedAt
}
```

## 🏗️ Estrutura do Projeto

```
api_barber/
├── prisma/
│   ├── migrations/          # Migrações do banco de dados
│   └── schema.prisma       # Schema do Prisma
├── src/
│   ├── controllers/        # Controladores (lógica de negócio)
│   │   ├── ActiveClientController.ts
│   │   ├── CreateClientController.ts
│   │   ├── CreatePlanController.ts
│   │   ├── DeleteClientController.ts
│   │   ├── ListClientsController.ts
│   │   ├── ListPlansController.ts
│   │   └── UpdateClientController.ts
│   ├── services/          # Serviços (regras de negócio)
│   │   ├── ActiveClientService.ts
│   │   ├── CreateClientServices.ts
│   │   ├── CreatePlanServices.ts
│   │   ├── DeleteClientServices.ts
│   │   ├── ListClientsServices.ts
│   │   ├── ListPlanServices.ts
│   │   └── UpdateClientServices.ts
│   ├── routes/            # Definição das rotas
│   │   ├── ClientRoutes.ts
│   │   └── PlanRoutes.ts
│   ├── utils/             # Utilitários
│   ├── generated/         # Código gerado pelo Prisma
│   └── server.ts          # Arquivo principal do servidor
├── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- MySQL
- npm ou yarn

### Instalação

1. **Clone o repositório e navegue para a pasta:**
```bash
git clone https://github.com/LucasSantos96/api_barber.git
cd api_barber
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
PORT=3333
```

4. **Execute as migrações do banco:**
```bash
npx prisma migrate deploy
```

5. **Gere o cliente Prisma:**
```bash
npx prisma generate
```

6. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

## 📚 Endpoints da API

### Clientes

- **GET** `/clients` - Lista todos os clientes
- **POST** `/clients` - Cria um novo cliente
- **PUT** `/clients/:id` - Atualiza um cliente
- **DELETE** `/clients/:id` - Remove um cliente
- **PATCH** `/clients/:id/active` - Ativa/desativa um cliente

### Planos

- **GET** `/plans` - Lista todos os planos
- **POST** `/plans` - Cria um novo plano

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload

## 🏛️ Arquitetura

O projeto segue uma arquitetura em camadas:

1. **Controllers** - Recebem as requisições e coordenam as operações
2. **Services** - Contêm a lógica de negócio
3. **Routes** - Definem os endpoints da API
4. **Database** - Camada de persistência com Prisma

## 🔒 CORS

A API está configurada para aceitar requisições de qualquer origem em modo desenvolvimento (`origin: "*"`). Em produção, configure adequadamente as origens permitidas.

## 📝 Exemplo de Uso

### Criar um Cliente
```bash
curl -X POST http://localhost:3333/clients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "number": "22999999999",
    "planId": "uuid-do-plano",
    "status": "ativo",
    "expires_at": "2024-12-31T23:59:59.000Z"
  }'
```

### Listar Clientes
```bash
curl http://localhost:3333/clients
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
