import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import {
  cancelEdit,
  changeRetired,
  changeScore,
  editPlayer,
  savePlayer
} from './player.module'
import style from './player-list.styles'
import classNames from 'classnames'

const mapDispatchToProps = dispatch => ({
  onClickEditPlayer: (id) => {
    dispatch(editPlayer(id))
  },
  onClickCancelEdit: () => {
    dispatch(cancelEdit())
  },
  onClickSavePlayer: () => {
    dispatch(savePlayer())
  },
  onChangeScore: (scoreId, idx, value) => {
    dispatch(changeScore(scoreId, idx, value))
  },
  onChangeRetired: (retired) => {
    dispatch(changeRetired(retired))
  },
})

const mapStateToProps = (state, props) => {
  const playerId = props.id

  let scores
  if (props.isEditing) {
    scores = state.adminPlayers.draft.scores
  } else {
    scores = state.adminPlayers.scores
  }
  const scoresPerRound = state.adminPlayers.rounds.map(r =>
    scores.find(s => s.player_id === playerId && s.round_id === r.id)
  )

  const totalStrokesPerRound = scoresPerRound.map(s =>
    s.strokes.map(Number).reduce((a, b) => a + b, 0))
  const totalStrokes = totalStrokesPerRound.reduce((a, b) => a + b, 0)

  const pars = state.adminPlayers.holes.map(h => h.par)
  const totalScore = scoresPerRound.map(s =>
    s.strokes.map(Number).reduce((sum, v, idx) => {
      if (v === 0) return 0
      return sum + (v - pars[idx])
    }, 0)
  ).reduce((a, b) => a + b, 0)

  return {
    scoresPerRound,
    totalStrokesPerRound,
    totalStrokes,
    totalScore,
    loading: state.adminPlayers.loading,
  }
}

const PlayerListItem = ({
                          id,
                          name,
                          retired,
                          isEditing,
                          scoresPerRound,
                          totalStrokesPerRound,
                          totalStrokes,
                          totalScore,
                          loading,
                          onClickEditPlayer,
                          onClickCancelEdit,
                          onClickSavePlayer,
                          onChangeScore,
                          onChangeRetired,
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
                     onChange={e => onChangeRetired(e.target.checked)}/> 棄権
            </label>
          </div>
        </div>
        {!isEditing &&
        <div className='col-auto'>
          <button type='button' className='btn btn-link' style={style.ctrlBtn}
                  onClick={() => onClickEditPlayer(id)}
                  disabled={loading}>スコア編集
          </button>
        </div>
        }
        {isEditing &&
        <div className='col-auto'>
          <button type='button' className='btn btn-link' style={style.ctrlBtn}
                  onClick={onClickCancelEdit} disabled={loading}>
            キャンセル
          </button>
          <button type='button' className='btn btn-primary btn-sm'
                  style={style.ctrlBtn} onClick={onClickSavePlayer}
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
                <th key={`PlayerListItem-h${idx}`}
                    style={style.scoreTableHeader}>{idx + 1}</th>
              )}
              <th style={style.scoreTableHeader}>合計</th>
            </tr>
            </thead>
            <tbody>
            {scoresPerRound.map((s, idx) =>
              <tr key={`PlayerListItem-${s.id}`}>
                {s.strokes.map((v, idx) =>
                  <td key={`PlayerListItem-${s.id}-${idx}`}>
                    <input type='text' value={v} style={style.scoreInput}
                           disabled={!isEditing || loading}
                           onChange={e => onChangeScore(s.id, idx, e.target.value)}/>
                  </td>
                )}
                <td>{totalStrokesPerRound[idx]}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

PlayerListItem.defaultProps = {
  isEditing: false
}

PlayerListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  scoresPerRound: PropTypes.array.isRequired,
  totalStrokesPerRound: PropTypes.array.isRequired,
  totalStrokes: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  onClickEditPlayer: PropTypes.func.isRequired,
  onClickCancelEdit: PropTypes.func.isRequired,
  onClickSavePlayer: PropTypes.func.isRequired,
  onChangeScore: PropTypes.func.isRequired,
  onChangeRetired: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListItem)
