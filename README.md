# LabTasks Fullstack

Aplicação fullstack de gerenciamento de tarefas desenvolvida com React, Node.js, Express e API REST.

## Objetivo

Prática de desenvolvimento web fullstack, integrando frontend em React com backend em Node.js/Express por meio de uma API REST.

## Tecnologias utilizadas

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express
- CORS
- JavaScript

### Ferramentas

- Git
- GitHub
- Thunder Client
- VS Code

## Funcionalidades

- Listar tarefas
- Criar tarefas
- Marcar tarefas como concluídas ou pendentes
- Excluir tarefas
- Integração entre frontend e backend via API REST

## Rotas da API

```http
GET /tarefas
POST /tarefas
PUT /tarefas/:id
DELETE /tarefas/:id
```

## Como executar o projeto

### Backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
npm run dev
```

Caso esteja usando PowerShell no Windows e haja bloqueio de scripts, use:

```bash
npm.cmd run dev
```

O backend ficará disponível em:

```txt
http://localhost:3000
```

### Frontend

Em outro terminal, entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o frontend:

```bash
npm run dev
```

Caso esteja usando PowerShell no Windows e haja bloqueio de scripts, use:

```bash
npm.cmd run dev
```

O frontend ficará disponível em:

```txt
http://localhost:5173
```

## Estrutura do projeto

```txt
labtasks/
  backend/
    src/
      controllers/
      routes/
      services/
      server.js
  frontend/
    src/
      App.jsx
      App.css
      index.css
  README.md
```

