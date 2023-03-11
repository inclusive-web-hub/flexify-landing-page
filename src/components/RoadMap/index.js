import Pagetitle from "../Shared/Pagetitle"
import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import RoadMapItem from "./RoadMapItem"
import data from "../../data/roadmap.json"

const RoadMap = () => {
  return (
    <section className="roadmap-section shadow-blue" id="roadmap">
      <div className="container text-center">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeInOut"
          animateOnce={true}
        >
          <Pagetitle title="Discover our Roadmap" subTitle="Our Goals" />
          <img
            className="roadmap-top"
            src="./images/roadmap-top.png"
            alt="roadmap top"
            loading="lazy"
          />
          <div className="text-left roadmap-card-list">
            <div className="roadmap-divider">
              <img
                src="./images/roadmap-divider.png"
                alt="roadmap divider"
                loading="lazy"
              />
            </div>
            <div className="row">
              {data?.map((item, idx) => (
                <div key={idx} className="col-md-6">
                  <RoadMapItem id={idx} {...item} />
                </div>
              ))}
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default RoadMap
