import React from 'react'
import PropTypes from 'prop-types'

  
      // console.log('savellla')
      // fetch('https://lyywnpoayb.execute-api.ap-northeast-1.amazonaws.com/staging/players/7eg4a120-555', {
      // method: 'PUT',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({"scores_day1":[1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"name":"aaaa","retired":true,"scores_day2":[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2] })
      // })
      // .then(res => {})
      // .then(players => {
      //   dispatch(savePlayer()
      // })


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
        {player.scores_day1.map((s, idx) =>
          <input key={'p_' + player.id + 's_' + idx} value={s} className='col'
            onChange={e => changeScore(idx, e.target.value, 1)} />
        )}
      </div>
        <div className='row'>
        {player.scores_day2.map((s, idx) =>
          <input key={'p_' + player.id + 's_' + idx} value={s} className='col'
            onChange={e => changeScore(idx, e.target.value, 2)} />
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
