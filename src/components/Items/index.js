import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"

function Item({ item }) {
  const { title, content, icon, color, contentColor } = item
  const hexToRgb = (hex) => {
    const temp = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16))
    return temp.join(",")
  }

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOut="animate__fadeInOut"
      animateOnce={true}
    >
      <div
        className={
          contentColor === "light"
            ? "pt-5 custom-box rounded data-background padding-30 text-center text-light shadow-blue border border-primary"
            : "custom-box rounded data-background padding-30 text-center shadow-blue"
        }
        data-color="#6C6CE5"
        style={{
          background: color,
          boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(color)}, 0.5)`,
        }}
      >
        <h2>{icon}</h2>
        <h3 className="mt-4">{title}</h3>
        <p className="mb-5 mt-5">{content}</p>
      </div>
    </AnimationOnScroll>
  )
}

export default Item
