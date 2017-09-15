import { connect } from 'react-redux'
import { editPlayer } from '../modules/players'
import PlayerShow from '../components/PlayerShow'
import { calcTotals } from '../../../../services/score.service'

const mapDispatchToProps = dispatch => ({
  editPlayer: id => {
    dispatch(editPlayer(id))
  },
})

const mapStateToProps = (state, props) => {
  return calcTotals(props.scores_day1, props.scores_day2)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerShow)
