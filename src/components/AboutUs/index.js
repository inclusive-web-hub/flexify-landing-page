import React from "react"
import Pagetitle from "../Shared/Pagetitle"
import { AnimationOnScroll } from "react-animation-on-scroll"
import itemsData from "../../data/services.json"
import Item from "../Items"

const AboutUs = () => {
  return (
    <section className="about-us-section shadow-blue" id="about">
      <div className="container">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeInOut"
          animateOnce={true}
        >
          <Pagetitle title="About Us" subTitle=" Story" />
          <div className="row fix-spacing">
            <div className="about_us_content">
              <div className="about_us_text">
                <p>
                  Hill Climb ThirdWeb is a web3 Hill Climb Clone game Powered by
                  ThirdWeb GamingKit and ContractKit.
                </p>
                <p>
                  Here, you can choose between different cars and levels for a
                  chance to claim rare NFTs. So what are you waiting for? Start
                  playing, now!
                </p>
              </div>
              <div className="about_us_img about_us_img_left">
                <span>
                  <img src="./images/items/3.png" alt="Motocycle" />
                </span>
              </div>
              <div className="about_us_img about_us_img_right">
                <span>
                  <img src="./images/items/9.png" alt="Jeep" />
                </span>
              </div>
            </div>
            {itemsData.map((item) => (
              <div className="col-md-4 tilt-effect" key={item.id}>
                <Item item={item} />
              </div>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default AboutUs
