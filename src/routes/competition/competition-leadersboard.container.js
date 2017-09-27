import { connect } from 'react-redux'
import LeadersBoard from '../../components/leadersboard/leadersboard.component'

const mapStateToProps = state => {
  const {players, rounds, scores, holes} = state.competition
  return {
    players,
    rounds,
    scores,
    holes,
  }
}

export default connect(mapStateToProps)(LeadersBoard)
