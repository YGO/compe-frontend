import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerShow from './leaderboard-show.component'
import { calcTotalForListAndSort } from '../../../services/score.service'

const mapDispatchToProps = {}
const mapStateToProps = state => {
  return {
    players: calcTotalForListAndSort(state.leaderBoards.players),
  }
}


function Player (props) {
  return <PlayerShow {...props} />
}


const PlayerList = ({players, playersCompare}) => (
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
