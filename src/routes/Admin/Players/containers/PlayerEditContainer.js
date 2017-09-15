import { connect } from 'react-redux'
import {
  cancelEdit,
  changeRetired,
  changeScore,
  savePlayer
} from '../modules/players'
import PlayerEdit from '../components/PlayerEdit'
import { calcTotals } from '../../../../services/score.service'

const mapDispatchToProps = dispatch => {
  return {
    cancelEdit: () => {
      dispatch(cancelEdit())
    },
    savePlayer: () => {
      dispatch(savePlayer())
    },
    changeScore: (idx, score, row) => {
      dispatch(changeScore(idx, score, row))
    },
    changeRetired: (retired) => {
      dispatch(changeRetired(retired))
    },
  }
}

const mapStateToProps = state => {
  const player = state.playersApp.playerEditing
  const totals = calcTotals(player.scores_day1, player.scores_day2)

  return {
    ...totals,
    player: player,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEdit)
