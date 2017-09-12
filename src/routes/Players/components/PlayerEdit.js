import React from 'react'
import PropTypes from 'prop-types'

const PlayerEdit = ({ player, cancelEdit, savePlayer, changeScore }) => (
  <div className='row'>
    <div className='col'>
      <div className='row'>
        <div className='col-auto'>{player.name}</div>
        <div className='col-auto'>
          <a href='#' onClick={cancelEdit}>Cancel</a>
          | <a href='#' onClick={savePlayer}>Save</a>
        </div>
      </div>
      <div className='row'>
        {player.scores.map((s, idx) =>
          <input key={'p_' + player.id + 's_' + idx} value={s} className='col'
            onChange={e => changeScore(idx, e.target.value)} />
        )}
      </div>
    </div>
  </div>
)

PlayerEdit.propTypes = {
  player: PropTypes.object.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
}

export default PlayerEdit
