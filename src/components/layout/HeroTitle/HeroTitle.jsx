import './HeroTitle.css'

const HeroTitle = ({title}) => {
  return (
    <section
    className="herotitle-container__main"
    id="herotitle-container__main">

        <p
        className="herotitle-p__text"
        id="herotitle-p__text">
            {title}
        </p>
    </section>
  )
}

export default HeroTitle