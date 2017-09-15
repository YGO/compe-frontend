import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  const sortDay = state.playersApp.sortDay

  return {
    players: state.playersApp.players,
    playersCompare: (a, b) => {
      const k = `sort_order_day${sortDay}`
      return a[k] > b[k] ? 1 : -1
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
