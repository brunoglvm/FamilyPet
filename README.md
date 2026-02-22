# 🐾 **FamilyPet - Sistema de Adoção de Pets**

## **CURSO**: Desenvolvimento Full Stack Básico - Escola Atlântico Avanti

## 📋 **Descrição**

Este projeto consiste no desenvolvimento de um sistema web para otimizar e modernizar o processo de adoção de animais em um abrigo. A aplicação facilita:

- **Cadastro e gerenciamento** dos pets disponíveis para adoção.
- **Registro de adotantes** e acompanhamento das adoções.

### 🎯 **Objetivo**

Tornar o processo de adoção mais **eficiente**, **acessível** e **organizado**.

## 🚀 **Funcionalidades**

### 1️⃣ **Cadastro de Pets**

- Campos necessários:
  - **Nome do pet**
  - **Espécie** (ex: cachorro, gato, coelho, etc.)
  - **Data de nascimento** (para determinar a idade aproximada)
  - **Descrição** (personalidade e necessidades especiais)
  - **Status** (disponível ou adotado)

### 2️⃣ **Gerenciamento de Adotantes**

- Campos necessários:
  - **Nome completo**
  - **E-mail**
  - **Telefone**
  - **Endereço**

### 3️⃣ **Processo de Adoção**

- **Fluxo do processo**:
  1. O adotante escolhe o pet.
  2. Registro da **data da adoção**.
  3. Atualização automática do status do pet para **"adotado"**, removendo-o da lista de pets disponíveis.

### 4️⃣ **Visualização de Pets Disponíveis**

- Exibição da lista de pets disponíveis para adoção.
- **Filtros**:
  - Espécie
  - Idade
  - Status (disponível/adotado)

## ⚙️ **Requisitos Técnicos**

### Banco de Dados

- **Tecnologia**: `PostgreSQL` (banco de dados relacional)
- **Estrutura** do banco de dados:
  - **Pets**: Tabela que armazena informações dos pets (id, nome, espécie, idade, descrição, status).
  - **Adotantes**: Tabela que armazena informações dos adotantes (id, nome, e-mail, telefone, endereço).
  - **Adoções**: Tabela que registra as adoções realizadas (id, pet_id, adotante_id, data_adocao).

### Backend

- **Tecnologia**: `Node.js`
- **Framework**: `Express` (para gerenciamento de rotas e requisições)
- **ORM**: `Prisma` (para interações com o banco de dados)
- **Operações CRUD**:
  - Criação, leitura, atualização e exclusão de informações sobre pets e adotantes.

### Frontend

- **Tecnologia**: `ReactJS`
- **Funcionalidades**:
  - Exibição da lista de pets.
  - Formulários para cadastrar pets e adotantes.
  - Histórico de adoções e filtros.
  - **Landing page** para apresentação do sistema e dos benefícios do abrigo.

## 💻 **Como rodar em desenvolvimento**

Você pode rodar o projeto de duas formas: localmente (sem Docker) ou com Docker Compose.

### 1️⃣ **Modo local (sem Docker)**

#### Pré-requisitos

- `Node.js` 22+
- `PostgreSQL` rodando na porta `5432`

#### Backend

1. Entrar na pasta:

```bash
cd backend
```

2. Criar e ajustar variáveis de ambiente:

```bash
cp .env.example .env
```

Use no `backend/.env`:

```env
PORT="3000"
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydatabase?schema=public"
SEED_ALLOWED="false"
```

3. Instalar dependências:

```bash
pnpm install
```

4. Sincronizar schema do banco e gerar client do Prisma:

```bash
npx prisma db push
npx prisma generate
```

5. Subir backend em modo desenvolvimento:

```bash
pnpm dev
```

Backend disponível em: `http://localhost:3000`  
API em: `http://localhost:3000/api/v1`

6. (Opcional) Rodar seed do banco:

No `backend/.env`, altere temporariamente:

```env
SEED_ALLOWED="true"
```

Depois execute:

```bash
pnpm db:seed
```

#### Frontend

1. Em outro terminal, entrar na pasta:

```bash
cd frontend
```

2. Criar e ajustar variáveis de ambiente:

```bash
cp .env.example .env
```

Use no `frontend/.env`:

```env
VITE_API_BASE_URL="http://localhost:3000/api"
```

3. Instalar dependências e subir frontend:

```bash
pnpm install
pnpm dev
```

Frontend disponível em: `http://localhost:5173`

### 2️⃣ **Modo Docker Compose**

#### Pré-requisitos

- `Docker`
- `Docker Compose`

1. Na raiz do projeto, criar o arquivo `.env` (raiz) com as variáveis do PostgreSQL usadas pelo `compose.yml`:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=1234
POSTGRES_DB=postgres
```

2. Criar `backend/.env`:

```bash
cp backend/.env.example backend/.env
```

Para Docker, ajuste o host do banco para o serviço `db`:

```env
PORT="3000"
DATABASE_URL="postgresql://postgres:1234@db:5432/postgres?schema=public"
SEED_ALLOWED="false"
```

3. Criar `frontend/.env`:

```bash
cp frontend/.env.example frontend/.env
```

4. Subir os serviços:

```bash
docker compose up --build
```

5. (Opcional) Rodar seed do banco:

No `backend/.env`, altere temporariamente:

```env
SEED_ALLOWED="true"
```

Depois execute:

```bash
docker compose exec backend npm run db:seed
```

Serviços disponíveis:

- Front: `http://localhost:5173`
- API: `http://localhost:3000/api/v1`
- Swagger: `http://localhost:3000/api-docs`
