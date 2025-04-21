import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
{/* Felipe */}
export default function Aplication() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description:
        "Anotações importantes para o estudo",
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const newTitle = prompt("Digite o novo título:");
    const newDescription = prompt("Digite a nova descrição:");
    if (newTitle && newDescription) {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, title: newTitle, description: newDescription }
            : task
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="task-bx">
        <p className="count">Você tem {tasks.length} tarefa(s)</p>

        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="title">
              {task.title}
              <div className="icon">
                <FaTrashAlt
                  onClick={() => deleteTask(task.id)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  title="Excluir"
                />
                <FaPen
                  onClick={() => editTask(task.id)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  title="Editar"
                />
              </div>
            </div>

            <div className="description">{task.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}