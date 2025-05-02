import { IoMdClose } from "react-icons/io";

export default function ComponentAddTask({
  setVisiblePopUp,
  title,
  setTitle,
  description,
  setDescripion,
  createTask,
}) {
  return (
    <div className="formBox">
      <form className="form" onSubmit={createTask} action="#">
        <h2>
          Adicione suas tarefas{" "}
          <IoMdClose onClick={() => setVisiblePopUp(false)} className="exit" />
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
  );
}
