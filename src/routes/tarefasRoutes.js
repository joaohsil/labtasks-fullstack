const express = require("express");

const tarefasController = require("../controllers/tarefasControllers");

const router = express.Router();

router.get("/tarefas", tarefasController.listar);
router.post("/tarefas", tarefasController.criar);
router.put("/tarefas/:id", tarefasController.atualizar);
router.delete("/tarefas/:id", tarefasController.deletar);

module.exports = router;