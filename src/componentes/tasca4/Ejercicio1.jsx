import Grid from "@mui/material/Grid";
import CardLizard from "../../componentes/tasca3/Ejercicio3_1.jsx";
import seaofthieves from "../../imagenes/seaofthieves.jpg";


function Ejercicio1() {
  return (
    <div style={{ marginTop: "70px"}}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} xl={3}>
        <CardLizard imagen={seaofthieves} 
        titulo='Sea Of Thieves' 
        parrafo='Sea of Thieves es un juego de acción y aventura multijugador en mundo abierto donde los jugadores asumen el rol de piratas, navegando, explorando y luchando en un mar compartido.' 
        textoBoton1='SHARE' 
        enlaceBoton1='#' 
        textoBoton2='LEARN MORE' 
        enlaceBoton2='#' 
        colorBoton3="red" 
        textoBoton3='Color' />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CardLizard imagen={seaofthieves} 
        titulo='Sea Of Thieves' 
        parrafo='Sea of Thieves es un juego de acción y aventura multijugador en mundo abierto donde los jugadores asumen el rol de piratas, navegando, explorando y luchando en un mar compartido.' 
        textoBoton1='SHARE' 
        enlaceBoton1='#' 
        textoBoton2='LEARN MORE' 
        enlaceBoton2='#' 
        colorBoton3="red" 
        textoBoton3='Color'/>
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CardLizard imagen={seaofthieves} 
        titulo='Sea Of Thieves' 
        parrafo='Sea of Thieves es un juego de acción y aventura multijugador en mundo abierto donde los jugadores asumen el rol de piratas, navegando, explorando y luchando en un mar compartido.' 
        textoBoton1='SHARE' 
        enlaceBoton1='#' 
        textoBoton2='LEARN MORE' 
        enlaceBoton2='#' 
        colorBoton3="red" 
        textoBoton3='Color'/>
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CardLizard imagen={seaofthieves} 
        titulo='Sea Of Thieves' 
        parrafo='Sea of Thieves es un juego de acción y aventura multijugador en mundo abierto donde los jugadores asumen el rol de piratas, navegando, explorando y luchando en un mar compartido.' 
        textoBoton1='SHARE' 
        enlaceBoton1='#' 
        textoBoton2='LEARN MORE' 
        enlaceBoton2='#' 
        colorBoton3="red" 
        textoBoton3='Color'/>
      </Grid>
    </Grid>
    </div>
  );
}

export default Ejercicio1;
