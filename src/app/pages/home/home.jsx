import '../../../globals.scss'
import './home.scss'
import HeroTitle from '../../../components/layout/HeroTitle/HeroTitle.jsx';
import { useEffect } from 'react'
import Modal from "../../../components/utils/Modal/Modal.jsx"

const Home = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Home");
    }, []);

    return (
        <main
        className="home-webpage__main"
        id="home-webpage__main">

            <HeroTitle
            className="home-hero__title"
            id="home-hero__title"
            title="home" />
            
            <section
            className="home__welcome-section"
            id="home__welcome-section">

                <strong
                className="home__welcome-text"
                id="home__welcome-text">
                    Bienvenido a JSXWebTest
                </strong>

                <br />

            </section>

            <img
            className="home__image-cat"
            id="home__image-cat"
            draggable="false"
            src="https://static.vecteezy.com/system/resources/thumbnails/045/911/254/small/a-cat-is-sleeping-stock-png.png"
            alt="gato rodando"
            title="Gatito rodando" />

            <Modal
            className="home-modal__main"
            id="home-modal__main"
            text_label="Gracias por visitar mi pagina :3"
            text_btn_close="cerrar"
            popover="auto"
            draggable="false" />

            <button
            type="button"
            className="home-modal__btn"
            id="home-modal__btn"
            draggable="false"
            onClick={() => {
                const modal = document.getElementById('home-modal__main')

                if (!modal) return

                modal.showPopover?.()
            }}>

                <span
                className="home-modal-btn__text"
                id="home-modal-btn__text">

                    Presiona <strong>AQUI</strong> para un secreto :D
                </span>
            </button>

        </main>
    )
}

export default Home