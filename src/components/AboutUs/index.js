import React from "react"
import Pagetitle from "../Shared/Pagetitle"
import { AnimationOnScroll } from "react-animation-on-scroll"

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
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
                  Experience the ultimate experience of freedom and inclusivity
                  with Flexify. Our extension has been expertly designed to
                  provide a smooth experience, no matter what physical abilities
                  you have. This ultimate extension has been carefully developed
                  so that all users can interact digitally without any obstacles
                  or hindrances, making it easier than ever before!
                </p>
                <p>
                  With this powerful extension at your disposal, individuals of
                  any disability, visual impairments, or cognitive impediments,
                  are guaranteed access to digital content they never imagined
                  possible.
                </p>
                <p>
                  Download our progressive add-on right now and unlock your full
                  potential while working hard, learning new things or enjoying
                  yourself online!
                </p>
              </div>
              <div className="about_us_img about_us_img_left">
                <span>
                  <img
                    src="./images/items/left-img.png"
                    alt="left"
                    loading="lazy"
                  />
                </span>
              </div>
              <div className="about_us_img about_us_img_right">
                <span>
                  <img
                    src="./images/items/right-img.png"
                    alt="right"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default AboutUs
