import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

/**
 * @typedef {Object} IconType
 * @property {Number} id
 * @property {String} link
 * @property {String} icon
 */

/**
 * @typedef {Object} ItemType
 * @property {String} img
 * @property {String} name
 * @property {String} position
 * @property {IconType[]} socials
 */

/**
 *
 * @param {ItemType} item
 * @returns {JSX.Element}
 */
const TeamItem = (item) => {
  return (
    <div className="team-box custom-box rounded text-light shadow-blue border border-primary mb-5">
      <div className="image">
        <img src={item.img} alt="team member" loading="lazy" />
      </div>
      <div className="content">
        <div className="h8">
          <span>{item.name}</span>
        </div>
        <p>{item.position}</p>
        <ul className="social">
          {item.socials.map((icon) => (
            <li key={icon.id}>
              <Link to={icon.link}>
                <i className={icon.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

TeamItem.propTypes = {
  item: PropTypes.object,
}

export default TeamItem
