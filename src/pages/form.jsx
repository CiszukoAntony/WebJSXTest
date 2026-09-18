import '../globals.css'
import HeroTitle from '../components/HeroTitle';
import { useEffect } from 'react'

const Form = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Form");
    }, []);

  return (
    <div className="form-webpage-class" id="webpage">
        <HeroTitle title="form" />
        <p>
            Formulario Page.
            </p>
    </div>
  )
}

export default Form