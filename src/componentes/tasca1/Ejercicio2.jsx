import { useState } from "react";

function Ejercicio2() {
  const [color, setColor] = useState("red");

  const estiloCirculo = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: color,
    marginBottom: "1rem",
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>Ejercicio 2: Círculo de colores</h2>
      <div style={estiloCirculo}></div>
      <button onClick={() => setColor("red")}>Rojo</button>
      <button onClick={() => setColor("green")} style={{ marginLeft: "0.5rem" }}>
        Verde
      </button>
      <button onClick={() => setColor("blue")} style={{ marginLeft: "0.5rem" }}>
        Azul
      </button>
    </div>
  );
}

export default Ejercicio2;
