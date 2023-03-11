import React from "react"

function Item({ item }) {
  const { title, content, imageBefore, imageAfter, color, contentColor } = item
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
    <div
      className={
        contentColor === "light"
          ? "feature custom-box rounded data-background padding-30 text-center text-light shadow-blue border border-primary"
          : "feature custom-box rounded data-background padding-30 text-center shadow-blue"
      }
      data-color="#6C6CE5"
      style={{
        background: color,
        boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(color)}, 0.5)`,
      }}
    >
      <div className="twentytwenty-container">
        <img src={imageBefore} loading="lazy" alt="before" />
        <img src={imageAfter} loading="lazy" alt="after" />
      </div>
      <h3 className="mt-3 text-primary">{title}</h3>
      <p className="mb-2 mt-2">{content}</p>
    </div>
  )
}

export default Item
