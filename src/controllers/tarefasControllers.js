const tarefasService = require("../services/tarefasService");

function listar(req, res) {
  const tarefas = tarefasService.listarTarefas();

  return res.json(tarefas);
}

function criar(req, res) {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({
      erro: "O título da tarefa é obrigatório.",
    });
  }

  const novaTarefa = tarefasService.criarTarefa(titulo);

  return res.status(201).json(novaTarefa);
}

function atualizar(req, res) {
  const { id } = req.params;
  const { titulo, concluida } = req.body;

  const tarefaAtualizada = tarefasService.atualizarTarefa(id, {
    titulo,
    concluida,
  });

  if (!tarefaAtualizada) {
    return res.status(404).json({
      erro: "Tarefa não encontrada.",
    });
  }

  return res.json(tarefaAtualizada);
}

function deletar(req, res) {
  const { id } = req.params;

  const deletada = tarefasService.deletarTarefa(id);

  if (!deletada) {
    return res.status(404).json({
      erro: "Tarefa não encontrada.",
    });
  }

  return res.status(204).send();
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar,
};