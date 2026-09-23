import "./Destinations.css"

function Destinations({ destinations }) {
  return (
    <section className="destinations" id="destinations">
      <h2 className="section-title">Popular Destinations</h2>
      <p className="section-subtitle">Explore the most loved places around the world</p>
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div className="dest-card" key={dest.id}>
            <img src={dest.image} alt={dest.name} className="dest-image" />
            <div className="dest-info">
              <h3>{dest.name}</h3>
              <p>{dest.country}</p>
              <span className="dest-rating">★ {dest.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Destinations
