import Menu from "../Menu/Menu"
import logoDashboard from "../../assets/logoDashboard.svg"
import { Link } from "react-router-dom"
export default function Dashboard() {
  return (
    <>
      <Menu />
      <div className="containerDashboard">
        <img src={logoDashboard} alt="" />
        <div className="container-txt">
          <div className="txt-xl ubuntu-bold">Organize suas tarefas</div>
          <div className="txt-md ubuntu-regular">
            Mais produtividade no seu dia.
          </div>
          <Link to="/aplicacao" className="btn-dashboard ubuntu-bold">
            Entrar
          </Link>
        </div>
      </div>
    </>
  )
}
