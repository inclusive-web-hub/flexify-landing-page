import React from "react"
import PropTypes from "prop-types"
import { Accordion } from "react-bootstrap-accordion"

/**
 * @typedef {Object} QuestionType
 * @property {Number} id
 * @property {String} title
 * @property {Boolean} show
 * @property {String} content
 */

/**
 *
 * @param {QuestionType} item
 * @returns {JSX.Element}
 */
const AccordionItem = (item) => {
  return (
    <Accordion key={item.id} title={item.title} show={item.show}>
      <p className="toggle-content">{item.content}</p>
    </Accordion>
  )
}

AccordionItem.propTypes = {
  item: PropTypes.object,
}

export default AccordionItem
