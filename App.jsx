import Navbar from "./Navbar"
import Hero from "./Hero"
import Destinations from "./Destinations"
import WhyChooseUs from "./WhyChooseUs"
import Footer from "./Footer"

const sampleDestinations = [
  { id: 1, name: "Hunza Valley", country: "Pakistan", rating: 4.9, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
  { id: 2, name: "Santorini", country: "Greece", rating: 4.8, image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800" },
  { id: 3, name: "Kyoto", country: "Japan", rating: 4.9, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" }
]

const sampleFeatures = [
  { id: 1, icon: "✈️", title: "Best Guides", description: "Expert local guides for memorable experiences." },
  { id: 2, icon: "💳", title: "Affordable Prices", description: "Competitive rates without hiding extra costs." },
  { id: 3, icon: "🎧", title: "24/7 Support", description: "Our team is available round the clock to assist you." }
]

export default function App() {
  const siteName = "WanderWay"

  return (
    <div>
      <Navbar siteName={siteName} />
      <Hero 
        title="Discover Your Next Adventure" 
        subtitle="Plan and book your perfect trip with expert advice and curated travel guides." 
      />
      <Destinations destinations={sampleDestinations} />
      <WhyChooseUs features={sampleFeatures} />
      <Footer siteName={siteName} />
    </div>
  )
}