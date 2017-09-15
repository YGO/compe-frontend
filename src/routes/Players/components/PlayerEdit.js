import React from 'react'
import PropTypes from 'prop-types'
import CancelButton from '../images/cancel-button.png'
import EditButton from '../images/edit-button.png'
import SaveButton from '../images/save-button.png'

class PlayerEdit extends React.Component {
  
  renderPlayer(player, cancelEdit, savePlayer, changeScore,changeRetired){
    if(player.optionDisplay==0){

      return (
        <div>
          <div className="playerscorefield tworow">
              <div className="player"><span className="name">{player.name}</span></div>  
         <div className="day1"><span>1日目</span>
            {player.scores_day1.map((s, idx) =>   
              <div className="score">
                <input className="scoretext calculation" name="test" key={'s1_' + player.id + 's_' + idx} key={idx} value={s}  onChange={e => changeScore(idx, e.target.value, 1)} />
              </div>
            )} 
            <div className="playertotal"><span>{player.total1}</span></div>
            <div className="playerscore"><span>{player.score1}</span></div>
          </div>
          <div className="day2"><span>2日目</span>
            {player.scores_day2.map((s, idx) =>   
              <div className="score">
                <input className="scoretext calculation" name="test" key={'s2_' + player.id + 's_' + idx} value={s}  onChange={e => changeScore(idx, e.target.value, 1)} />
              </div>
            )} 
            
            <div className="playertotal"><span>{player.total2}</span></div>
            <div className="playerscore"><span>{player.score2}</span></div>
          </div>
          <div className="scoretotal">{player.total_2day}</div>
              <div className="dns PlayStart">
                <input type="checkbox" checked={player.retired? true: false}  onChange={e => changeRetired(e.target.checked)} />
              </div>
              <div className="edit_row">
                <a href='#' onClick={savePlayer}><img src={SaveButton} /></a> <a href='#' onClick={cancelEdit}><img src={CancelButton} /></a>
              </div>
          </div>
          <div className='clear'></div>
        </div>
      
      )

    }else if(player.optionDisplay==1){
      return (
        <div>
          <div className="playerscorefield onerow">
              <div className="player"><span className="name">{player.name}</span></div>  
          <div className="day1"><span>1日目</span>
            {scores_day1.map((s, idx) =>   
              <div className="score">
                <input className="scoretext calculation" name="test" key={'s1_' + player.id + 's_' + idx} key={idx} value={s}  onChange={e => changeScore(idx, e.target.value, 1)} />
              </div>
            )} 
            <div className="playertotal"><span>{player.total1}</span></div>
            <div className="playerscore"><span>{player.score1}</span></div>
          </div>
          <div className="scoretotal">{player.total_2day}</div>
              <div className="dns PlayStart">
                <input type="checkbox" checked={player.retired? true: false}  onChange={e => changeRetired(e.target.checked)} />
              </div>
              <div className="edit_row">
                <a href='#' onClick={savePlayer}><img src={SaveButton} /></a> <a href='#' onClick={cancelEdit}><img src={CancelButton} /></a>
              </div>
          </div>
          <div className='clear'></div>
        </div>
      )
    }
    else if(player.optionDisplay==2){
      return (
        <div>
          <div className="playerscorefield onerow">
              <div className="player"><span className="name">{player.name}</span></div>
              <div className="day2"><span>2日目</span>
                {scores_day2.map((s, idx) =>   
                  <div className="score">
                    <input className="scoretext calculation" name="test" key={'s2_' + player.id + 's_' + idx} value={s}  onChange={e => changeScore(idx, e.target.value, 1)} />
                  </div>
                )} 
                <div className="playertotal"><span>{player.total2}</span></div>
                <div className="playerscore"><span>{player.score2}</span></div>
              </div>
              <div className="scoretotal">{player.total_2day}</div>
                  <div className="dns PlayStart">
                    <input type="checkbox" checked={player.retired? true: false}  onChange={e => changeRetired(e.target.checked)} />
                  </div>
                  <div className="edit_row">
                    <a href='#' onClick={savePlayer}><img src={SaveButton} /></a> <a href='#' onClick={cancelEdit}><img src={CancelButton} /></a>
                  </div>
              </div>
              <div className='clear'></div>
          </div>
      )
    }
  }
  render() {
    const { player, cancelEdit, savePlayer, changeScore,changeRetired } = this.props
    return (     
            this.renderPlayer(player, cancelEdit, savePlayer, changeScore,changeRetired)
      )
  }
}

PlayerEdit.propTypes = {
  player: PropTypes.object.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeRetired: PropTypes.func.isRequired
}

export default PlayerEdit
