import React from 'react'
import PropTypes from 'prop-types'
import PlayerListItemContainer from './player-list-item.container'
import RoundSelectorContainer from './round-selector.container'

const PlayerList = ({players, pars, loading}) => (
  <div>
    <h2>出場選手一覧</h2>
    <div className='row mb-2'>
      <div className='col-auto mr-auto'/>
      <div className='col-auto'>
        <RoundSelectorContainer/>
      </div>
    </div>
    {players.map(p =>
      <PlayerListItemContainer key={p.id} pars={pars} loading={loading} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  pars: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default PlayerList
