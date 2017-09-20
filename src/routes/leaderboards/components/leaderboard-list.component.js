import { connect } from 'react-redux'
import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { calcTotalForListAndSort } from '../../../services/score.service'
import style from './leaderboard.style'
import PlayerShow from './leaderboard-show.component'

const mapDispatchToProps = {}
const mapStateToProps = state => {
  console.log(calcTotalForListAndSort(state.leaderBoards.players))
  return {
    players: calcTotalForListAndSort(state.leaderBoards.players),
  }
}

const PlayerList = ({players}) => (
  <div>
    <div id='rankingHeader' className='row' style={style.headerRow}>
      <div className='col-2' style={[style.cell, style.transparent]}>POS.
      </div>
      <div className='col-6' style={[style.cell, style.transparent]}>Player
      </div>
      <div className='col-2' style={[style.cell, style.transparent]}>Total
        (Gross)
      </div>
      <div className='col-2' style={[style.cellStop, style.transparent]}>THRU
      </div>
    </div>
    {players.map(p =>
      <PlayerShow key={`p${p.id}`} {...p}/>
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(PlayerList))
