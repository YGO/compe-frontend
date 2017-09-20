import React from 'react'
import Radium from 'radium'
import style from './leaderboard.style'
import PlayerList from './leaderboard-list.component'
import ScoreToggler from './score-toggler.component'
import lineBtnImg from '../assets/linebutton_82x20.png'

const PlayerIndex = () => (

  <div className='container-fluid' style={style.container}>
    <section id='buttons' style={[style.section]}>
      <div className='row'>
        <div className='col-auto p-0 pl-1'>
          <ScoreToggler/>
        </div>
        <div className='col-auto p-0 pl-1'>
          <div className='fb-like' data-href='https://asyridxcpg.localtunnel.me'
               data-layout='button' data-action='like' data-size='small'
               data-show-faces='false' data-share='true'/>
        </div>
        <div className='col-auto p-0 pl-1'>
          <a
            href='http://line.me/R/msg/text/?http%3A%2F%2Flivescore.golfnetwork.plus%2Fpgateaching_201709'>
            <img src={lineBtnImg} alt='LINE' style={style.lineBtn}/>
          </a>
        </div>
      </div>
    </section>

    <section style={style.section}>
      <PlayerList/>
    </section>

  </div>

)

// noinspection JSUnusedGlobalSymbols
export default Radium(PlayerIndex)
