import '../../../globals.scss'
import './home.scss'
import HeroTitle from '../../../components/layout/HeroTitle/HeroTitle.jsx';
import { useEffect } from 'react'

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

    </main>
  )
}

export default Home