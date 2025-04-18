import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import Explorer from "./Components/Explorer/Explorer"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Explorer />} />
          <Route path="/lista" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
