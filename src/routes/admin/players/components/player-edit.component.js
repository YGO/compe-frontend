import React from 'react'
import PropTypes from 'prop-types'
import {
  cancelEdit,
  changeRetired,
  changeScore,
  savePlayer
} from '../modules/player.module'
import { calcTotals } from '../../../../services/score.service'
import { connect } from 'react-redux'
import style from './player.style'

const mapDispatchToProps = dispatch => {
  return {
    cancelEdit: () => {
      dispatch(cancelEdit())
    },
    savePlayer: () => {
      dispatch(savePlayer())
    },
    changeScore: (idx, score, row) => {
      dispatch(changeScore(idx, score, row))
    },
    changeRetired: (retired) => {
      dispatch(changeRetired(retired))
    },
  }
}

const mapStateToProps = state => {
  const player = state.adminPlayers.playerEditing
  const totals = calcTotals(player.scores_day1, player.scores_day2)

  return {
    ...totals,
    loading: state.adminPlayers.loading,
    player: player,
  }
}

const PlayerEdit = ({
                      // props
                      player,
                      totalStrokesDay1,
                      totalStrokesDay2,
                      totalStrokes,
                      totalScoreDay1,
                      totalScoreDay2,
                      totalScore,
                      loading,
                      // actions
                      cancelEdit,
                      savePlayer,
                      changeScore,
                      changeRetired,
                    }) => (
  <div className='row'>
    <div className='col'>
      <div className='row'
           style={style.playerRow}>
        <div className='col-auto'>
          <span className='font-weight-bold'>{player.name}</span>
        </div>
        <div className='col-auto'>
          {totalStrokes} ({totalScore})
        </div>
        <div className='col-auto mr-auto'>
          <div className='form-check'>
            <label className='form-check-label'>
              <input className='form-check-input' type='checkbox'
                     checked={player.retired}
                     onChange={e => changeRetired(e.target.checked)}/> 棄権
            </label>
          </div>
        </div>
        <div className='col-auto'>
          <button type='button' className='btn btn-link' style={style.ctrlBtn}
                  onClick={cancelEdit} disabled={loading}>キャンセル
          </button>
          <button type='button' className='btn btn-primary btn-sm'
                  style={style.ctrlBtn} onClick={savePlayer}
                  disabled={loading}>
            保存
          </button>
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
              {player.scores_day1.map((s, idx) =>
                <td key={`PlayerEdit-p${player.id}-s${idx}-d1`}>
                  <input type='text' value={s} style={style.scoreInput}
                         disabled={loading}
                         onChange={e => changeScore(idx, e.target.value, 1)}/>
                </td>
              )}
              <td>{totalStrokesDay1}</td>
            </tr>
            <tr>
              {player.scores_day2.map((s, idx) =>
                <td key={`PlayerEdit-p${player.id}-s${idx}-d2`}>
                  <input type='text' value={s} style={style.scoreInput}
                         disabled={loading}
                         onChange={e => changeScore(idx, e.target.value, 2)}/>
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

PlayerEdit.propTypes = {
  player: PropTypes.object.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeRetired: PropTypes.func.isRequired,
  totalStrokesDay1: PropTypes.number.isRequired,
  totalStrokesDay2: PropTypes.number.isRequired,
  totalStrokes: PropTypes.number.isRequired,
  totalScoreDay1: PropTypes.number.isRequired,
  totalScoreDay2: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEdit)
