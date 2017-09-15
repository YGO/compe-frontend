import React from 'react'
import PropTypes from 'prop-types'

const DaySelector = ({ changeSortDay }) => (
  <select className='select-day'
    onChange={e => changeSortDay(e.target.value)}>
    <option value='1'>1日目</option>
    <option value='2'>2日目</option>
  </select>
)

DaySelector.propTypes = {
  changeSortDay: PropTypes.func.isRequired,
}

export default DaySelector
