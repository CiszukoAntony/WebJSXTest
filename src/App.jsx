import './App.css'
// Importas el componente (la extensión .jsx al final es opcional, se suele omitir)
import CopyrightComp from './components/copyrightcomp'

let AppName = "WebJSXTest"

const App = () => {
  return (
    <div>
        <p>{AppName}</p>
        /* Aquí renderizas tu componente modularizado */
        <CopyrightComp />
    </div>
  )
}

export default App