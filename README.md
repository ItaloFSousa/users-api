# 🧑‍💻 Users API (Node.js + Prisma + MongoDB)

Uma API simples de usuários usando Node.js, Express e Prisma com MongoDB.

---

## 🧪 Objetivo

Esse projeto foi feito **puramente pra prática**, principalmente pra:

* Trabalhar com criação de APIs REST
* Entender melhor rotas HTTP (GET, POST, PUT, DELETE)
* Utilizar ORM com Prisma
* Conectar com banco de dados MongoDB
* Melhorar organização e estrutura de backend

---

## 🚀 Sobre o projeto

Essa API permite gerenciar usuários, incluindo:

* Criar usuários
* Listar usuários
* Filtrar usuários por nome
* Atualizar dados
* Deletar usuários

---

## 🛠️ Tecnologias usadas

* Node.js
* Express
* Prisma ORM
* MongoDB

---

## ▶️ Como executar

```bash
git clone https://github.com/ItaloFSousa/users-api
cd users-api
npm install
npx prisma generate
node server.js
```

---

## 📡 Rotas disponíveis

### 📥 Criar usuário

```
POST /users
```

Body:

```json
{
  "name": "João",
  "age": 20,
  "email": "joao@email.com"
}
```

---

### 📤 Listar usuários

```
GET /users
```

Filtro opcional:

```
GET /users?name=João
```

---

### ✏️ Atualizar usuário

```
PUT /users/:id
```

---

### ❌ Deletar usuário

```
DELETE /users/:id
```