import '../globals.css'
import HeroTitle from '../components/HeroTitle';
import { useEffect } from 'react'

console.log("Estas en information.")

const Information = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Información");
    }, []);
  return (
    <div className="information-webpage-class" id="webpage">
        <HeroTitle title="information" />
        <div className="basic-info-container">
            <h2>Bienvenido a nuestro espacio digital</h2>
            <p>
                Este proyecto ha sido desarrollado con un enfoque moderno y modular utilizando tecnologías 
                actuales para garantizar una experiencia rápida, limpia y eficiente.
            </p>
            
            <h3>¿Qué encontrarás aquí?</h3>
            <ul>
                <li><strong>Estructura optimizada:</strong> Diseñado bajo estándares limpios de desarrollo frontend.</li>
                <li><strong>Navegación fluida:</strong> Transiciones rápidas y una interfaz intuitiva entre páginas.</li>
                <li><strong>Actualizaciones constantes:</strong> Mejoras continuas en rendimiento y usabilidad.</li>
            </ul>
            
            <h2>Acerca de WebJSXTest</h2>
            <p>
                <strong>WebJSXTest</strong> es una plataforma web moderna y escalable, construida desde cero utilizando las tecnologías más eficientes del ecosistema frontend actual. Este proyecto nace con la visión de consolidar un espacio digital rápido, intuitivo y respaldado por una arquitectura de componentes limpia.
            </p>
            <p>
                Nuestra prioridad principal es ofrecer una experiencia de usuario fluida, garantizando tiempos de carga mínimos, una navegación totalmente adaptativa y un diseño visual coherente que prioriza la comodidad y el rendimiento técnico.
            </p>
            
            <h3>Nuestros Pilares Técnicos</h3>
            <ul>
                <li><strong>Rendimiento Óptimo:</strong> Carga rápida y transiciones instantáneas entre las diferentes vistas de la aplicación.</li>
                <li><strong>Modularidad y Limpieza:</strong> Código estructurado bajo buenas prácticas, facilitando su mantenimiento y futura expansión.</li>
                <li><strong>Diseño Minimalista:</strong> Una interfaz limpia centrada en la usabilidad y en una experiencia visual agradable para cualquier usuario.</li>
            </ul>
        </div>
    </div>
  )
}

export default Information