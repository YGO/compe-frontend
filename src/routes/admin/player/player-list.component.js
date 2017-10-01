import React from 'react'
import PropTypes from 'prop-types'
import PlayerListItemContainer from './player-list-item.container'
import RoundSelectorContainer from './round-selector.container'

const PlayerList = ({entries, pars, loading}) => (
  <div>
    <h2>出場選手一覧</h2>
    <div className='row mb-2'>
      <div className='col-auto mr-auto'/>
      <div className='col-auto'>
        <RoundSelectorContainer/>
      </div>
    </div>
    {entries.map(e =>
      <PlayerListItemContainer key={e.id} pars={pars} loading={loading} {...e} />
    )}
  </div>
)

PlayerList.propTypes = {
  entries: PropTypes.array.isRequired,
  pars: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default PlayerList
