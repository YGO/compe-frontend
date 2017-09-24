import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import style from './leadersboard.styles'
import { calcTotals } from '../../services/score.service'
import { calcTHRU, rankPlayers } from './leadersboard.service'
import LeadersBoardItem from './leadersboard-item.component'

const LeadersBoard = ({players}) => {
  const leadersBoardPlayers = players.map(p => ({
    ...p,
    ...calcTotals(p.scores_day1, p.scores_day2),
    thru: calcTHRU(p.scores_day1, p.scores_day2, p.retired),
  }))
  const rankedPlayers = rankPlayers(leadersBoardPlayers).sort((a, b) => a.rank > b.rank ? 1 : -1)

  return (
    <div>
      <div id='rankingHeader' className='row' style={style.headerRow}>
        <div className='col-2' style={[style.cell]}>POS.</div>
        <div className='col-6' style={[style.cell]}>Player</div>
        <div className='col-2' style={[style.cell]}>Total (Gross)</div>
        <div className='col-2' style={[style.cellStop]}>THRU</div>
      </div>
      {rankedPlayers.map(p =>
        <LeadersBoardItem key={`p${p.id}`} {...p}/>
      )}
    </div>
  )
}

LeadersBoard.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

export default Radium(LeadersBoard)
