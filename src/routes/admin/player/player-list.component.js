import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from './player-list-item.component'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  const roundToSort = state.adminPlayers.roundToSort
  let sortReference = state.adminPlayers.round_entries
    .filter(e => e.round_id === roundToSort.id)
    .map(e => [e.player_id, e.sort_order])
  sortReference = Object.assign(...sortReference.map(r => ({[r[0]]: r[1]})))

  const players = state.adminPlayers.players.sort((p1, p2) => {
    return sortReference[p1.id] > sortReference[p2.id] ? 1 : -1
  })

  return {
    players: [...players],
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
