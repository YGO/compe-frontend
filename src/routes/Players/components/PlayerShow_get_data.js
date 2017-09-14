import React from 'react'
import PropTypes from 'prop-types'


class PlayerShow extends React.Component {
  
  renderPlayer(id, name,retired, optionDisplay, scores_day1,scores_day2,total1,score1,total2,score2,total_2day, editPlayer){

    if(optionDisplay==0){

      return (
     [
         <div className="day1"><span>
           1日目</span>
          
          {scores_day1.map((s, idx) =>   
            <div className="score">
              <input className="scoretext calculation" name="test" key={idx} value={s}  disabled />
            </div>
          )} 
          <div className="playertotal"><span>{total1}</span></div>
          <div className="playerscore"><span>{score1}</span></div>
        </div>,
        <div className="day2"><span>
             2日目</span>
          {scores_day2.map((s, idx) =>   
            <div className="score">
              <input className="scoretext calculation" name="test" key={idx} value={s}  disabled />
            </div>
          )} 
          
          <div className="playertotal"><span>{total2}</span></div>
          <div className="playerscore"><span>{score2}</span></div>
        </div>
       ]
      )

    }
    else if(optionDisplay==1){
      return (
        <div className="day1"><span>
           1日目</span>
          
          {scores_day1.map((s, idx) =>   
            <div className="score">
              <input className="scoretext calculation" name="test" key={idx} value={s}  disabled />
            </div>
          )} 
          <div className="playertotal"><span>{total1}</span></div>
          <div className="playerscore"><span>{score1}</span></div>
        </div>
      )
    }
    else if(optionDisplay==2){
      return (
        <div className="day2"><span>
           2日目</span>
        {scores_day2.map((s, idx) =>   
          <div className="score">
            <input className="scoretext calculation" name="test" key={idx} value={s}  disabled />
          </div>
        )} 
        
        <div className="playertotal"><span>{total2}</span></div>
        <div className="playerscore"><span>{score2}</span></div>
      </div>
      )
    }

  }
  render() {
const { id, name,retired, optionDisplay, scores_day1,scores_day2, editPlayer } = this.props
    let total1 = scores_day1.reduce((a,b)=> a+b,0)
    let score1= scores_day1.reduce((a,b)=> a+b,0) - 52
    let total2= scores_day2.reduce((a,b)=> a+b,0)
    let score2= scores_day2.reduce((a,b)=> a+b,0) - 52
    let total_2day= (scores_day1.reduce((a,b)=> a+b,0) - 52) + (scores_day2.reduce((a,b)=> a+b,0) - 52)
    return (
        <div>
          <div className="playerscorefield">
              <div className="player"><span className="name">{name}-{optionDisplay}</span></div>      
                
            {this.renderPlayer(id, name,retired, optionDisplay, scores_day1,scores_day2,total1,score1,total2,score2,total_2day, editPlayer)}

              <div className="scoretotal">{total_2day}</div>
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
  }
}

const PlayerDefaut = ({ id, name,retired, optionDisplay, scores_day1,scores_day2, editPlayer }) => (
 
 
<div>
  <div className="playerscorefield">
      <div className="player"><span className="name">{name}-{optionDisplay}</span></div>
       

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
  optionDisplay:PropTypes.number.isRequired,
}

export default PlayerShow
