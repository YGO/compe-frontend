import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { changeRoundToSort } from './player.module'

const NOT_CHANGE = 'NOT_CHANGE'

const mapStateToProps = state => ({
  rounds: state.adminApp.rounds,
})

const mapDispatchToProps = dispatch => ({
  onChangeRound: (id) => {
    if (id === NOT_CHANGE) return
    dispatch(changeRoundToSort(id))
  }
})

const RoundSelector = ({
                         rounds,
                         onChangeRound,
                       }) => (
  <select className='custom-select'
          onChange={e => onChangeRound(e.target.value)}>
    <option value={NOT_CHANGE}>並び順</option>
    {rounds.map(r =>
      <option key={`RoundSelector-${r.id}`} value={r.id}>{r.title}</option>
    )}
  </select>
)

RoundSelector.propTypes = {
  rounds: PropTypes.array.isRequired,
  onChangeRound: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundSelector)
