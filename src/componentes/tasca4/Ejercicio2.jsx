import { useState } from "react";
import Grid from "@mui/material/Grid";
import CardLizard from "../../componentes/tasca3/Ejercicio3_1.jsx";
import seaofthieves from "../../imagenes/seaofthieves.jpg";

function Ejercicio2() {

  const [juegos] = useState([
    {
      imagen: seaofthieves,
      titulo: "Sea Of Thieves",
      parrafo: "Sea of Thieves es un juego de acción y aventura multijugador en mundo abierto donde los jugadores asumen el rol de piratas, navegando, explorando y luchando en un mar compartido.",
      textoBoton1: "SHARE",
      enlaceBoton1: "#",
      textoBoton2: "LEARN MORE",
      enlaceBoton2: "#",
      colorBoton3: "red",
      textoBoton3: "Color"
    },
    {
      imagen: seaofthieves,
      titulo: "Sea Of Thieves 2",
      parrafo: "Explora mares peligrosos y busca tesoros escondidos con tu tripulación.",
      textoBoton1: "SHARE",
      enlaceBoton1: "#",
      textoBoton2: "LEARN MORE",
      enlaceBoton2: "#",
      colorBoton3: "blue",
      textoBoton3: "Color"
    },
    {
      imagen: seaofthieves,
      titulo: "Sea Of Thieves 3",
      parrafo: "Vive aventuras únicas en un mundo abierto lleno de peligros y misterios.",
      textoBoton1: "SHARE",
      enlaceBoton1: "#",
      textoBoton2: "LEARN MORE",
      enlaceBoton2: "#",
      colorBoton3: "green",
      textoBoton3: "Color"
    },
    {
      imagen: seaofthieves,
      titulo: "Sea Of Thieves 4",
      parrafo: "Combate contra otros piratas y conviértete en leyenda del mar.",
      textoBoton1: "SHARE",
      enlaceBoton1: "#",
      textoBoton2: "LEARN MORE",
      enlaceBoton2: "#",
      colorBoton3: "orange",
      textoBoton3: "Color"
    }
  ]);

  return (
    <div style={{ marginTop: "70px" }}>
      <Grid container spacing={2}>
        {juegos.map((juego, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <CardLizard {...juego} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Ejercicio2;