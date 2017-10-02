import React from 'react'
import PropTypes from 'prop-types'

const NOT_CHANGE = 'NOT_CHANGE'

const RoundSelector = ({
                         rounds,
                         onChangeRound,
                       }) => (
  <select className='custom-select'
          onChange={e => {
            if (e.target.value === NOT_CHANGE) return
            onChangeRound(e.target.value)
          }}>
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

export default RoundSelector
