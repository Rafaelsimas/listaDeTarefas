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
