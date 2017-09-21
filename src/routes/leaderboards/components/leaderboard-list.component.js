import { connect } from 'react-redux'
import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import style from './leaderboard.style'
import PlayerShow from './leaderboard-show.component'
import {
  addTHRU,
  addTotals,
  rankPlayers
} from '../../../services/score.service'

const mapDispatchToProps = {}
const mapStateToProps = state => {
  const players = state.leaderBoards.players
    .map(addTotals)
    .map(addTHRU)
  const rankedPlayers = rankPlayers(players)

  return {
    players: rankedPlayers.sort((a, b) => a.rank > b.rank ? 1 : -1)
  }
}

const PlayerList = ({players}) => (
  <div>
    <div id='rankingHeader' className='row' style={style.headerRow}>
      <div className='col-2' style={[style.cell, style.transparent]}>POS.
      </div>
      <div className='col-6' style={[style.cell, style.transparent]}>Player
      </div>
      <div className='col-2' style={[style.cell, style.transparent]}>Total
        (Gross)
      </div>
      <div className='col-2' style={[style.cellStop, style.transparent]}>THRU
      </div>
    </div>
    {players.map(p =>
      <PlayerShow key={`p${p.id}`} {...p}/>
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(PlayerList))
