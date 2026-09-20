import '../globals.css'
import HeroTitle from '../components/HeroTitle';
import { useEffect } from 'react'

console.log("Estas en Home.")

const Home = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Home");
    }, []);

  return (
    <main className="home-webpage-class" id="webpage">

        <HeroTitle title="home" />
        
        <section className="welcome-text-class" id="welcome-text-id">
            <strong>
                Bienvenido a JSXWebTest
                </strong>
            <br />
        </section>
        <img className="gatito-rodando-class" id="gatito-rodando-id" draggable="false" src="https://static.vecteezy.com/system/resources/thumbnails/045/911/254/small/a-cat-is-sleeping-stock-png.png" alt="gato rodando" title="Gatito rodando" img />
    </main>
  )
}

export default Home