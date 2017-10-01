import { connect } from 'react-redux'
import LeadersBoard from '../../components/leadersboard/leadersboard.component'

const mapStateToProps = state => {
  const {entries, rounds, roundEntries, holes} = state.mainApp

  const players = entries.map(e => {
    return {
      id: e.id.replace('.', '-'),
      name: e.player_name,
      retired: e.retired,
      strokesPerRound: roundEntries.filter(re => re.entry_id === e.id)
        .map(re => re.strokes),
    }
  })

  return {
    players,
    rounds,
    holes,
  }
}

export default connect(mapStateToProps)(LeadersBoard)
