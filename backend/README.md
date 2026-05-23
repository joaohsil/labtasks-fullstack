# LabTasks API

API REST simples desenvolvida com Node.js e Express para praticar conceitos de backend, rotas, controllers, services e operações CRUD.

## Objetivo

Este projeto foi criado como parte da preparação para uma vaga de Desenvolvedor Júnior Fullstack, com foco em desenvolvimento de APIs REST e organização de projeto backend.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Nodemon
- Thunder Client

## Funcionalidades

- Listar tarefas
- Criar tarefas
- Atualizar tarefas
- Remover tarefas

## Rotas da API

### Listar tarefas

Para listar todas as tarefas, envie uma requisição GET para a rota:

```http
GET /tarefas
```

Resposta esperada:

```json
[
  {
    "id": 1,
    "titulo": "estudar api rest",
    "concluida": false
  },
  {
    "id": 2,
    "titulo": "praticar nodejs",
    "concluida": false
  }
]
```

### Criar tarefa

Para criar uma nova tarefa, envie uma requisição POST para a rota:

```http
POST /tarefas
```

Com o seguinte corpo em JSON:

```json
{
  "titulo": "Aprender Express"
}
```

Resposta esperada:

```json
{
  "id": 3,
  "titulo": "Aprender Express",
  "concluida": false
}
```

### Atualizar tarefa

Para atualizar uma tarefa existente, envie uma requisição PUT informando o id da tarefa na URL:

```http
PUT /tarefas/:id
```

Exemplo:

```http
PUT /tarefas/1
```

Com o seguinte corpo em JSON:

```json
{
  "titulo": "Estudar API REST com Node",
  "concluida": true
}
```

Resposta esperada:

```json
{
  "id": 1,
  "titulo": "Estudar API REST com Node",
  "concluida": true
}
```

### Remover tarefa

Para remover uma tarefa, envie uma requisição DELETE informando o id da tarefa na URL:

```http
DELETE /tarefas/:id
```

Exemplo:

```http
DELETE /tarefas/1
```

Resposta esperada:

```txt
204 No Content
```

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o servidor em modo desenvolvimento:

```bash
npm run dev
```

Como no Windows o PowerShell pode bloquear scripts, também é possível executar com:

```bash
npm.cmd run dev
```

A API ficará disponível em:

```txt
http://localhost:3000
```

## Estrutura do projeto

```txt
src/
  controllers/
    tarefasController.js
  routes/
    tarefasRoutes.js
  services/
    tarefasService.js
  server.js
```

## Aprendizados

Neste projeto pratiquei:

- Criação de servidor com Express
- Rotas REST
- Métodos HTTP
- Uso de JSON
- Status HTTP
- Organização em camadas
- Separação entre routes, controllers e services
- Testes manuais com Thunder Client
- Correção de erros de rota, importação e variáveis em JavaScript