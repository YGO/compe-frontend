import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { changeSortDay } from '../modules/players'

const mapStateToProps = state => ({
  loading: state.playersApp.loading
})

const mapDispatchToProps = {
  changeSortDay: changeSortDay
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DaySelector)
