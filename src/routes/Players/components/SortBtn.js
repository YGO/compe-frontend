import React from 'react'
import PropTypes from 'prop-types'

const RefreshBtn = ({ changePlayerByDay }) => (
  <select className='select-day' onChange={e => changePlayerByDay(e.target.value)}>

            <option defaultValue value='day1'>Day 1</option>
            <option value='day2'>Day 2</option>
          </select>
)

RefreshBtn.propTypes = {
  changePlayerByDay: PropTypes.func.isRequired,
}

export default RefreshBtn
