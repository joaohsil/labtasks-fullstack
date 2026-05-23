import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function buscarTarefas() {
    try {
      const resposta = await fetch("http://localhost:3000/tarefas");

      if (!resposta.ok) {
        throw new Error("Erro ao buscar tarefas da API.");
      }

      const dados = await resposta.json();

      setTarefas(dados);
    } catch (error) {
      setErro("Não foi possível carregar as tarefas.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarTarefas();
  }, []);

  async function criarTarefa(event) {
    event.preventDefault();

    if (!titulo.trim()) {
      alert("Digite o título da tarefa.");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: titulo,
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao criar tarefa.");
      }

      const novaTarefa = await resposta.json();

      setTarefas([...tarefas, novaTarefa]);
      setTitulo("");
    } catch (error) {
      alert("Não foi possível criar a tarefa.");
    }
  }

  async function alternarStatusTarefa(tarefa) {
    try {
      const resposta = await fetch(`http://localhost:3000/tarefas/${tarefa.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          concluida: !tarefa.concluida,
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao atualizar tarefa.");
      }

      const tarefaAtualizada = await resposta.json();

      const tarefasAtualizadas = tarefas.map((item) => {
        if (item.id === tarefaAtualizada.id) {
          return tarefaAtualizada;
        }

        return item;
      });

      setTarefas(tarefasAtualizadas);
    } catch (error) {
      alert("Não foi possível atualizar a tarefa.");
    }
  }

  async function deletarTarefa(id) {
    const confirmou = confirm("Tem certeza que deseja excluir esta tarefa?");

    if (!confirmou) {
      return;
    }

    try {
      const resposta = await fetch(`http://localhost:3000/tarefas/${id}`, {
        method: "DELETE",
      });

      if (!resposta.ok) {
        throw new Error("Erro ao deletar tarefa.");
      }

      const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);

      setTarefas(tarefasFiltradas);
    } catch (error) {
      alert("Não foi possível deletar a tarefa.");
    }
  }

  return (
    <main className="container">
  <section className="cabecalho">
    <span className="badge">Fullstack Project</span>
    <h1>LabTasks</h1>
    <p>Gerencie suas tarefas com React, Node.js, Express e API REST.</p>
  </section>

      <form className="formulario" onSubmit={criarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      {carregando && <p>Carregando tarefas...</p>}

      {erro && <p>{erro}</p>}

      {!carregando && !erro && tarefas.length === 0 && (
        <p>Nenhuma tarefa encontrada.</p>
      )}

      {!carregando && !erro && tarefas.length > 0 && (
        <ul className="lista">
          {tarefas.map((tarefa) => (
            <li className="tarefa" key={tarefa.id}>
              <span className={tarefa.concluida ? "titulo concluida" : "titulo"}>
  {tarefa.titulo}
</span>

<span className={tarefa.concluida ? "status status-ok" : "status status-pendente"}>
  {tarefa.concluida ? "Concluída" : "Pendente"}
</span>

              <button className="botao-secundario" onClick={() => alternarStatusTarefa(tarefa)}>
                {tarefa.concluida ? "Marcar como pendente" : "Concluir"}
              </button>

              <button className="botao-perigo" onClick={() => deletarTarefa(tarefa.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;