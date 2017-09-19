import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { editPlayer } from '../modules/leaderboard.module'
import { calcTotals } from '../../../services/score.service'
import style from './leaderboard.style'
import holes from '../../../data/holes'
import ToggleDisplay from 'react-toggle-display'

function FinalPoint (current,par,row,id,idx) {
  let score = current - par
  if(current == 0){
    return <td key={`PlayerShow-p${id}-s${idx}-d{row}`}></td>
  }else{
    switch(true) {
      case (score >= 3):
        return <td key={`PlayerShow-p${id}-s${idx}-d{row}`} style={style.overWbogey}>{score}</td>
      case (score == 2):
        return <td key={`PlayerShow-p${id}-s${idx}-d{row}`} style={style.wbogey}>{score}</td>
      case (score == 1):
        return <td key={`PlayerShow-p${id}-s${idx}-d{row}`} style={style.bogey}>{score}</td>
      case (score == 0):
        return <td key={`PlayerShow-p${id}-s${idx}-d{row}`} style={style.par}>-</td>
      case (score == -1):
        return <td key={`PlayerShow-p${id}-s${idx}-d{row}`} style={style.birdie}>{score}</td>
      case (score <= -2):
        return <td key={`PlayerShow-p${id}-s${idx}-d{row}`} style={style.underBirdie}>{score}</td>
    }
  }
}
function CheckRank (rank) {
  switch(true) {
    case (rank === 1):
      return <span style={style.rank1}>{rank}</span> 
    case (rank === 2):
      return <span style={style.rank2}>{rank}</span> 
    case (rank === 3):
      return <span style={style.rank3}>{rank}</span> 
    case (rank >= 4):
      return <span style={style.rank4}>{rank}</span> 
  }
}

const mapDispatchToProps = dispatch => ({})


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



  <div className='row'>
  
    <div className='col'>
      <div className='row name'>
        <div className='col'>
        <table className='table table-sm table-bordered'
                 style={style.scoreTable}>
        <tbody>
          <tr style={style.tableTd}>
            <td style={style.tableTd14} >{CheckRank(rank)}</td>
            <td style={style.tableTd40}>{name}</td>
            <td style={style.tableTd14}>{totalScore}</td>
            <td style={style.tableTd14}>&nbsp;</td>
            <td style={style.tableTd14}>{thru}</td>
          </tr>
          <tr>
            <td >1日目</td>
            <td colSpan='4'>
              <table width='100%' className='table table-sm table-bordered' style={style.scoreTableHeader}>
                <thead>
                  <tr>
                    {[...Array(9)].map((_, idx) =>
                      <th key={`PlayerShow-h${idx}`}
                          style={style.scoreTableHeader}>{idx + 1}</th>
                    )}
                    <th style={style.scoreTableHeader}>OUT</th>
                    {[...Array(9)].map((_, idx) =>
                      <th key={`PlayerShow-h${idx}`}
                          style={style.scoreTableHeader}>{idx + 10}</th>
                    )}
                    <th style={style.scoreTableHeader}>IN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {scores_day1.slice(0,9).map((s, idx) =>
                        FinalPoint(s,holes[idx].par,2,id,idx)
                    )}
                    <td>{totalOutStrokesDay1}</td>
                    {scores_day1.slice(9,18).map((s, idx) =>
                        FinalPoint(s,holes[idx].par,1,id,idx+9)
                    )}
                    <td>{totalInStrokesDay1}</td>
                  </tr> 
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td >2日目</td>
            <td colSpan='4'>
              <table width='100%' className='table table-sm table-bordered' style={style.scoreTableHeader}>
                <thead>
                  <tr>
                    {[...Array(9)].map((_, idx) =>
                      <th key={`PlayerShow-h${idx}`}
                          style={style.scoreTableHeader}>{idx + 1}</th>
                    )}
                    <th style={style.scoreTableHeader}>OUT</th>
                    {[...Array(9)].map((_, idx) =>
                      <th key={`PlayerShow-h${idx}`}
                          style={style.scoreTableHeader}>{idx + 10}</th>
                    )}
                    <th style={style.scoreTableHeader}>IN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {scores_day2.slice(0,9).map((s, idx) =>
                        FinalPoint(s,holes[idx].par,2,id,idx)
                    )}
                    <td>{totalOutStrokesDay2}</td>
                    {scores_day2.slice(9,18).map((s, idx) =>
                        FinalPoint(s,holes[idx].par,2,id,idx+9)
                    )}
                    <td>{totalInStrokesDay2}</td>
                  </tr> 
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

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
}

export default connect(null, mapDispatchToProps)(PlayerShow)
