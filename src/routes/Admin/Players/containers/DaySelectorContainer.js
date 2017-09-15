import { connect } from 'react-redux'
import DaySelector from '../components/DaySelector'
import { changeSortDay } from '../modules/players'

const mapStateToProps = state => ({
  loading: state.playersApp.loading
})

const mapDispatchToProps = {
  changeSortDay: changeSortDay
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySelector)
