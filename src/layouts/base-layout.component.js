import React from 'react'
import PropTypes from 'prop-types'

export const BaseLayout = ({ children }) => (
  <div>{children}</div>
)
BaseLayout.propTypes = {
  children: PropTypes.node,
}

export default BaseLayout
