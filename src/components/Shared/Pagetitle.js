import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"

function Pagetitle({ title, subTitle }) {
  return (
    <>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOut="animate__fadeInOut"
        animateOnce={true}
      >
        <div className="section-title-div text-center">
          {subTitle && (
            <h3>
              <img
                src="./images/shape_title2.svg"
                alt="section title"
                loading="lazy"
              />
              {subTitle}{" "}
              <img
                src="./images/shape_title1.svg"
                alt="section title"
                loading="lazy"
              />{" "}
            </h3>
          )}
          <h1 className="section-title lt-sp04 text-center text-white">
            {title}
          </h1>
        </div>
      </AnimationOnScroll>
      <div className="spacer" data-height="60"></div>
    </>
  )
}

export default Pagetitle
