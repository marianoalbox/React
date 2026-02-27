import { useState } from "react";

function Ejercicio1() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  const disminuir = () => {
    setNumero(numero - 1);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>Ejercicio 1: Contador</h2>
      <p>Número actual: {numero}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir} style={{ marginLeft: "0.5rem" }}>
        Disminuir
      </button>
    </div>
  );
}

export default Ejercicio1;
