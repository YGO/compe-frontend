import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import style from './leadersboard.styles'
import { alignLeft } from '../../routes/common.styles'
import { colors } from './leadersboard.colors'
import { calcTHRU, hasScore } from './leadersboard.service'

const scoreToStr = score => {
  if (score === undefined) return ''

  const s = Number(score)
  if (s > 0) return `+${s}`
  return String(s)
}

const rankToStr = (rank, canBeRanked) => {
  if (!canBeRanked) return '-'
  return String(rank)
}

@Radium
class ScoreTable extends React.Component {
  render () {
    const total = this.props.scores.filter(s => !!s)
      .reduce((a, b) => a + b, 0)

    return (
      <table className='table table-bordered table-sm mb-0'
             style={[{backgroundColor: colors.gray}]}>
        <thead>
        <tr>
          {this.props.holes.map(h =>
            <th key={`ScoreTable-h${h}`}
                style={[style.holeCell]}>{h}</th>
          )}
          <th style={[style.scoreCellTotal]}>{this.props.label}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          {this.props.scores.map((s, idx) =>
            <td key={`ScoreTable-s${idx}`}
                style={[style.scoreCell, style.score(s)]}>{scoreToStr(s)}</td>
          )}
          <td style={[style.scoreCellTotal]}>{total}</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

const LeadersBoardItem = ({
                            id,
                            name,
                            retired,
                            scoresPerRound,
                            totalScore,
                            rank,
                            rounds,
                          }) => {
  const thru = calcTHRU(scoresPerRound, retired)
  const canBeRanked = hasScore(scoresPerRound) && !retired

  return (
    <div className='row' style={style.playerRow}>
      <div className='col-12 mt-1 mb-1' style={[{backgroundColor: colors.white}]}>
        <div className='row' data-toggle='collapse' data-target={`#player-${id}`}
             style={[style.borderBottom, {cursor: 'pointer'}]}>
          <div className='col-2' style={[style.cell]}><span
            className='badge badge-pill'
            style={[
              style.rankBadge(rank, canBeRanked)]
            }>{rankToStr(rank, canBeRanked)}</span>
          </div>
          <div className='col-6' style={[style.cell, alignLeft]}><span
            className='text-primary ml-1'>{name}</span></div>
          <div className='col-2' style={[style.cell]}>{totalScore}</div>
          <div className='col-2'
               style={[style.cellStop]}>{thru}</div>
        </div>
        <div id={`player-${id}`} className='row collapse leaders-board-scores'>
          <div className='col-12'>
            {rounds.map((r, idx) =>
              <div className='row' key={`LeadersBoardItem-p${id}-r${r.id}`}
                   style={style.borderBottom}>
                <div className='col-2' style={[style.cell]}>{r.title}</div>
                <div className='col-10' style={[{backgroundColor: colors.white}]}>
                  <div className='row'>
                    <div className='col m-0 p-0 pt-1 pb-1'>
                      <ScoreTable scores={scoresPerRound[idx].slice(0, 9)}
                                  holes={Array(9).fill().map((_, idx) => idx + 1)}
                                  label='OUT'/>
                    </div>
                    <div className='col m-0 p-0 pt-1 pb-1'>
                      <ScoreTable scores={scoresPerRound[idx].slice(9, 18)}
                                  holes={Array(9).fill().map((_, idx) => idx + 10)}
                                  label='IN'/>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
ScoreTable.propTypes = {
  scores: PropTypes.array.isRequired,
  holes: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
}

LeadersBoardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  scoresPerRound: PropTypes.array.isRequired,
  totalScore: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  rounds: PropTypes.array.isRequired,
}

export default Radium(LeadersBoardItem)
