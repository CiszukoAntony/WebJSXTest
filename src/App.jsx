import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.css'
import './components/layout/layout.css'
import Header from './components/layout/Header/Header.jsx'
import Footer from './components/layout/Footer/Footer.jsx'
import Information from './app/pages/information/information.jsx'
import Form from './app/pages/form/form.jsx'
import Home from './app/pages/home/home.jsx'

const App = () => {
  return (
    <BrowserRouter
    basename="/WebJSXTest">

      {/* Contenedor principal de diseño */}

      <div
      className="app-container__main"
      id="app-container__main">

        <Header />

        {/* Contenido dinámico que empuja el footer hacia abajo */}

        <div
        className="main-content">

          <Routes>
            <Route
            path=" "
            element={<Home />} />

            <Route
            path="/"
            element={<Home />} />

            <Route
            path="/home"
            element={<Home />} />

            <Route
            path="/info"
            element={<Information />} />
            
            <Route
            path="/form"
            element={<Form />} />

          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App