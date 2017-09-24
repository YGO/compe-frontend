import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import holes from '../../../data/holes'
import style from './leadersboard-main.styles'
import { alignLeft } from '../../common.styles'
import { colors } from './leadersboard.colors'

const scoreToStr = score => {
  const s = Number(score)
  if (s === 0) return '-'
  if (s > 0) return `+${s}`
  return String(s)
}

const strokeToScore = (pars) => (stroke, idx) => {
  if (stroke === 0) return null
  return stroke - pars[idx]
}

const rankToStr = (rank, retired) => {
  if (retired) return '-'
  return String(rank)
}

@Radium
class ScoreTable extends React.Component {
  render () {
    const pars = this.props.holes.map(h => h.par)

    return (
      <table className='table table-bordered table-sm mb-0'
             style={[{backgroundColor: colors.gray}]}>
        <thead>
        <tr>
          {this.props.holes.map(h =>
            <th key={`ScoreTable-h${h.hole_num}`}
                style={[style.holeCell]}>{h.hole_num}</th>
          )}
          <th style={[style.scoreCellTotal]}>{this.props.label}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          {this.props.strokes.map(strokeToScore(pars)).map((s, idx) =>
            <td key={`ScoreTable-s${idx}`}
                style={[style.scoreCell, style.score(s)]}>{scoreToStr(s)}</td>
          )}
          <td
            style={[style.scoreCellTotal]}>{this.props.strokes.reduce((a, b) => a + b)}</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

const LeadersBoardItem = ({
                            // props
                            id,
                            name,
                            retired,
                            scores_day1,
                            scores_day2,
                            totalScore,
                            rank,
                            thru
                          }) => (

  <div className='row' style={style.playerRow}>
    <div className='col-12 mt-1 mb-1' style={[{backgroundColor: colors.white}]}>
      <div className='row' data-toggle='collapse' data-target={`#player-${id}`}
           style={[style.borderBottom, {cursor: 'pointer'}]}>
        <div className='col-2' style={[style.cell]}><span
          className='badge badge-pill'
          style={[style.rankBadge(rank)]}>{rankToStr(rank)}</span></div>
        <div className='col-6' style={[style.cell, alignLeft]}><span
          className='text-primary ml-1'>{name}</span></div>
        <div className='col-2' style={[style.cell]}>{totalScore}</div>
        <div className='col-2' style={[style.cellStop]}>{thru}</div>
      </div>
      <div id={`player-${id}`} className='row collapse scores'>
        <div className='col-12'>
          <div className='row' style={style.borderBottom}>
            <div className='col-2' style={[style.cell]}>1日目</div>
            <div className='col-10' style={[{backgroundColor: colors.white}]}>
              <div className='row'>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <ScoreTable strokes={scores_day1.slice(0, 9)}
                              holes={holes.slice(0, 9)}
                              label='OUT'/>
                </div>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <ScoreTable strokes={scores_day1.slice(9, 18)}
                              holes={holes.slice(9, 18)}
                              label='IN'/>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-2' style={[style.cell]}>2日目</div>
            <div className='col-10' style={[{backgroundColor: colors.white}]}>
              <div className='row'>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <ScoreTable strokes={scores_day2.slice(0, 9)}
                              holes={holes.slice(0, 9)}
                              label='OUT'/>
                </div>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <ScoreTable strokes={scores_day2.slice(9, 18)}
                              holes={holes.slice(9, 18)}
                              label='IN'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

ScoreTable.propTypes = {
  strokes: PropTypes.array.isRequired,
  holes: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
}

LeadersBoardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  scores_day1: PropTypes.array.isRequired,
  scores_day2: PropTypes.array.isRequired,
  totalScore: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  thru: PropTypes.string.isRequired,
}

export default Radium(LeadersBoardItem)
