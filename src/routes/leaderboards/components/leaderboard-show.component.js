import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import holes from '../../../data/holes'
import style from './leaderboard.style'

const mapDispatchToProps = dispatch => ({})

const pars = holes.map(h => h.par)

const scoreToStr = score => {
  const s = Number(score)
  if (s === 0) return '-'
  if (s > 0) return `+${s}`
  return `${s}`
}

const strokeToScore = (stroke, idx) => {
  if (stroke === 0) return null
  return stroke - pars[idx]
}

// noinspection JSPotentiallyInvalidConstructorUsage
const PlayerShow = ({
                      // props
                      id,
                      name,
                      retired,
                      scores_day1,
                      scores_day2,
                      totalStrokesDay1,
                      totalStrokesDay2,
                      totalOutStrokesDay1,
                      totalOutStrokesDay2,
                      totalInStrokesDay1,
                      totalInStrokesDay2,
                      totalStrokes,
                      totalScoreDay1,
                      totalScoreDay2,
                      totalScore,
                      rank,
                      thru
                      // actions
                    }) => (

  <div className='row' style={style.playerRow}>
    <div className='col-12 mt-1 mb-1' style={style.white}>
      <div className='row' data-toggle='collapse' data-target={`#player-${id}`}
           style={[style.borderBottom, {cursor: 'pointer'}]}>
        <div className='col-2' style={[style.cell]}><span
          className='badge badge-pill'
          style={[style.rankBadge(rank)]}>{rank}</span></div>
        <div className='col-6' style={[style.cell, style.alignLeft]}><span
          className='text-primary ml-1'>{name}</span></div>
        <div className='col-2' style={[style.cell]}>{totalScore}</div>
        <div className='col-2' style={[style.cellStop]}>{thru}</div>
      </div>
      <div id={`player-${id}`} className='row collapse scores'>
        <div className='col-12'>
          <div className='row' style={style.borderBottom}>
            <div className='col-2' style={[style.cell]}>1日目
            </div>
            <div className='col-10' style={[style.white]}>
              <div className='row'>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <table className='table table-bordered table-sm mb-0'
                         style={[style.gray]}>
                    <thead>
                    <tr>
                      {Array(9).fill().map((_, idx) =>
                        <th key={`PlayerShow-h${idx}`}
                            style={[style.holeCell]}>{idx + 1}</th>
                      )}
                      <th style={[style.scoreCellTotal]}>OUT
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      {scores_day1.slice(0, 9).map(strokeToScore).map((s, idx) =>
                        <td key={`PlayerShow-p${id}-h${idx}-out-d1`}
                            style={[style.scoreCell, style.score(s)]}>{scoreToStr(s)}</td>
                      )}
                      <td
                        style={[style.scoreCellTotal]}>{totalOutStrokesDay1}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <table className='table table-bordered table-sm mb-0'
                         style={[style.gray]}>
                    <thead>
                    <tr>
                      {Array(9).fill().map((_, idx) =>
                        <th key={`PlayerShow-h${idx}`}
                            style={[style.holeCell]}>{idx + 10}</th>
                      )}
                      <th style={[style.scoreCellTotal]}>IN
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      {scores_day1.slice(9, 18).map((s, idx) => strokeToScore(s, idx + 9)).map((s, idx) =>
                        <td key={`PlayerShow-p${id}-h${idx}-in-d1`}
                            style={[style.scoreCell, style.score(s)]}>{scoreToStr(s)}</td>
                      )}
                      <td
                        style={[style.scoreCellTotal]}>{totalInStrokesDay1}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-2' style={[style.cell]}>2日目
            </div>
            <div className='col-10' style={[style.white]}>
              <div className='row'>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <table className='table table-bordered table-sm mb-0'
                         style={[style.gray]}>
                    <thead>
                    <tr>
                      {Array(9).fill().map((_, idx) =>
                        <th key={`PlayerShow-h${idx}`}
                            style={[style.holeCell]}>{idx + 1}</th>
                      )}
                      <th style={[style.scoreCellTotal]}>OUT
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      {scores_day2.slice(0, 9).map(strokeToScore).map((s, idx) =>
                        <td key={`PlayerShow-p${id}-h${idx}-out-d2`}
                            style={[style.scoreCell, style.score(s)]}>{scoreToStr(s)}</td>
                      )}
                      <td
                        style={[style.scoreCellTotal]}>{totalOutStrokesDay2}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col m-0 p-0 pt-1 pb-1'>
                  <table className='table table-bordered table-sm mb-0'
                         style={[style.gray]}>
                    <thead>
                    <tr>
                      {Array(9).fill().map((_, idx) =>
                        <th key={`PlayerShow-h${idx}`}
                            style={[style.holeCell]}>{idx + 10}</th>
                      )}
                      <th style={[style.scoreCellTotal]}>IN
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      {scores_day2.slice(9, 18).map((s, idx) => strokeToScore(s, idx + 9)).map((s, idx) =>
                        <td key={`PlayerShow-p${id}-h${idx}-in-d2`}
                            style={[style.scoreCell, style.score(s)]}>{scoreToStr(s)}</td>
                      )}
                      <td
                        style={[style.scoreCellTotal]}>{totalInStrokesDay2}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

PlayerShow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  scores_day1: PropTypes.array.isRequired,
  scores_day2: PropTypes.array.isRequired,
  totalStrokesDay1: PropTypes.number.isRequired,
  totalStrokesDay2: PropTypes.number.isRequired,
  totalStrokes: PropTypes.number.isRequired,
  totalScoreDay1: PropTypes.number.isRequired,
  totalScoreDay2: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  totalOutStrokesDay1: PropTypes.number.isRequired,
  totalOutStrokesDay2: PropTypes.number.isRequired,
  totalInStrokesDay1: PropTypes.number.isRequired,
  totalInStrokesDay2: PropTypes.number.isRequired,
  rank: PropTypes.string.isRequired,
  thru: PropTypes.string.isRequired,
}

export default connect(null, mapDispatchToProps)(Radium(PlayerShow))
