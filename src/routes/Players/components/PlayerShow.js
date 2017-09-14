import React from 'react'
import PropTypes from 'prop-types'

const PlayerShow = ({ id, name,retired, scores_day1,scores_day2, editPlayer }) => (
<div>
  <div className="playerscorefield">
      <div className="player"><span className="name">{name}</span></div>
      <div className="day1"><span>
           1日目</span>
          
        {scores_day1.map((s, idx) =>   
          <div className="score">
            <input className="scoretext calculation" name="test" key={idx} value={s}  disabled />
          </div>
        )} 
        <div className="playertotal"><span>76</span></div>
        <div className="playerscore"><span>4</span></div>
      </div>
      <div className="day2"><span>
           2日目</span>
        {scores_day2.map((s, idx) =>   
          <div className="score">
            <input className="scoretext calculation" name="test" key={idx} value={s}  disabled />
          </div>
        )} 
        
        <div className="playertotal"><span>75</span></div>
        <div className="playerscore"><span>3</span></div>
      </div>
      <div className="scoretotal">7</div>
      <div className="dns PlayStart">
        <input type="checkbox" checked={retired? true: false} disabled />
      </div>
      <div className="edit_row">
        <a href='#' onClick={() => editPlayer(id)}>Edit</a>
      </div>
  </div>
  <div className='clear'></div>
</div>
)

PlayerShow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  scores_day1: PropTypes.array.isRequired,
  scores_day2: PropTypes.array.isRequired,
  editPlayer: PropTypes.func.isRequired,
}

export default PlayerShow
