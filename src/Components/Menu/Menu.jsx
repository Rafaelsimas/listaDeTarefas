import logo from "../../assets/logo.png"
import { RxExit } from "react-icons/rx"
export default function Menu() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo do app" />
        <RxExit className="exit" />
      </nav>
    </header>
  )
}
