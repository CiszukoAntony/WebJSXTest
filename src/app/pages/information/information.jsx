import '../../../globals.css'
import './information.css'
import HeroTitle from '../../../components/layout/HeroTitle/HeroTitle.jsx';
import { useEffect } from 'react'

const Information = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Información");
    }, []);

  return (
    <main
    className="information-webpage__main"
    id="information-webpage__main">

        <HeroTitle
        className="information-hero__title"
        id="information-hero__title"
        title="information" />
        
        <section
        className="information__container"
        id="information__container">

            <h2
            className="information__title"
            id="information__title-welcome">
                Bienvenido a nuestro espacio digital
            </h2>

            <p
            className="information__paragraph"
            id="information__paragraph-intro">
                Este proyecto ha sido desarrollado con un enfoque moderno y modular utilizando tecnologías 
                actuales para garantizar una experiencia rápida, limpia y eficiente.
            </p>
            
            <h3
            className="information__subtitle"
            id="information__subtitle-find">
                ¿Qué encontrarás aquí?
            </h3>

            <ul
            className="information__list"
            id="information__list-find">

                <li
                className="information__item"
                id="information__item-optimized">
                    <strong
                    className="information__strong"
                    id="information__strong-optimized">
                        Estructura optimizada:
                    </strong> Diseñado bajo estándares limpios de desarrollo frontend.
                </li>

                <li
                className="information__item"
                id="information__item-fluid">
                    <strong
                    className="information__strong"
                    id="information__strong-fluid">
                        Navegación fluida:
                    </strong> Transiciones rápidas y una interfaz intuitiva entre páginas.
                </li>

                <li
                className="information__item"
                id="information__item-updates">
                    <strong
                    className="information__strong"
                    id="information__strong-updates">
                        Actualizaciones constantes:
                    </strong> Mejoras continuas en rendimiento y usabilidad.
                </li>

            </ul>
            
            <h2
            className="information__title"
            id="information__title-about">
                Acerca de WebJSXTest
            </h2>

            <p
            className="information__paragraph"
            id="information__paragraph-about-first">
                <strong
                className="information__strong"
                id="information__strong-brand">
                    WebJSXTest
                </strong> es una plataforma web moderna y escalable, construida desde cero utilizando las tecnologías más eficientes del ecosistema frontend actual. Este proyecto nace con la visión de consolidar un espacio digital rápido, intuitivo y respaldado por una arquitectura de componentes limpia.
            </p>

            <p
            className="information__paragraph"
            id="information__paragraph-about-second">
                Nuestra prioridad principal es ofrecer una experiencia de usuario fluida, garantizando tiempos de carga mínimos, una navegación totalmente adaptativa y un diseño visual coherente que prioriza la comodidad y el rendimiento técnico.
            </p>
            
            <h3
            className="information__subtitle"
            id="information__subtitle-pillars">
                Nuestros Pilares Técnicos
            </h3>

            <section
            className="information__grid"
            id="information__grid-pillars">

                <div
                className="information__item"
                id="information__item-performance">
                    <strong
                    className="information__strong"
                    id="information__strong-performance">
                        Rendimiento Óptimo:
                    </strong>

                    <p>
                        Carga rápida y transiciones instantáneas entre las diferentes vistas de la aplicación.
                        </p>
                </div>

                <div
                className="information__item"
                id="information__item-modularity">
                    <strong
                    className="information__strong"
                    id="information__strong-modularity">
                        Modularidad y Limpieza:
                    </strong>

                    <p>
                        Código estructurado bajo buenas prácticas, facilitando su mantenimiento y futura expansión.
                    </p>
                </div>

                <div
                className="information__item"
                id="information__item-minimalism">
                    <strong
                    className="information__strong"
                    id="information__strong-minimalism">
                        Diseño Minimalista:
                    </strong>

                    <p>
                        Una interfaz limpia centrada en la usabilidad y en una experiencia visual agradable para cualquier usuario.
                    </p>
                </div>

            </section>

        </section>
    </main>
  )
}

export default Information