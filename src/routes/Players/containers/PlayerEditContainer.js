import { connect } from 'react-redux'
import { cancelEdit, changeScore, savePlayer, changeRetired } from '../modules/players'
import PlayerEdit from '../components/PlayerEdit'

const mapDispatchToProps = dispatch => {
  return {
    cancelEdit: () => {
      dispatch(cancelEdit())
    },
    savePlayer: () => {
      dispatch(savePlayer())
    },
    changeScore: (idx, score, row) => {
      dispatch(changeScore(idx, score, row))
    },
    changeRetired: (retired) => {
      dispatch(changeRetired(retired))
    },
  }
}

const mapStateToProps = state => ({
  player: state.playersApp.playerEditing,
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEdit)
