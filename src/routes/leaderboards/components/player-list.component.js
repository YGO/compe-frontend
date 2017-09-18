import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerEdit from './player-edit.component'
import PlayerShow from './player-show.component'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  const sortDay = state.leaderBoards.sortDay

  return {
    players: state.leaderBoards.players,
    playersCompare: (a, b) => {
      const k = `sort_order_day${sortDay}`
      return a[k] > b[k] ? 1 : -1
    }
  }
}

function Player (props) {
  if (props.isEditing) {
    return <PlayerEdit/>
  }
  return <PlayerShow {...props} />
}

const PlayerList = ({players, playersCompare}) => (
  <div>
    {players.sort(playersCompare).map(p =>
      <Player key={p.id} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  playersCompare: PropTypes.func.isRequired,
}

Player.propTypes = {
  isEditing: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
