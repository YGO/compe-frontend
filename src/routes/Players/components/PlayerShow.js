import React from 'react'
import PropTypes from 'prop-types'

const PlayerShow = ({ id, name,retired, scores_day1,scores_day2, editPlayer }) => (
  <div className='row'>
    <div className='col'>
      <div className='row'>
        <div className='col-auto'>{name}</div>
        <div className='col-auto'>
          <a href='#' onClick={() => editPlayer(id)}>Edit</a>
        </div>
      </div>
      
      
      <div className='row'>
        {scores_day1.map((s, idx) =>
          <input key={idx} value={s} className='col' disabled />
        )} 
      </div>
      <div className='row'>
        {scores_day2.map((s2, idx2) =>
          <input key={idx2} value={s2} className='col' disabled />
        )}
      </div>
    </div>
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
