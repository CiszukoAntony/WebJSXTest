import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Information from './pages/information'
import Form from './pages/form'

const App = () => {
  return (
    <BrowserRouter>
      {/* Contenedor principal de diseño */}
      <div className="app-container">
        <Header />
        
        {/* Contenido dinámico que empuja el footer hacia abajo */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<p>Bienvenido a WEBJSXTEST!</p>} />
            <Route path="/info" element={<Information />} />
            <Route path="/form" element={<p><Form /></p>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App