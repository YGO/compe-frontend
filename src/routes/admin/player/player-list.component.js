import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from './player-list-item.component'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  // const sortDay = state.adminPlayers.sortDay

  return {
    // players: state.adminPlayers.players.sort((a, b) => {
    //   const k = `sort_order_day${sortDay}`
    //   return a[k] > b[k] ? 1 : -1
    // }),
    players: state.adminPlayers.players,
    draft: state.adminPlayers.draft,
  }
}

const PlayerList = ({
                      players,
                      draft,
                    }) => (
  <div>
    {players.map(p => {
      if (draft === null) {
        return <PlayerListItem key={p.id} {...p} />
      }
      if (p.id !== draft.player.id) {
        return <PlayerListItem key={p.id} {...p} />
      }
      return <PlayerListItem key={p.id} isEditing {...draft.player} />
    })}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  draft: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
