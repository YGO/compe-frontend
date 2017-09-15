import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerEdit from './PlayerEdit'
import PlayerShow from './PlayerShow'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  const sortDay = state.playersApp.sortDay

  return {
    players: state.playersApp.players,
    playersCompare: (a, b) => {
      const k = `sort_order_day${sortDay}`
      return a[k] > b[k] ? 1 : -1
    }
  }
}

function Player (props) {
  if (props.isEditing) {
    return <PlayerEdit/>
  }
  return <PlayerShow {...props} />
}

const PlayerList = ({players, playersCompare}) => (
  <div className='div_parent'>
    {players.sort(playersCompare).map(p =>
      <Player key={p.id} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  playersCompare: PropTypes.func.isRequired,
}

Player.propTypes = {
  isEditing: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
