import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { changeSortDay } from './player.module'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onChangeSortDay: () => {
    dispatch(changeSortDay())
  }
})

const DaySelector = ({onChangeSortDay}) => (
  <select className='custom-select'
          onChange={e => onChangeSortDay(e.target.value)}>
    <option value='1'>並び順</option>
    <option value='1'>1日目</option>
    <option value='2'>2日目</option>
  </select>
)

DaySelector.propTypes = {
  onChangeSortDay: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySelector)
