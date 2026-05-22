let tarefas = [
    {
        id: 1,
        titulo: "estudar api rest",
        concluida: false,
    },
    {
        id: 2,
        titulo: "praticar nodejs",
        concluida: false,
    },
];

function listarTarefas() {
    return tarefas;
}

function criarTarefa(titulo) {
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo,
        concluida: false,
    };

    tarefas.push(novaTarefa);

    return novaTarefa;
}

function atualizarTarefa(id, dados) {
    const  tarefa = tarefas.find((tarefa) => tarefa.id === Number(id));

    if (!tarefa) {
        return null;
    }

    tarefa.titulo = dados.titulo ?? tarefa.titulo;
    tarefa.concluida = dados.concluida ?? tarefa.concluida;
     return tarefa;
}

function deletarTarefa(id){
    const tarefaExiste = tarefas.some((tarefa) => tarefa.id === Number(id));

    if (!tarefaExiste) {
        return false;
    }

    tarefas = tarefas.filter((tarefa) => tarefa.id !== Number(id));
    
    return true;
}

module.exports ={
    listarTarefas,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa,
};