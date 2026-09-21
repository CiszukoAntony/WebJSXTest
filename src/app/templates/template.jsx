import '../globals.css'
import HeroTitle from '../components/HeroTitle';
import { useEffect } from 'react'

const TemplateWebsite = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Template");
    }, []);

  return (
    <main>
        <HeroTitle />
    </main>
  )
}

export default TemplateWebsite