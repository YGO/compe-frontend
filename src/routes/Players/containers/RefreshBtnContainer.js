import { connect } from 'react-redux'
import RefreshBtn from '../components/RefreshBtn'
import { fetchPlayers } from '../modules/players'

const mapStateToProps = state => ({
  loading: state.playersApp.loading
})

const mapDispatchToProps = {
  fetchPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshBtn)
