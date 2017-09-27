import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from './player-list-item.component'

const createSortReference = (roundId, roundEntries) => {
  const sortReference = roundEntries.filter(e => e.round_id === roundId)
    .map(e => [e.player_id, e.sort_order])
  return Object.assign(...sortReference.map(r => ({[r[0]]: r[1]})))
}

const mapStateToProps = state => {
  const roundToSort = state.adminApp.roundToSort
  const roundEntries = state.adminApp.round_entries
  const draft = state.adminApp.draft
  const sortReference = createSortReference(roundToSort.id, roundEntries)

  const players = state.adminApp.players.sort((p1, p2) =>
    sortReference[p1.id] > sortReference[p2.id] ? 1 : -1
  ).map(p => {
    if (draft === null) return p
    if (draft.player.id !== p.id) return p
    return {...p, isEditing: true}
  })

  return {players}
}

const PlayerList = ({players}) => (
  <div>
    {players.map(p =>
      <PlayerListItem key={p.id} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(PlayerList)
