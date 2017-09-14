import { connect } from 'react-redux'
import RefreshBtn from '../components/RefreshBtn'
import { changePlayerByDay } from '../modules/players'

const mapStateToProps = state => ({
  loading: state.playersApp.loading
})

const mapDispatchToProps = {
  changePlayerByDay
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshBtn)
