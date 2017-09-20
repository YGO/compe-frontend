import React from 'react'
import Radium from 'radium'
import style from './leaderboard.style'
import PlayerList from './leaderboard-list.component'
import ScoreToggler from './score-toggler.component'

const PlayerIndex = () => (

  <div className='container-fluid' style={style.container}>
    <section id='buttons' style={style.section}>
      <ScoreToggler />
    </section>

    <section style={style.section}>
      <PlayerList/>
    </section>

  </div>

)

// noinspection JSUnusedGlobalSymbols
export default Radium(PlayerIndex)
