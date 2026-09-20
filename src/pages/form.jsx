import '../globals.css'
import HeroTitle from '../components/HeroTitle';
import { useEffect } from 'react'

const Form = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Form");
    }, []);

    const handleSubmit = (event) => {
            event.preventDefault(); // Evita que la página se recargue por defecto
            
            // Captura todos los valores del formulario usando los "name" o "id"
            const formData = new FormData(event.target);
            const datosFormulario = Object.fromEntries(formData.entries());

            console.log("Datos enviados:", datosFormulario);
            alert("¡Formulario enviado con éxito! Revisa la consola.");
        };
    
    const handleReset = () => {
            console.log("Datos reiniciados.");
            alert("¡Formulario reiniciado con éxito! Revisa la consola.");
        };
    
  return (
    <main className="form-webpage-class" id="webpage"
    onSubmit={handleSubmit}
    onReset={handleReset}>

        <HeroTitle title="form" />

        <form className="form-container-class" id="form-container-id">
            <fieldset>
                <legend className="form-container-legend-class" id="form-container-legend-id">
                    Formulario
                    </legend>

                <label htmlFor="form-input-firstname-id">
                    Nombre
                    </label>
                <input required type="text" name="firstname" className="form-input-class" id="form-input-firstname-id" placeholder="First Name" minLength={3} maxLength={35} />
                <br />

                <label htmlFor="form-input-lastname-id">
                    Apellido
                    </label>
                <input required type="text" name="lastname" className="form-input-class" id="form-input-lastname-id" placeholder="Last Name" minLength={3} maxLength={35} />
                <br />
                
                <label htmlFor="form-input-phonenumber-id">
                    Numero de Telefono
                    </label>
                <input required type="tel" name="phonenumber" className="form-input-class" id="form-input-phonenumber-id" placeholder="+1 1000-1000" minLength={8} maxLength={20} />
                <br />

                <label htmlFor="input">
                    Correo electronico
                    </label>
                <input required type="email" name="email" className="form-input-class" id="form-input-email-id" placeholder="example@email.com" minLength={2} maxLength={100} />
                <br />

                <label htmlFor="form-input-color-id">
                    Color favorito
                    </label>
                <input type="color" name="colorFav" className="form-input-class" id="form-input-color-id" />
                <br />

                <label htmlFor="form-input-date-id">
                    Fecha de nacimiento
                    </label>
                <input type="date" name="date" className="form-input-class" id="form-input-date-id" />
                <br />

                <label htmlFor="form-input-secretmsg-id">
                    Mensaje Secreto
                    </label>
                <input type="password" name="secretmsg" className="form-input-class" id="form-input-secretmsg-id" placeholder="Private Message" minLength={2} maxLength={1000} />
                <br />

                <label>Género</label>
                    <div className="radio-group">
                        <input type="radio" name="genere" className="form-input-class" id="form-input-genere-man-id"/>
                        <label htmlFor="form-input-genere-man-id">
                            Masculino
                            </label>

                        <input type="radio" name="genere" className="form-input-class" id="form-input-genere-woman-id"/>
                        <label htmlFor="form-input-genere-woman-id">
                            Femenino
                            </label>
                    </div>
                <br />

                <button type="submit" className="form-container-btn-class" id="form-container-acceptbtn-id">
                    Aceptar
                    </button>
                <button type="reset" className="form-container-btn-class" id="form-container-cancelbtn-id">
                    Cancelar
                    </button>
            </fieldset>
        </form>
    </main>
  )
}

export default Form