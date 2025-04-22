import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import Explorer from "./Components/Explorer/Explorer"
import Menu from "./Components/Menu/Menu"
import Aplication from "../src/Components/Aplication/Aplication"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Explorer />} />
          <Route path="/lista" exact element={<Dashboard />} />
          <Route path="/aplicacao" exact element={<Aplication />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
