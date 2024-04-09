import React, { useEffect, useState } from "react";
import "./Home.css";
import homeLogo from "../../assets/3964906.jpg";

interface minhaProps {
  title: string;
  description: string;
}

function Home(props: minhaProps) {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns, tarefa concluida!");
    }
  }, [completed]);

  return (
    <>
      <h1 className="titulo">{props.title}</h1>
      <p className="descricao">{props.description}</p>
      <img src={homeLogo} className="img" alt="Imagem tela inicial" />

      <h1 className="titulo">Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a Tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir tarefa</button>
    </>
  );
}

export default Home;
