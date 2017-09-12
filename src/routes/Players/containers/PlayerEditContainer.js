import { connect } from 'react-redux'
import { cancelEdit, changeScore, savePlayer } from '../modules/players'
import PlayerEdit from '../components/PlayerEdit'

const mapDispatchToProps = dispatch => {
  return {
    cancelEdit: () => {
      dispatch(cancelEdit())
    },
    savePlayer: () => {
      dispatch(savePlayer())
    },
    changeScore: (idx, score) => {
      dispatch(changeScore(idx, score))
    },
  }
}

const mapStateToProps = state => ({
  player: state.playersApp.playerEditing,
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEdit)
