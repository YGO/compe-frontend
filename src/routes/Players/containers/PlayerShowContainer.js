import { connect } from 'react-redux'
import { editPlayer } from '../modules/players'
import PlayerShow from '../components/PlayerShow'

const mapDispatchToProps = dispatch => ({
  editPlayer: id => {
    dispatch(editPlayer(id))
  },
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerShow)
