import React from 'react'
import PropTypes from 'prop-types'

class PlayerEdit extends React.Component {
  
  renderPlayer(player, cancelEdit, savePlayer, changeScore,changeRetired){
      let total1 = player.scores_day1.map(Number).reduce((a,b)=> a+b,0)
      let score1= player.scores_day1.map(Number).reduce((a,b)=> a+b,0) - 72
      let total2= player.scores_day2.map(Number).reduce((a,b)=> a+b,0)
      let score2= player.scores_day2.map(Number).reduce((a,b)=> a+b,0) - 72
      let total_2day= (player.scores_day1.map(Number).reduce((a,b)=> a+b,0) - 72) + (player.scores_day2.map(Number).reduce((a,b)=> a+b,0) - 72)
      return (
        <div>
          <div className='playerscorefield tworow'>
              <div className='player'><span className='name'>{player.name}</span></div>  
         <div className='day1' key={`#day1${player.id}`}><span>1日目</span>
            {player.scores_day1.map((s, idx) =>   
              <div className='score' key={`#day1box${player.id}${idx}`}>
                <input className='scoretext calculation' name='test' key={`#day1${player.id}${idx}`} key={idx} value={s}  onChange={e => changeScore(idx, e.target.value, 1)} />
              </div>
            )} 
            <div className='playertotal'><span>{total1}</span></div>
            <div className='playerscore'><span>{score1}</span></div>
          </div>
          <div className='day2' key={`#day2${player.id}`}><span>2日目</span>
            {player.scores_day2.map((s, idx) =>   
              <div className='score' key={`#day2box${player.id}${idx}`}>
                <input className='scoretext calculation' name='test' key={`#day2${player.id}${idx}`} value={s}  onChange={e => changeScore(idx, e.target.value, 2)} />
              </div>
            )} 
            
            <div className='playertotal'><span>{total2}</span></div>
            <div className='playerscore'><span>{score2}</span></div>
          </div>
          <div className='scoretotal'>{total_2day}</div>
              <div className='dns PlayStart'>
                <input type='checkbox' checked={player.retired? true: false}  onChange={e => changeRetired(e.target.checked)} />
              </div>
              <div className='edit_row'>
                <div>
                  <span><a onClick={savePlayer}>保存</a></span>
                  <span><a onClick={cancelEdit}>キャンセル</a></span>
                </div>
              </div>
          </div>
          <div className='clear'></div>
        </div> 
      )
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
