import "./WhyChooseUs.css"

function WhyChooseUs({ features }) {
  return (
    <section className="why-us" id="why-us">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">We make your travel experience simple and memorable</p>
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
