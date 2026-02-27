import { useState } from "react";

function Ejercicio3() {
  const [negrita, setNegrita] = useState(false);
  const [cursiva, setCursiva] = useState(false);
  const [subrayado, setSubrayado] = useState(false);

  const estiloTexto = {
    fontWeight: negrita ? "bold" : "normal",
    fontStyle: cursiva ? "italic" : "normal",
    textDecoration: subrayado ? "underline" : "none",
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>Ejercicio 3: Formato de texto</h2>
      <p style={estiloTexto}>Lorem Ipsum</p>
      <button onClick={() => setNegrita(!negrita)}>Negrita</button>
      <button onClick={() => setCursiva(!cursiva)} style={{ marginLeft: "0.5rem" }}>
        Cursiva
      </button>
      <button onClick={() => setSubrayado(!subrayado)} style={{ marginLeft: "0.5rem" }}>
        Subrayado
      </button>
    </div>
  );
}

export default Ejercicio3;
