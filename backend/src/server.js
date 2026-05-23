const express = require("express");
const cors = require("cors");

const tarefasRoutes = require("./routes/tarefasRoutes");

const app = express();

app.use(cors());
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