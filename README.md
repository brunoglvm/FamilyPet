# 🐾 **FamilyPet - Sistema de Adoção de Pets**

## **CURSO**: Desenvolvimento Full Stack Básico - Escola Atlântico Avanti

---

## 📋 **Descrição**

Este projeto consiste no desenvolvimento de um sistema web para otimizar e modernizar o processo de adoção de animais em um abrigo. A aplicação facilita:

- **Cadastro e gerenciamento** dos pets disponíveis para adoção.
- **Registro de adotantes** e acompanhamento das adoções.

### 🎯 **Objetivo**

Tornar o processo de adoção mais **eficiente**, **acessível** e **organizado**.

---

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

---

## ⚙️ **Requisitos Técnicos**

### Backend

- **Tecnologia**: `Node.js`
- **Framework**: `Express` (para gerenciamento de rotas e requisições)
- **ORM**: `Prisma` (para interações com o banco de dados)
- **Operações CRUD**:
  - Criação, leitura, atualização e exclusão de informações sobre pets e adotantes.

### Banco de Dados

- **Tecnologia**: `PostgreSQL` ou `MySQL` (banco de dados relacional)
- **Estrutura** do banco de dados:
  - **Pets**: Tabela que armazena informações dos pets (id, nome, espécie, idade, descrição, status).
  - **Adotantes**: Tabela que armazena informações dos adotantes (id, nome, e-mail, telefone, endereço).
  - **Adoções**: Tabela que registra as adoções realizadas (id, pet_id, adotante_id, data_adocao).

### Frontend

- **Tecnologia**: `ReactJS`
- **Funcionalidades**:
  - Exibição da lista de pets.
  - Formulários para cadastrar pets e adotantes.
  - Histórico de adoções e filtros.
  - **Landing page** para apresentação do sistema e dos benefícios do abrigo.
