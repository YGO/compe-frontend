import { connect } from 'react-redux'
import { cancelEdit, changeScore, savePlayer, changeName, changeRetired } from '../modules/players'
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
    changeName: (name) => {
      dispatch(changeName(name))
    },
    changeRetired: (retired) => {
      console.log('retire container',retired)
      dispatch(changeRetired(retired))
    },
  }
}

const mapStateToProps = state => ({
  player: state.playersApp.playerEditing,
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEdit)
