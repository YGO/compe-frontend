import React from 'react'
import PlayerEditContainer from '../containers/PlayerEditContainer'
import PlayerShowContainer from '../containers/PlayerShowContainer'
import PropTypes from 'prop-types'

const dynamicSort =(property) => {
    var sortOrder = 1;

    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
function Player (props) {
    console.log("props",props);
  if (props.isEditing) {
    return <PlayerEditContainer />
  }
  return <PlayerShowContainer {...props} />
}

const PlayerList = ({ players,optionDisplay }) => (

  <div className="div_parent">

    {players.sort(dynamicSort(optionDisplay)).map(p =>
      <Player key={p.id} {...p} />
    )}
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

Player.propTypes = {
  isEditing: PropTypes.bool.isRequired,
}

export default PlayerList
