import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerShow from './leaderboard-show.component'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  const sortDay = state.leaderBoards.sortDay

  return {
    players: state.leaderBoards.players
  }
}

function Player (props) {
  return <PlayerShow {...props} />
}

const PlayerList = ({players}) => (
  <div>
    {players.map(p =>
      <Player key={p.id} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

Player.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
