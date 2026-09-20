import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Information from './pages/information'
import Form from './pages/form'
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter basename="/WebJSXTest">
      {/* Contenedor principal de diseño */}
      <div className="app-container">
        <Header />
        
        {/* Contenido dinámico que empuja el footer hacia abajo */}
        <div className="main-content">
          <Routes>
            <Route path=" " element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/info" element={<Information />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App