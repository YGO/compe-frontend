import React from 'react'
import PropTypes from 'prop-types'

const PlayerEdit = ({
                      // props
                      player,
                      totalStrokesDay1,
                      totalStrokesDay2,
                      totalScoreDay1,
                      totalScoreDay2,
                      totalScore,
                      // actions
                      cancelEdit,
                      savePlayer,
                      changeScore,
                      changeRetired,
                    }) => (
  <div>
    <div className='playerscorefield tworow'>
      <div className='player'><span className='name'>{player.name}</span>
      </div>

      <div className='day1'><span>1日目</span>
        {player.scores_day1.map((s, idx) =>
          <div className='score' key={`PlayerEdit-p${player.id}-s${idx}-d1`}>
            <input className='scoretext calculation' value={s}
                   onChange={e => changeScore(idx, e.target.value, 1)}/>
          </div>
        )}
        <div className='playertotal'><span>{totalStrokesDay1}</span></div>
        <div className='playerscore'><span>{totalScoreDay1}</span></div>
      </div>

      <div className='day2'><span>2日目</span>
        {player.scores_day2.map((s, idx) =>
          <div className='score' key={`PlayerEdit-p${player.id}-s${idx}-d2`}>
            <input className='scoretext calculation' value={s}
                   onChange={e => changeScore(idx, e.target.value, 2)}/>
          </div>
        )}
        <div className='playertotal'><span>{totalStrokesDay2}</span></div>
        <div className='playerscore'><span>{totalScoreDay2}</span></div>
      </div>

      <div className='scoretotal'>{totalScore}</div>
      <div className='dns PlayStart'>
        <input type='checkbox' checked={player.retired}
               onChange={e => changeRetired(e.target.checked)}/>
      </div>
      <div className='edit_row'>
        <div>
          <span><a onClick={savePlayer}>保存</a></span>
          <span><a onClick={cancelEdit}>キャンセル</a></span>
        </div>
      </div>
    </div>
    <div className='clear'/>
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
  totalScoreDay1: PropTypes.number.isRequired,
  totalScoreDay2: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
}

export default PlayerEdit
