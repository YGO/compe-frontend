import React from 'react'
import PropTypes from 'prop-types'

class PlayerShow extends React.Component {
  
  renderPlayer(id, name, retired, scores_day1, scores_day2, editPlayer){
    let total1 = scores_day1.map(Number).reduce((a,b)=> a+b,0)
    let score1= scores_day1.map(Number).reduce((a,b)=> a+b,0) - 72
    let total2= scores_day2.map(Number).reduce((a,b)=> a+b,0)
    let score2= scores_day2.map(Number).reduce((a,b)=> a+b,0) - 72
    let total_2day= (scores_day1.map(Number).reduce((a,b)=> a+b,0) - 72) + (scores_day2.map(Number).reduce((a,b)=> a+b,0) - 72)
    return (
      <div>
        <div className='playerscorefield tworow'>
          <div className='player'><span className='name'>{name}</span></div>  
          <div className='day1' key={`#day1${id}`}><span>1日目</span>
            {scores_day1.map((s, idx) =>   
              <div className='score' key={`#day1box${id}${idx}`}>
                <input className='scoretext calculation' name='test' key={`#day1${id}${idx}`}  value={s}  disabled />
              </div>
            )} 
            <div className='playertotal'><span>{total1}</span></div>
            <div className='playerscore'><span>{score1}</span></div>
          </div>
          <div className='day2' key={`#day2${id}`}><span>2日目</span>
            {scores_day2.map((s, idx) =>   
              <div className='score' key={`#day2box${id}${idx}`}>
                <input className='scoretext calculation' name='test' key={`#day2${id}${idx}`} value={s}  disabled />
              </div>
            )} 
            
            <div className='playertotal'><span>{total2}</span></div>
            <div className='playerscore'><span>{score2}</span></div>
          </div>
          <div className='scoretotal'>{total_2day}</div>
          <div className='dns PlayStart'>
            <input type='checkbox' checked={retired? true: false} disabled />
          </div>

          <div className='edit_row'>
            <div><span><a onClick={() => editPlayer(id)}>編集</a></span></div>
          </div>
        </div>
        <div className='clear'></div>
      </div> 
    )
  }
  render() {
    const { id, name,retired, scores_day1,scores_day2,editPlayer } = this.props
    return (     
            this.renderPlayer(id, name,retired, scores_day1,scores_day2,editPlayer)
      )
  }
}

PlayerShow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  scores_day1: PropTypes.array.isRequired,
  scores_day2: PropTypes.array.isRequired,
  editPlayer: PropTypes.func.isRequired,
}

export default PlayerShow
