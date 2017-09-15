import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { editPlayer } from '../modules/players'
import { calcTotals } from '../../../../services/score.service'

const mapDispatchToProps = dispatch => ({
  editPlayer: id => {
    dispatch(editPlayer(id))
  },
})

const mapStateToProps = (state, props) => {
  return calcTotals(props.scores_day1, props.scores_day2)
}

const PlayerShow = ({
                      // props
                      id,
                      name,
                      retired,
                      scores_day1,
                      scores_day2,
                      totalStrokesDay1,
                      totalStrokesDay2,
                      totalScoreDay1,
                      totalScoreDay2,
                      totalScore,
                      // actions
                      editPlayer,
                    }) => (
  <div>
    <div className='playerscorefield tworow'>
      <div className='player'><span className='name'>{name}</span></div>

      <div className='day1'><span>1日目</span>
        {scores_day1.map((s, idx) =>
          <div className='score' key={`PlayerShow-p${id}-s${idx}-d1`}>
            <input className='scoretext calculation' value={s} disabled/>
          </div>
        )}
        <div className='playertotal'><span>{totalStrokesDay1}</span></div>
        <div className='playerscore'><span>{totalScoreDay1}</span></div>
      </div>

      <div className='day2'><span>2日目</span>
        {scores_day2.map((s, idx) =>
          <div className='score' key={`PlayerShow-p${id}-s${idx}-d2`}>
            <input className='scoretext calculation' value={s} disabled/>
          </div>
        )}
        <div className='playertotal'><span>{totalStrokesDay2}</span></div>
        <div className='playerscore'><span>{totalScoreDay2}</span></div>
      </div>

      <div className='scoretotal'>{totalScore}</div>
      <div className='dns PlayStart'>
        <input type='checkbox' checked={retired} disabled/>
      </div>
      <div className='edit_row'>
        <div>
          <span><a onClick={() => editPlayer(id)}>編集</a></span>
        </div>
      </div>
    </div>
    <div className='clear'/>
  </div>
)

PlayerShow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  retired: PropTypes.bool.isRequired,
  scores_day1: PropTypes.array.isRequired,
  scores_day2: PropTypes.array.isRequired,
  editPlayer: PropTypes.func.isRequired,
  totalStrokesDay1: PropTypes.number.isRequired,
  totalStrokesDay2: PropTypes.number.isRequired,
  totalScoreDay1: PropTypes.number.isRequired,
  totalScoreDay2: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerShow)
