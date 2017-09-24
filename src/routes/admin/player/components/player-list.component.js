import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from './player-list-item.component'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  const sortDay = state.adminPlayers.sortDay

  return {
    players: state.adminPlayers.players.sort((a, b) => {
      const k = `sort_order_day${sortDay}`
      return a[k] > b[k] ? 1 : -1
    }),
    playerEditing: state.adminPlayers.playerEditing,
  }
}

const PlayerList = ({players, playerEditing}) => (
  <div>
    {players.map(p => {
      if (playerEditing === null) {
        return <PlayerListItem key={p.id} {...p} />
      }
      if (p.id !== playerEditing.id) {
        return <PlayerListItem key={p.id} {...p} />
      }
      return <PlayerListItem key={p.id} {...playerEditing} />
    })}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  playerEditing: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
