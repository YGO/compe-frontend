import React from 'react'
import Radium from 'radium'
import style from './leaderboard.style'
import PlayerList from './leaderboard-list.component'

const PlayerIndex = () => (

  <div className='container-fluid' style={style.container}>

    <section style={style.section}>
      <PlayerList/>
    </section>

  </div>

)

// noinspection JSUnusedGlobalSymbols
export default Radium(PlayerIndex)
