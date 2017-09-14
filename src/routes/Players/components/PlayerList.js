import React from 'react'
import PlayerEditContainer from '../containers/PlayerEditContainer'
import PlayerShowContainer from '../containers/PlayerShowContainer'
import PropTypes from 'prop-types'

function Player (props) {
  console.log('aaaa');
  if (props.isEditing) {
    return <PlayerEditContainer />
  }
  return <PlayerShowContainer {...props} />
}

const PlayerList = ({ players }) => (
  <div className="div_parent">
    {players.map(p =>
      <Player key={p.id} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

Player.propTypes = {
  isEditing: PropTypes.bool.isRequired,
}

export default PlayerList
