import React, { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";

function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }

  function decrementar() {
    setValor(valor - 1);
  }

  return (
    <>
      <Login />

      <Home
        title="Home titulo"
        description="Componente home que recebe props"
      />

      <h1>Valor: {valor}</h1>
      <button onClick={handleClick}>Adicionar +</button>
      <button onClick={decrementar}>Remover -1</button>
    </>
  );
}

export default App;
