import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import axios from "axios";

export default function Aplication() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescripion] = useState("");
  const [now, setNow] = useState(new Date());
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const URL_API = import.meta.env.VITE_URL_API;

  const formatted = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const actionSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${URL_API}/data`, {
        title,
        description,
      });

      setTasks([...tasks, response.data]);
      setTitle("");
      setDescripion("");
      setVisiblePopUp(false);
    } catch (error) {
      console.log(`Error ao criar tarefa: ${error}`);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL_API}/data/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(`Erro ao deletar task ${error}`);
    }
  };

  const editTask = async (id) => {
    const newTitle = prompt("Digite o novo título:");
    const newDescription = prompt("Digite a nova descrição:");

    try {
      if (newTitle && newDescription) {
        const response = await axios.put(`${URL_API}/data/${id}`, {
          title: newTitle,
          description: newDescription,
        });

        setTasks(
          tasks.map((task) =>
            task.id === id
              ? response.data
              : task
          )
        );
      }
    } catch (error) {
      console.log(`Erro ao editar task ${error}`)
    }
  };

  const addTasks = () => {
    setVisiblePopUp(true);
  };

  const exit = () => {
    setVisiblePopUp(false);
  };

  const getTasks = async () => {
    try {
      const response = await axios.get(`${URL_API}/data`);
      setTasks(response.data);
    } catch (error) {
      console.log(`Erro ao buscar as Tasks ${error}`);
    }
  };

  useEffect(() => {
    getTasks();

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // atualiza a cada 1 segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Menu />
      <div className="container">
        {visiblePopUp && (
          <div className="formBox hidden">
            <form className="form" onSubmit={actionSubmit} action="#">
              <h2>
                Adicione suas tarefas{" "}
                <IoMdClose onClick={exit} className="exit" />
              </h2>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Registre sua tarefa"
                required
              />
              <input
                value={description}
                onChange={(e) => setDescripion(e.target.value)}
                type="text"
                placeholder="Descreva sua tarefa"
                required
              />
              <button type="submit">Adicionar</button>
            </form>
          </div>
        )}
        <div className="date">
          <h1>{formatted}</h1>
        </div>
        <IoIosAddCircle onClick={addTasks} className="add" />
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
    </>
  );
}
