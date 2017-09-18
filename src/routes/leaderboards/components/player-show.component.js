import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { editPlayer } from '../modules/leaderboard.module'
import { calcTotals } from '../../../services/score.service'
import style from './player.style'

const mapDispatchToProps = dispatch => ({
  editPlayer: (id) => {
    dispatch(editPlayer(id))
  },
})

const mapStateToProps = (state, props) => {
  return calcTotals(props.scores_day1, props.scores_day2)
}

const PlayerShow = ({
                      // props
                      id,
                      name,
                      retired,
                      scores_day1,
                      scores_day2,
                      totalStrokesDay1,
                      totalStrokesDay2,
                      totalStrokes,
                      totalScoreDay1,
                      totalScoreDay2,
                      totalScore,
                      // actions
                      editPlayer,
                    }) => (
  <div className='row'>
    <div className='col'>
      <div className='row' style={style.playerRow}>
        <div className='col-auto'>
          <span className='font-weight-bold'>{name}</span>
        </div>
        <div className='col-auto'>
          {totalStrokes} ({totalScore})
        </div>
        <div className='col-auto mr-auto'>
          <div className='form-check disabled'>
            <label className='form-check-label'>
              <input className='form-check-input' type='checkbox'
                     checked={retired} disabled/> 棄権
            </label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <table className='table table-sm table-bordered'
                 style={style.scoreTable}>
            <thead>
            <tr>
              {[...Array(18)].map((_, idx) =>
                <th key={`PlayerShow-h${idx}`}
                    style={style.scoreTableHeader}>{idx + 1}</th>
              )}
              <th style={style.scoreTableHeader}>合計</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              {scores_day1.map((s, idx) =>
                <td key={`PlayerShow-p${id}-s${idx}-d1`}>
                  <input type='text' value={s} style={style.scoreInput}
                         disabled/>
                </td>
              )}
              <td>{totalStrokesDay1}</td>
            </tr>
            <tr>
              {scores_day2.map((s, idx) =>
                <td key={`PlayerShow-p${id}-s${idx}-d2`}>
                  <input type='text' value={s} style={style.scoreInput}
                         disabled/>
                </td>
              )}
              <td>{totalStrokesDay2}</td>
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
  editPlayer: PropTypes.func.isRequired,
  totalStrokesDay1: PropTypes.number.isRequired,
  totalStrokesDay2: PropTypes.number.isRequired,
  totalStrokes: PropTypes.number.isRequired,
  totalScoreDay1: PropTypes.number.isRequired,
  totalScoreDay2: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerShow)
