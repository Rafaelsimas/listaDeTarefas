import img_logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="home">
      <div className="home_box">
      <img src={img_logo} alt="" className="logo" />
      {/* Botão do Felipe */}
      <Link to="/lista" className="sign-in">
        Entrar
      </Link>
      </div>
    </div>
  )
}
