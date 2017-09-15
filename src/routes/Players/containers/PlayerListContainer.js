import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'

const mapDispatchToProps = {}

const mapStateToProps = state => ({
  players: state.playersApp.players,
  optionDisplay:state.playersApp.optionDisplay
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
