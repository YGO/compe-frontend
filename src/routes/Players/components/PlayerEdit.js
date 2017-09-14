import React from 'react'
import PropTypes from 'prop-types'

const PlayerEdit = ({ player, cancelEdit, savePlayer, changeScore, changeName,changeRetired }) => (
  <div>
    <div className="playerscorefield">
      <div className="player"><span className="name"><input width="20" key={player.id} value={player.name}
              onChange={e => changeName(e.target.value)} /></span></div>
      <div className="day1"><span>
           1日目</span>
        {player.scores_day1.map((s, idx) =>
            <div className="score">
            <input className="scoretext calculation" name="test" key={'s1_' + player.id + 's_' + idx} value={s}
              onChange={e => changeScore(idx, e.target.value, 1)} />
          </div>
          )}
        
        <div className="playertotal"><span>76</span></div>
        <div className="playerscore"><span>4</span></div>
      </div>
      <div className="day2"><span>
           2日目</span>
        {player.scores_day2.map((s, idx) =>
            <div className="score">
            <input className="scoretext calculation" name="test" key={'s2_' + player.id + 's_' + idx} value={s}
              onChange={e => changeScore(idx, e.target.value, 2)} />
          </div>
          )}
        
        <div className="playertotal"><span>75</span></div>
        <div className="playerscore"><span>3</span></div>
      </div>
      <div className="scoretotal">7</div>
      <div className="dns PlayStart">
        <input type="checkbox" checked={player.retired? true: false}  onChange={e => changeRetired(e.target.checked)} />
      </div>
      <div className="edit_row">
        <a href='#' onClick={cancelEdit}>Cancel</a><br/><a href='#' onClick={savePlayer}>Save</a>
      </div>
    </div>
  </div>
)

PlayerEdit.propTypes = {
  player: PropTypes.object.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changeRetired: PropTypes.func.isRequired
}

export default PlayerEdit
