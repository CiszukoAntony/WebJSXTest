import '../../../globals.css'
import './form.css'
import HeroTitle from '../../../components/layout/HeroTitle/HeroTitle.jsx';
import { useEffect } from 'react'

const Form = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Form");
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
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
    <main
    className="form-webpage__main"
    onSubmit={handleSubmit}
    onReset={handleReset}>

        <HeroTitle
        title="form" />

        <form
        className="form__main">

            <fieldset
            className="form__fieldset">

                <legend
                className="form__legend">
                    Formulario
                </legend>

                <label
                className="form__label"
                htmlFor="form__input-firstname">
                    Nombre
                </label>

                <input
                required
                type="text"
                name="firstname"
                className="form__input"
                id="form__input-firstname"
                placeholder="First Name"
                minLength={3}
                maxLength={35} />

                <br />

                <label
                className="form__label"
                htmlFor="form__input-lastname">
                    Apellido
                </label>

                <input
                required
                type="text"
                name="lastname"
                className="form__input"
                id="form__input-lastname"
                placeholder="Last Name"
                minLength={3}
                maxLength={35} />

                <br />
                
                <label
                className="form__label"
                htmlFor="form__input-phonenumber">
                    Numero de Telefono
                </label>

                <input
                required
                type="tel"
                name="phonenumber"
                className="form__input"
                id="form__input-phonenumber"
                placeholder="+1 1000-1000"
                minLength={8}
                maxLength={20} />

                <br />

                <label
                className="form__label"
                htmlFor="form__input-email">
                    Correo electronico
                </label>

                <input
                required
                type="email"
                name="email"
                className="form__input"
                id="form__input-email"
                placeholder="example@email.com"
                minLength={2}
                maxLength={100} />

                <br />

                <label
                className="form__label"
                htmlFor="form__input-color">
                    Color favorito
                </label>

                <input
                type="color"
                name="colorFav"
                className="form__input"
                id="form__input-color" />

                <br />

                <label
                className="form__label"
                htmlFor="form__input-date">
                    Fecha de nacimiento
                </label>

                <input
                type="date"
                name="date"
                className="form__input"
                id="form__input-date" />

                <br />

                <label
                className="form__label"
                htmlFor="form__input-secretmsg">
                    Mensaje Secreto
                </label>

                <input
                type="password"
                name="secretmsg"
                className="form__input"
                id="form__input-secretmsg"
                placeholder="Private Message"
                minLength={2}
                maxLength={1000} />

                <br />

                <label
                className="form__label">
                    Género
                </label>

                <div
                className="form__radio-group">
                    <input
                    type="radio"
                    name="genere"
                    className="form__radio"
                    id="form__input-genere-man"
                    value="man" />

                    <label
                    className="form__label form__label--inline"
                    htmlFor="form__input-genere-man">
                        Masculino
                    </label>

                    <input
                    type="radio"
                    name="genere"
                    className="form__radio"
                    id="form__input-genere-woman"
                    value="woman" />

                    <label
                    className="form__label form__label--inline"
                    htmlFor="form__input-genere-woman">
                        Femenino
                    </label>
                </div>

                <br />

                <button
                type="submit"
                className="form__button form__button--accept"
                id="form__button-accept">
                    Aceptar
                </button>

                <button
                type="reset"
                className="form__button form__button--cancel"
                id="form__button-cancel">
                    Cancelar
                </button>

            </fieldset>
        </form>
    </main>
  )
}

export default Form