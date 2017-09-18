import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { changeSortDay } from '../modules/player.module'

const mapStateToProps = state => ({
  loading: state.adminPlayers.loading
})

const mapDispatchToProps = {
  changeSortDay: changeSortDay
}

const DaySelector = ({changeSortDay}) => (
  <select className='custom-select'
          onChange={e => changeSortDay(e.target.value)}>
    <option value='1'>並び順</option>
    <option value='1'>1日目</option>
    <option value='2'>2日目</option>
  </select>
)

DaySelector.propTypes = {
  changeSortDay: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySelector)
