import React from "react"
import Pagetitle from "../Shared/Pagetitle"
import { AnimationOnScroll } from "react-animation-on-scroll"
import itemsData from "../../data/features.json"
import Item from "../Items"

const Features = () => {
  return (
    <section className="features-section shadow-blue" id="features">
      <div className="container mb-5">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeInOut"
          animateOnce={true}
        >
          <Pagetitle title="Our Services" subTitle=" Features" />
          <div className="row fix-spacing">
            {itemsData.map((item) => (
              <div
                className="col-xs-1 col-ms-2 col-md-3 tilt-effect m-5 text-center align-items-center justify-content-center"
                key={item.id}
              >
                <Item item={item} />
              </div>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default Features
