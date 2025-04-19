import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
export default function Aplication() {
  return <div className="container">
    {/* Felipe */}
<div className="task-bx">
  <p className="count">Você tem 0 tarefas</p>

  <div className="task-card">
    <div className="title">Estudar React
    <div className="icon">
    <FaTrashAlt />
    <FaPen />    
    </div>
    </div>


    <div className="description">
      Lorem ipsum, dolor sit amet consectetu adipisicing elit. Quia hic fuga quibusdam ipsum tempore. Ad consequuntur saepe impedit error quo eum aliquid officiis! Maiores iste corporis totam, pariatur cum aperiam?
    </div>
  </div>
</div>

  </div>
}
