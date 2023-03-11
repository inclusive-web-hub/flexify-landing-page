import Header from "../../components/Header"
import Banner from "../../components/Banner"
import AboutUs from "../../components/AboutUs"
import Features from "../../components/Features"
import RoadMap from "../../components/RoadMap"
import Faq from "../../components/Faq"
import Team from "../../components/Team"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div className="counter-scroll fixed home">
      <div id="mobile-menu-overlay" />
      <Header />
      <div id="content" className="content">
        <Banner />
        <AboutUs />
        <Features />
        <RoadMap />
        <Faq />
        <Team />
        <Footer />
      </div>
    </div>
  )
}

export default Home
