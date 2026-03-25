import './App.css'
import Menu from './Menu'
import { useState } from 'react'

//Tasca 1
import Ejercicio1 from './componentes/tasca1/Ejercicio1'
import Ejercicio2 from './componentes/tasca1/Ejercicio2'
import Ejercicio3 from './componentes/tasca1/Ejercicio3'
import Ejercicio4 from './componentes/tasca1/Ejercicio4'

//Tasca 2
import Ejercicio2_1 from './componentes/tasca2/Ejercicio2_1'
import Ejercicio2_2 from './componentes/tasca2/Ejercicio2_2'

//Tasca 3
import Ejercicio3_1 from './componentes/tasca3/Ejercicio3_1'
import seaofthieves from "./imagenes/seaofthieves.jpg";
import thehunter from "./imagenes/thehunter.jpg";
import dbd from "./imagenes/dbd.jpg";
import fh6 from "./imagenes/fh6.jpg";
import liarsbar from "./imagenes/liarsbar.jpg";

function App() {
  
  const [tascaSeleccionada, setTascaSeleccionada] = useState('tasca 1.1')

  function getTascaComponent() {
    switch (tascaSeleccionada) {
      case 'tasca 1.1':
        return <Ejercicio1 />
      case 'tasca 1.2':
        return <Ejercicio2 />
      case 'tasca 1.3':
        return <Ejercicio3 />
      case 'tasca 1.4':
        return <Ejercicio4 />
      case 'tasca 2.1':
        return <Ejercicio2_1 />
      case 'tasca 2.2':
        return <Ejercicio2_2 />
      case 'tasca 3':
        return <div style={{ width: "1800px", marginTop: "70px", display: "flex" ,flexWrap: "wrap", border: "1px solid #ccc", justifyContent: "center", marginLeft:"-260px" }}>
                <Ejercicio3_1   imagen={seaofthieves} titulo='Sea Of Thieves' parrafo='Sea of Thieves es un juego de acción y aventura multijugador en mundo abierto donde los jugadores asumen el rol de piratas, navegando, explorando y luchando en un mar compartido.' textoBoton1='SHARE' enlaceBoton1='#' textoBoton2='LEARN MORE' enlaceBoton2='#' colorBoton3="red" textoBoton3='Color'/>
                <Ejercicio3_1   imagen={thehunter} titulo='The Hunter' parrafo='The Hunter es un juego de acción y aventura en mundo abierto donde los jugadores asumen el rol de cazadores, explorando y cazando animales en un entorno natural.' textoBoton1='SHARE' enlaceBoton1='#' textoBoton2='LEARN MORE' enlaceBoton2='#' colorBoton3="blue" textoBoton3='Color'/>
                <Ejercicio3_1   imagen={dbd} titulo='Dead by Daylight' parrafo='Dead by Daylight es un videojuego de terror y supervivencia multijugador asimétrico en línea desarrollado y publicado por el estudio canadiense Behaviour Interactive.' textoBoton1='SHARE' enlaceBoton1='#' textoBoton2='LEARN MORE' enlaceBoton2='#' colorBoton3="green" textoBoton3='Color'/>
                <Ejercicio3_1   imagen={fh6} titulo='Forza Horizon 6' parrafo='Forza Horizon 6, ambientado en Japón y lanzado en 2026, es un juego de carreras en mundo abierto donde los jugadores comienzan como turistas y exploran paisajes diversos, desde la bulliciosa Tokio (cinco veces mayor que en FH5) hasta zonas rurales y montañosas.' textoBoton1='SHARE' enlaceBoton1='#' textoBoton2='LEARN MORE' enlaceBoton2='#' colorBoton3="yellow" textoBoton3='Color'/>
                <Ejercicio3_1   imagen={liarsbar} titulo="Liar's Bar" parrafo="Liar's Bar es un juego multijugador en línea de deducción social y mentiras, ambientado en un bar sombrío, donde 2-4 jugadores utilizan cartas o dados para engañar a sus oponentes. La clave es mentir sin ser descubierto; de lo contrario, el mentiroso debe enfrentar un minijuego de ruleta rusa." textoBoton1='SHARE' enlaceBoton1='#' textoBoton2='LEARN MORE' enlaceBoton2='#' colorBoton3="purple" textoBoton3='Color'/>
               </div>
      default:
        return null
    }
  }
  return (
    <div>
      <Menu canviarTasca={setTascaSeleccionada} />
      {getTascaComponent()}
    </div>
  )
}

export default App
