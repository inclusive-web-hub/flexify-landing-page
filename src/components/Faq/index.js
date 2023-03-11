import Pagetitle from "../Shared/Pagetitle"
import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import data from "../../data/faq.json"
import AccordionItem from "./AccordionItem"

const Faq = () => {
  return (
    <section className="faq-section shadow-blue pb-5" id="faq">
      <div className="container">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeInOut"
          animateOnce={true}
        >
          <div className="row">
            <div className="col-md-12">
              <Pagetitle title="Frequently Asked Questions" subTitle="Q&A" />
            </div>
            <div className="col-md-12 text-center">
              <img
                className="mb-4 faq-left"
                src="./images/faq.png"
                alt="faq left"
                loading="lazy"
              />
              <div className="text-left accordion-items">
                {data.map((item) => (
                  <div className="mb-4" key={item.id}>
                    <AccordionItem {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default Faq
