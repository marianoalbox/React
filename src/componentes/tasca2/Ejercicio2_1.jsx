import { useState } from "react";
import img1 from "../../imagenes/Tasca2_imagen_1.jpg";
import img2 from "../../imagenes/Tasca2_imagen_2.jpg";
import img3 from "../../imagenes/Tasca2_imagen_3.jpg";
import img4 from "../../imagenes/Tasca2_imagen_4.jpg";

function Galeria() {

  const [imagenes] = useState([img1, img2, img3, img4]);

  return (
    <div style={{border: "1px solid #ccc", padding:"1rem", marginBottom:"1rem"}}>
      <h2>Tasca 2, Ejercicio 1: Galería de imágenes</h2>

      <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={"imagen " + index}
            width="200"
          />
        ))}
      </div>

    </div>
  );
}

export default Galeria;