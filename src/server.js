const express = require("express");

const tarefasRoutes = require("./routes/tarefasRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    mensagem: "API LabTasks rodando!",
  });
});

app.use(tarefasRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});