<<<<<<< HEAD
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import { IoIosAddCircle } from "react-icons/io";

export default function Aplication() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // atualiza a cada 1 segundo

    return () => clearInterval(interval);
  }, []);

  const formatted = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <Menu />
      <div className="container">
        <div className="date">
          <h1>{formatted}</h1>
        </div>
          <IoIosAddCircle  className="add"/>
      </div>
    </>
  );
}
=======
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
>>>>>>> felipe
