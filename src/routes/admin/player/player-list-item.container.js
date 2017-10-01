import { connect } from 'react-redux'
import {
  cancelEdit,
  changeRetired,
  changeStroke,
  editEntry,
  saveEntry
} from './player.module'
import PlayerListItem from './player-list-item.component'

const mapDispatchToProps = dispatch => ({
  onClickEditPlayer: (id) => {
    dispatch(editEntry(id))
  },
  onClickCancelEdit: () => {
    dispatch(cancelEdit())
  },
  onClickSavePlayer: () => {
    dispatch(saveEntry())
  },
  onChangeScore: (scoreId, idx, value) => {
    dispatch(changeStroke(scoreId, idx, value))
  },
  onChangeRetired: (retired) => {
    dispatch(changeRetired(retired))
  },
})

export default connect(null, mapDispatchToProps)(PlayerListItem)
