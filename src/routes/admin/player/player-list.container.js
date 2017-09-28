import { connect } from 'react-redux'
import PlayerList from './player-list.component'

const createSortReference = (roundId, roundEntries) => {
  const sortReference = roundEntries.filter(e => e.round_id === roundId)
    .map(e => [e.player_id, e.sort_order])
  return Object.assign(...sortReference.map(r => ({[r[0]]: r[1]})))
}

const toEditable = draft => p => {
  if (draft === null) return p
  if (draft.player.id !== p.id) return p
  return {...p, isEditing: true}
}

const mapStateToProps = state => {
  const {
    roundToSort,
    roundEntries,
    draft,
    rounds,
    scores,
    holes,
    loading,
  } = state.adminApp
  const pars = holes.map(h => h.par)
  const sortReference = createSortReference(roundToSort.id, roundEntries)

  const players = state.adminApp.players.sort((p1, p2) =>
    sortReference[p1.id] > sortReference[p2.id] ? 1 : -1
  ).map(toEditable(draft))
    .map(p => {
      const _scores = p.isEditing ? draft.scores : scores
      return {
        ...p,
        scoresPerRound: rounds.map(r =>
          _scores.find(s => s.player_id === p.id && s.round_id === r.id)
        )
      }
    })

  return {players, pars, loading}
}

export default connect(mapStateToProps)(PlayerList)
