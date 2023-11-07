import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Destinations from "../components/Destinations"
import Search from "../components/Search"
import Selects from "../components/Selects"
import Carousel from "../components/Carousel"
function HomePage() {
  return (
    <div>
       <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  )
}

export default HomePage