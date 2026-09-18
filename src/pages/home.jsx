import '../globals.css'
import HeroTitle from '../components/HeroTitle';
import { useEffect } from 'react'

console.log("Estas en Home.")

const Home = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Home");
    }, []);
  return (
    <div className="home-webpage-class" id="webpage">
        <HeroTitle title="home" />
        <p>
            Bienvenido a WEBJSXTEST!
            </p>
    </div>
  )
}

export default Home