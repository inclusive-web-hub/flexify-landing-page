import React from "react"

import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Pagetitle from "../Shared/Pagetitle"
import GameItemtem from "./GameItem"
import { AnimationOnScroll } from "react-animation-on-scroll"
import allItems from "../../data/items.json"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

const GameItems = () => {
  return (
    <section className="game-items-section badges shadow-blue" id="game-items">
      <div className="container">
        <Pagetitle title="In-Game Assets" subTitle="Items" />
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeInOut"
          animateOnce={true}
        >
          <div className="container-fluid">
            <Swiper
              className="swiper-portfolio s1"
              modules={[Autoplay]}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 5,
                },
              }}
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2500}
            >
              {allItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <GameItemtem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default GameItems
