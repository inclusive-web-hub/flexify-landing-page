import React from "react"
import PropTypes from "prop-types"

const GameItemtem = ({ item }) => {
  return (
    <div className="img-box custom-box rounded data-background padding-30 text-left text-light shadow-blue border border-primary">
      <img src={item.img} alt="item" />
    </div>
  )
}

GameItemtem.propTypes = {
  item: PropTypes.object,
}

export default GameItemtem
