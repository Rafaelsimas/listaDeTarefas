import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt, FaPen } from "react-icons/fa";

import axios from "axios";
import ComponentAddTask from "../AddTask/AddTask";

export default function Aplication() {
  const URL_API = import.meta.env.VITE_URL_API;
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescripion] = useState("");
  const [now, setNow] = useState(new Date());
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const formatted = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const createTask = async (event) => {
    event.preventDefault();
    try {
      if (!title || !description) {
        alert("Preencha todos os campos");
        return;
      }

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

  const getTask = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${URL_API}/data`);
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.log(`Erro ao buscar as Tasks ${error}`);
      setLoading(false);
    }
  };

  const alertDelete = (id) => {
    if (window.confirm("Tem certeza que deseja deletar?")) {
      deleteTask(id);
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

        setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
      }
    } catch (error) {
      console.log(`Erro ao editar task ${error}`);
    }
  };

  useEffect(() => {
    getTask();

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
          <ComponentAddTask
            setVisiblePopUp={setVisiblePopUp}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescripion={setDescripion}
            createTask={createTask}
          />
        )}
        <div className="date">
          <h1>{formatted}</h1>
        </div>
        <IoIosAddCircle onClick={() => setVisiblePopUp(true)} className="add" />
        <div className="task-bx">
          <p className="count">Você tem {tasks.length} tarefa(s)</p>
          {loading && <span>Por favor, aguarde...</span>}
          {!loading && tasks?.length === 0 && (
            <span>Nenhuma tarefa encontrada.</span>
          )}
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <div className="title">
                {task.title}
                <div className="icon">
                  <FaTrashAlt
                    onClick={() => alertDelete(task.id)}
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
