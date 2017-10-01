import { connect } from 'react-redux'
import {
  cancelEdit,
  changeRetired,
  changeStroke,
  editEntry,
  saveEntry
} from './competition-show.module'
import EntryListItem from './entry-list-item.component'

const mapDispatchToProps = dispatch => ({
  onClickEdit: (id) => {
    dispatch(editEntry(id))
  },
  onClickCancel: () => {
    dispatch(cancelEdit())
  },
  onClickSave: () => {
    dispatch(saveEntry())
  },
  onChangeScore: (scoreId, idx, value) => {
    dispatch(changeStroke(scoreId, idx, value))
  },
  onChangeRetired: (retired) => {
    dispatch(changeRetired(retired))
  },
})

export default connect(null, mapDispatchToProps)(EntryListItem)
