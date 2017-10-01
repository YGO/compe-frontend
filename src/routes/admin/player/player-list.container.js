import { connect } from 'react-redux'
import PlayerList from './player-list.component'

const createSortReference = (roundId, roundEntries) => {
  const sortReference = roundEntries.filter(re => re.round_id === roundId)
    .map(re => [re.entry_id, re.sort_order])
  return Object.assign(...sortReference.map(r => ({[r[0]]: r[1]})))
}

const toEditable = draft => entry => {
  if (draft === null) return entry
  if (draft.entry.id !== entry.id) return entry
  return {...draft.entry, isEditing: true}
}

const mapStateToProps = state => {
  const {
    roundToSort,
    roundEntries,
    draft,
    holes,
    loading,
  } = state.adminApp
  const pars = holes.map(h => h.par)
  const sortReference = createSortReference(roundToSort.id, roundEntries)

  const entries = state.adminApp.entries.sort((e1, e2) =>
    sortReference[e1.id] > sortReference[e2.id] ? 1 : -1
  ).map(toEditable(draft))
    .map(e => {
      const _roundEntries = e.isEditing ? draft.roundEntries : roundEntries
      return {
        id: e.id,
        name: e.player_name,
        retired: e.retired,
        isEditing: e.isEditing,
        roundEntries: _roundEntries.filter(re => re.entry_id === e.id)
      }
    })

  return {entries, pars, loading}
}

export default connect(mapStateToProps)(PlayerList)
