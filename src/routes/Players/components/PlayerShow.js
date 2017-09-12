import React from 'react'
import PropTypes from 'prop-types'

const PlayerShow = ({ id, name, scores, editPlayer }) => (
  <div className='row'>
    <div className='col'>
      <div className='row'>
        <div className='col-auto'>{name}</div>
        <div className='col-auto'>
          <a href='#' onClick={() => editPlayer(id)}>Edit</a>
        </div>
      </div>
      <div className='row'>
        {scores.map((s, idx) =>
          <input key={idx} value={s} className='col' disabled />
        )}
      </div>
    </div>
  </div>
)

PlayerShow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scores: PropTypes.array.isRequired,
  editPlayer: PropTypes.func.isRequired,
}

export default PlayerShow
