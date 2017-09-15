import React from 'react'
import PropTypes from 'prop-types'
import CancelButton from '../images/cancel-button.png'
import EditButton from '../images/edit-button.png'
import SaveButton from '../images/save-button.png'

class PlayerShow extends React.Component {
  
  renderPlayer(id, name,retired, optionDisplay, scores_day1,scores_day2,total1,score1,total2,score2,total_2day, editPlayer){
    if(optionDisplay==0){

      return (
        <div>
          <div className="playerscorefield tworow">
            <div className="player"><span className="name">{name}-{optionDisplay}</span></div>  
            <div className="day1" key={`#day1${id}`}><span>1日目</span>
              {scores_day1.map((s, idx) =>   
                <div className="score" key={`#day1box${id}${idx}`}>
                  <input className="scoretext calculation" name="test" key={`#day1${id}${idx}`}  value={s}  disabled />
                </div>
              )} 
              <div className="playertotal"><span>{total1}</span></div>
              <div className="playerscore"><span>{score1}</span></div>
            </div>
            <div className="day2" key={`#day2${id}`}><span>2日目</span>
              {scores_day2.map((s, idx) =>   
                <div className="score" key={`#day2box${id}${idx}`}>
                  <input className="scoretext calculation" name="test" key={`#day2${id}${idx}`} value={s}  disabled />
                </div>
              )} 
              
              <div className="playertotal"><span>{total2}</span></div>
              <div className="playerscore"><span>{score2}</span></div>
            </div>
            <div className="scoretotal">{total_2day}</div>
            <div className="dns PlayStart">
              <input type="checkbox" checked={retired? true: false} disabled />
            </div>
            <div className="edit_row">
              <a onClick={() => editPlayer(id)}><img src={EditButton} /></a>
            </div>
          </div>
          <div className='clear'></div>
        </div> 
      )
    }else if(optionDisplay==1){
      return (
        <div>
          <div className="playerscorefield onerow">
              <div className="player"><span className="name">{name}-{optionDisplay}</span></div>  
          <div className="day1" key={`#day1${id}`}><span>1日目</span>
            {scores_day1.map((s, idx) =>   
              <div className="score" key={`#day1box${id}${idx}`}>
                <input className="scoretext calculation" name="test" key={`#day1${id}${idx}`} value={s}  disabled />
              </div>
            )} 
            <div className="playertotal"><span>{total1}</span></div>
            <div className="playerscore"><span>{score1}</span></div>
          </div>
          <div className="scoretotal">{total_2day}</div>
              <div className="dns PlayStart">
                <input type="checkbox" checked={retired? true: false} disabled />
              </div>
              <div className="edit_row">
                <a onClick={() => editPlayer(id)}><img src={EditButton} /></a>
              </div>
          </div>
          <div className='clear'></div>
        </div>
      )
    }
    else if(optionDisplay==2){
      return (
        <div>
          <div className="playerscorefield onerow">
              <div className="player"><span className="name">{name}-{optionDisplay}</span></div>
              <div className="day2" key={`#day2${id}`}><span>2日目</span>
                {scores_day2.map((s, idx) =>   
                  <div className="score" key={`#day2box${id}${idx}`}>
                    <input className="scoretext calculation" name="test" key={`#day1${id}${idx}`}  disabled />
                  </div>
                )} 
                <div className="playertotal"><span>{total2}</span></div>
                <div className="playerscore"><span>{score2}</span></div>
              </div>
              <div className="scoretotal">{total_2day}</div>
                  <div className="dns PlayStart">
                    <input type="checkbox" checked={retired? true: false} disabled />
                  </div>
                  <div className="edit_row">
                    <a onClick={() => editPlayer(id)}><img src={EditButton} /></a>
                  </div>
              </div>
              <div className='clear'></div>
          </div>
      )
    }
  }
  render() {
    const { id, name,retired, optionDisplay, scores_day1,scores_day2,total1,score1,total2,score2,total_2day, editPlayer } = this.props
    return (     
            this.renderPlayer(id, name,retired, optionDisplay, scores_day1,scores_day2,total1,score1,total2,score2,total_2day, editPlayer)
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
  optionDisplay:PropTypes.number.isRequired,
}

export default PlayerShow
