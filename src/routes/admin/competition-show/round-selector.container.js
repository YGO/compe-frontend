import { connect } from 'react-redux'
import { changeRoundToSort } from './competition-show.module'
import RoundSelector from './round-selector.component'

const mapStateToProps = state => ({
  rounds: state.adminApp.rounds,
})

const mapDispatchToProps = dispatch => ({
  onChangeRound: (id) => {
    dispatch(changeRoundToSort(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RoundSelector)
