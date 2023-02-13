import Header from "../../components/Header"
import Banner from "../../components/Banner"
import AboutUs from "../../components/AboutUs"
import GameItems from "../../components/GameItems"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div className="counter-scroll fixed home">
      <div id="mobile-menu-overlay" />
      <Header />
      <div id="content" className="content">
        <Banner />
        <AboutUs />
        <GameItems />
        <Footer />
      </div>
    </div>
  )
}

export default Home
