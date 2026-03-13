import { useState } from "react";

import img1 from "../../imagenes/Tasca2_imagen_1.jpg";
import img2 from "../../imagenes/Tasca2_imagen_2.jpg";
import img3 from "../../imagenes/Tasca2_imagen_3.jpg";
import img4 from "../../imagenes/Tasca2_imagen_4.jpg";

function Carousel() {

  const imagenes = [img1, img2, img3, img4];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div style={{border: "1px solid #ccc", padding:"1rem"}}>
      <h2>Tasca 2, Ejercicio 2: Carousel de imágenes</h2>

      <div>
        <img
          src={imagenes[indice]}
          alt="carousel"
          width="300"
        />
      </div>

      <div style={{marginTop:"10px"}}>
        <button onClick={anterior}>Anterior</button>
        <button onClick={siguiente}>Siguiente</button>
      </div>

    </div>
  );
}

export default Carousel;