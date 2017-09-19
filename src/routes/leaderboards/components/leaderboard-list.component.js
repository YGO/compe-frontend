import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import PlayerShow from './leaderboard-show.component'
import { calcTotalForList } from '../../../services/score.service'
const mapDispatchToProps = {}

const mapStateToProps = state => {
 
  return {
    players: calcTotalForList(state.leaderBoards.players),
    playersCompare: (a, b) => {
      const k1 = `retired`
      const k2 = `totalScore`
      if(a[k1] === b[k1])
        return a[k2]-b[k2]
      else if(a[k1])
          return 1
      else return -1
    }
  }
}


function Player (props) {
  return <PlayerShow {...props} />
}

class PlayerList extends React.Component {
  contructor(){
    num = 1
    temp = 0
    rank =  0
  }
  
  render() {
    const {players, playersCompare} = this.props
    return (
       <div>
        {players.sort(playersCompare).map(p =>
          if(p.totalScore !== this.temp){
            this.rank = this.rank + this.num
          }
          this.temp = p.totalScore
          this.num++
          <Player key={p.id} {...p, rank:rank} />
        )}
      </div>
    )
  } 
}

 

const PlayerList2 = ({players, playersCompare}) => (
  <div>
    {players.sort(playersCompare).map(p =>
      <Player key={p.id} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  playersCompare: PropTypes.func.isRequired,
}

Player.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
