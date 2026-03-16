import './App.css'
import { useState } from 'react'
import Ejercicio1 from './componentes/tasca1/Ejercicio1'
import Ejercicio2 from './componentes/tasca1/Ejercicio2'
import Ejercicio3 from './componentes/tasca1/Ejercicio3'
import Ejercicio4 from './componentes/tasca1/Ejercicio4'
import Ejercicio2_1 from './componentes/tasca2/Ejercicio2_1'
import Ejercicio2_2 from './componentes/tasca2/Ejercicio2_2'
import Menu from './Menu'

function App() {
  
  const [tascaSeleccionada, setTascaSeleccionada] = useState('tasca 1')

  function getTascaComponent() {
    switch (tascaSeleccionada) {
      case 'tasca 1':
        return <Ejercicio1 />
      case 'tasca 2':
        return <Ejercicio2 />
      case 'tasca 3':
        return <Ejercicio3 />
      case 'tasca 4':
        return <Ejercicio4 />
      case 'tasca 2.1':
        return <Ejercicio2_1 />
      case 'tasca 2.2':
        return <Ejercicio2_2 />
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
