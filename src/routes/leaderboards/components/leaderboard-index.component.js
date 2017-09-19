
import React from 'react'
import holes from '../../../data/holes'
import PlayerList from './leaderboard-list.component'
import style from './leaderboard.style'
import Helmet from 'react-helmet/es/Helmet'

const PlayerIndex = () => (




  <div className='container'>
    <Helmet>
      <title>スコア入力 | 第19回 PGAティーチングプロ選手権大会</title>
    </Helmet>

    <h1>大会スコア入力画面</h1>

   

    <section id='players' style={style.section}>
      <div>
        <h2>出場選手一覧</h2>
        <div className='row' style={style.daySelectorRow}>
          <div className='col-auto mr-auto'/>

        </div>
        <PlayerList/>
      </div>
    </section>
  </div>




)

// noinspection JSUnusedGlobalSymbols
export default PlayerIndex
