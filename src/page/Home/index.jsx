import { RiDeleteBin6Fill } from "react-icons/ri";
import { Header } from "../../components/Header/index.jsx";
import { Container, Search, Content } from "./styles.js";
import { useState, useEffect } from "react";

export function Home() {
  const [input, setInput] = useState(""); // Estado para a entrada do usuário
  const [tasks, setTasks] = useState([]); // Estado para armazenar todas as tarefas
  const [completedTasks, setCompletedTasks] = useState([]); // Estado para tarefas concluídas

  useEffect(() => {
    // Efeito para recuperar tarefas do armazenamento local quando a página é carregada
    const tasksStorage = localStorage.getItem("@tasks");

    if (tasksStorage) {
      const parsedTasks = JSON.parse(tasksStorage);
      setTasks(parsedTasks);

      // Calcula as tarefas concluídas
      const completed = parsedTasks.filter((task) => task.completed);
      setCompletedTasks(completed);
    }
  }, []);

  useEffect(() => {
    // Efeito para salvar as tarefas no armazenamento local sempre que o estado 'tasks' é atualizado
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  function register(e) {
    e.preventDefault();

    if (input.trim() === "") {
      return; // Se a entrada estiver em branco, não faz nada
    }

    const newTask = {
      id: Date.now(), // Gera um ID único usando a data e hora atual
      text: input, // Texto da tarefa a partir da entrada do usuário
      completed: false, // Inicialmente, a tarefa não está concluída
    };

    setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao estado 'tasks'
    setInput(""); // Limpa a entrada para que o usuário possa inserir uma nova tarefa
  }

  function deleteTask(taskToDelete) {
    // Função para excluir tarefas
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);

    if (taskToDelete.completed) {
      const updatedCompleted = completedTasks.filter( (task) => task.id !== taskToDelete.id
      );
      setCompletedTasks(updatedCompleted); // Remove a tarefa concluída dos 'completedTasks'
    }
  }

  function toggleTaskCompletion(taskToToggle) {
    // Função para alternar o estado de conclusão de uma tarefa
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskToToggle.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);

    if (taskToToggle.completed) {
      const updatedCompleted = completedTasks.filter(
        (task) => task.id !== taskToToggle.id
      );
      setCompletedTasks(updatedCompleted); // Remove a tarefa concluída dos 'completedTasks'
    } else {
      setCompletedTasks([...completedTasks, taskToToggle]); // Adiciona a tarefa aos 'completedTasks'
    }
  }

  return (
    <Container>
      <Header />

      <Search>
        <form onSubmit={register}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit">Adicionar</button>
        </form>
      </Search>

      <Content>
        <div>
          <div className="box">
            <p>Total: {tasks.length}</p>
            <div>
              <p>
                Concluídas: {completedTasks.length} de{" "}
                {tasks.length - completedTasks.length}
              </p>
              <p> </p>
            </div>
          </div>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task)}
              />
              {task.text}
              <button onClick={() => deleteTask(task)}>
                <RiDeleteBin6Fill size={20} />
              </button>
            </li>
          ))}
        </div>
      </Content>
    </Container>
  );
}
