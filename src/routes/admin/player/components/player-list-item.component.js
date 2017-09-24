import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import {
  cancelEdit,
  changeRetired,
  changeScore,
  editPlayer,
  savePlayer
} from '../modules/player.module'
import { calcTotals } from '../../../../services/score.service'
import style from './player.styles'
import classNames from 'classnames'

const mapDispatchToProps = dispatch => ({
  editPlayer: (id) => {
    dispatch(editPlayer(id))
  },
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
})

const mapStateToProps = (state, props) => {
  return {
    ...calcTotals(props.scores_day1, props.scores_day2),
    loading: state.adminPlayers.loading,
  }
}

const PlayerListItem = ({
                          // props
                          id,
                          name,
                          retired,
                          scores_day1,
                          scores_day2,
                          isEditing,
                          loading,
                          totalStrokesDay1,
                          totalStrokesDay2,
                          totalStrokes,
                          totalScore,
                          // actions
                          editPlayer,
                          cancelEdit,
                          savePlayer,
                          changeScore,
                          changeRetired,
                        }) => (
  <div className='row'>
    <div className='col'>
      <div className='row' style={style.playerRow}>
        <div className='col-auto'>
          <span className='font-weight-bold'>{name}</span>
        </div>
        <div className='col-auto'>{totalStrokes} ({totalScore})</div>
        <div className='col-auto mr-auto'>
          <div
            className={classNames('form-check', {disabled: !isEditing || loading})}>
            <label className='form-check-label'>
              <input className='form-check-input' type='checkbox'
                     checked={retired} disabled={!isEditing || loading}
                     onChange={e => changeRetired(e.target.checked)}/> 棄権
            </label>
          </div>
        </div>
        {!isEditing &&
        <div className='col-auto'>
          <button type='button' className='btn btn-link' style={style.ctrlBtn}
                  onClick={() => editPlayer(id)}
                  disabled={loading}>スコア編集
          </button>
        </div>
        }
        {isEditing &&
        <div className='col-auto'>
          <button type='button' className='btn btn-link' style={style.ctrlBtn}
                  onClick={cancelEdit} disabled={loading}>
            キャンセル
          </button>
          <button type='button' className='btn btn-primary btn-sm'
                  style={style.ctrlBtn} onClick={savePlayer}
                  disabled={loading}>保存
          </button>
        </div>
        }
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
                         disabled={!isEditing || loading}
                         onChange={e => changeScore(idx, e.target.value, 1)}/>
                </td>
              )}
              <td>{totalStrokesDay1}</td>
            </tr>
            <tr>
              {scores_day2.map((s, idx) =>
                <td key={`PlayerShow-p${id}-s${idx}-d2`}>
                  <input type='text' value={s} style={style.scoreInput}
                         disabled={!isEditing || loading}
                         onChange={e => changeScore(idx, e.target.value, 1)}/>
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

PlayerListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  scores_day1: PropTypes.array.isRequired,
  scores_day2: PropTypes.array.isRequired,
  isEditing: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  totalStrokesDay1: PropTypes.number.isRequired,
  totalStrokesDay2: PropTypes.number.isRequired,
  totalStrokes: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  editPlayer: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeRetired: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListItem)
