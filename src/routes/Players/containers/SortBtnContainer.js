import { connect } from 'react-redux'
import SortBtn from '../components/SortBtn'
import { changePlayerByDay } from '../modules/players'

const mapStateToProps = state => ({
  loading: state.playersApp.loading
})

const mapDispatchToProps = {
  changePlayerByDay
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBtn)
