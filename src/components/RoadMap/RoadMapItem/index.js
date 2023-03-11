import React from "react"

const RoadMapItem = ({ id, icon, title, items }) => {
  return (
    <div
      className={
        id % 2 === 0
          ? `roadmap-card-item roadmap-card-item-odd`
          : `roadmap-card-item roadmap-card-item-even`
      }
    >
      <div className="roadmap-card-box"></div>
      <div className="roadmap-card-content rounded shadow-blue border border-primary">
        <h3>
          {title}{" "}
          <span>
            <img src={icon} alt="roadmap" loading="lazy" />
          </span>
        </h3>
        <ul>
          {items.length >= 0 &&
            items.map((listitem, id) => (
              <li key={id}>
                {"• "} {listitem}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default RoadMapItem
