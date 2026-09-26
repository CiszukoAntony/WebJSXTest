import '../../../globals.scss'
import './contact.scss'
import HeroTitle from '../../../components/layout/HeroTitle/HeroTitle.jsx';
import { useEffect } from 'react'
import selfieImg from '../../../../public/images/francisco_selfie/selfieImage.jpg'

const Contact = () => {
    useEffect(() => {
        console.log("El usuario ha visitado la página de Contact");
    }, []);

  return (
    <main
    className="contact-webpage__main">

        <HeroTitle
        title="contact" />

        <section
        className="contact__main">

            <div
            className="contact-container__main">
                Formas para contactarme.

                <section
                className="contact__grid"
                id="contact__grid-contacts">

                    <div
                    className="contact__item"
                    id="contact__item-email">
                        <strong
                        className="contact__strong"
                        id="contact__strong-performance">
                            EMAIL
                        </strong>

                        <p>
                            Email: fplayersoffcial@gmail.com
                            </p>
                    </div>

                    <div
                    className="contact__item"
                    id="contact__item-phone">
                        <strong
                        className="contact__strong"
                        id="contact__strong-phone">
                            NUMERO DE TELEFONO
                        </strong>

                        <p>
                            Numero telefonico: 0412-TEST
                        </p>
                    </div>

                    <a
                    className="contact__item"
                    id="contact__item-webpage"
                    href="https://ciszukoantony.vercel.app">
                        <strong
                        className="contact__strong"
                        id="contact__strong-webpage"
                        href="https://ciszukoantony.vercel.app">
                            MI SITIO WEB
                        </strong>

                        <p>
                            Webpage:
                            <a href="https://ciszukoantony.vercel.app">
                            ciszukoantony.vercel.app
                            </a>
                        </p>
                    </a>
                </section>
            </div>

            <div className="contact-profile">
                <img
                    className="contact-profile__selfieImage"
                    id="contact__selfieImage"
                    src={selfieImg}
                    alt="Selfie Image"
                    width="200px"
                    draggable="false"
                    href="https://ciszukoantony.vercel.app" />

                <p className="contact-profile__text">
                    <strong>
                        ¡Hola!
                        </strong>
                        Soy Francisco Garcia. 
                        <em>
                            Contactame
                            </em>.
                </p>
            </div>
        </section>
    </main>
  )
}

export default Contact