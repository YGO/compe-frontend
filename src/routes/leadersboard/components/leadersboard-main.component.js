import { connect } from 'react-redux'
import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import style from './leadersboard-main.styles'
import LeadersBoardItem from './leadersboard-item.component'
import {
  calcTHRU,
  calcTotals,
  rankPlayers
} from '../../../services/score.service'

const mapDispatchToProps = {}
const mapStateToProps = state => {
  const players = state.leadersBoard.players
    .map(p => ({
      ...p,
      ...calcTotals(p.scores_day1, p.scores_day2),
      thru: calcTHRU(p.scores_day1, p.scores_day2, p.retired),
    }))
  const rankedPlayers = rankPlayers(players).sort((a, b) => a.rank > b.rank ? 1 : -1)

  return {
    players: rankedPlayers
  }
}

const LeadersBoardMain = ({players}) => (
  <div>
    <div id='rankingHeader' className='row' style={style.headerRow}>
      <div className='col-2' style={[style.cell]}>POS.</div>
      <div className='col-6' style={[style.cell]}>Player</div>
      <div className='col-2' style={[style.cell]}>Total (Gross)</div>
      <div className='col-2' style={[style.cellStop]}>THRU</div>
    </div>
    {players.map(p =>
      <LeadersBoardItem key={`p${p.id}`} {...p}/>
    )}
  </div>
)

LeadersBoardMain.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(LeadersBoardMain))