import { connect } from 'react-redux'
import LeadersBoard from '../../components/leadersboard/leadersboard.component'

const mapDispatchToProps = {}

const mapStateToProps = state => {
  return {
    players: state.competition.players
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadersBoard)
