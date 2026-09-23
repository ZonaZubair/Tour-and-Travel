import "./Hero.css"

function Hero({ title, subtitle }) {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-btn">Explore Now</button>
      </div>
    </section>
  )
}

export default Hero
