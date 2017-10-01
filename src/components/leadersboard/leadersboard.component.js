import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import style from './leadersboard.styles'
import { rankPlayers } from './leadersboard.service'
import LeadersBoardItem from './leadersboard-item.component'

const strokesToScores = (pars) => (strokes) => {
  return strokes.map((s, idx) => {
    if (s === 0) return undefined
    return s - pars[idx]
  })
}

const calcTotalScore = (scoresPerRound) => {
  const flattened = Array.prototype.concat(...scoresPerRound)
  return flattened.filter(s => !!s).reduce((a, b) => a + b, 0)
}

const LeadersBoard = ({
                        players,
                        rounds,
                        holes,
                      }) => {
  const leadersBoardPlayers = players.map(p => {
    const pars = holes.map(h => h.par)
    const scoresPerRound = p.strokesPerRound.map(strokesToScores(pars))

    return {
      ...p,
      scoresPerRound,
      totalScore: calcTotalScore(scoresPerRound), // required now to sort
    }
  })

  const rankedPlayers = rankPlayers(leadersBoardPlayers)
    .sort((a, b) => a.rank > b.rank ? 1 : -1)

  return (
    <div>
      <div id='rankingHeader' className='row' style={style.headerRow}>
        <div className='col-2' style={[style.cell]}>POS.</div>
        <div className='col-6' style={[style.cell]}>Player</div>
        <div className='col-2' style={[style.cell]}>Total (Gross)</div>
        <div className='col-2' style={[style.cellStop]}>THRU</div>
      </div>
      {rankedPlayers.map(p =>
        <LeadersBoardItem key={`LeadersBoard-${p.id}`} {...p} rounds={rounds}/>
      )}
    </div>
  )
}

LeadersBoard.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  rounds: PropTypes.array.isRequired,
  holes: PropTypes.array.isRequired,
}

export default Radium(LeadersBoard)
