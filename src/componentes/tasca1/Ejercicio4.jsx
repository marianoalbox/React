import { useState } from "react";
import imagen1 from "../../imagenes/imagen1.jpg";
import imagen2 from "../../imagenes/imagen2.jpg";

function Ejercicio4() {
  const [mostrarPrimera, setMostrarPrimera] = useState(true);

  const cambiarImagen = () => {
    setMostrarPrimera(!mostrarPrimera);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>Ejercicio 4: Cambiar imagen</h2>
      <img
        src={mostrarPrimera ? imagen1 : imagen2}
        alt="Ejercicio 4"
        style={{ width: "200px", display: "block", marginBottom: "1rem" }}
      />
      <button onClick={cambiarImagen}>Cambiar imagen</button>
    </div>
  );
}

export default Ejercicio4;
