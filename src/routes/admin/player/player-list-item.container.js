import { connect } from 'react-redux'
import {
  cancelEdit,
  changeRetired,
  changeScore,
  editPlayer,
  savePlayer
} from './player.module'
import PlayerListItem from './player-list-item.component'

const mapDispatchToProps = dispatch => ({
  onClickEditPlayer: (id) => {
    dispatch(editPlayer(id))
  },
  onClickCancelEdit: () => {
    dispatch(cancelEdit())
  },
  onClickSavePlayer: () => {
    dispatch(savePlayer())
  },
  onChangeScore: (scoreId, idx, value) => {
    dispatch(changeScore(scoreId, idx, value))
  },
  onChangeRetired: (retired) => {
    dispatch(changeRetired(retired))
  },
})

export default connect(null, mapDispatchToProps)(PlayerListItem)
