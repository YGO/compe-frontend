import React from 'react'
import holes from '../../../../data/holes'
import DaySelector from './DaySelector'
import PlayerList from './PlayerList'

const PlayersView = () => (
  <div id='mainContent'>
    <div id='top-info'>
      <div id='topImage'>
        <div id='golfInfo'>
          <div className='infoText'><span>
               第19回 PGAティーチングプロ選手権大会</span></div>
          <div className='infoText'><span>
               登別カントリー倶楽部</span></div>
          <div className='infoText'><span>
               2017年9月21日 〜 22日</span></div>
          <div className='infoText'><a href='http://sp.golfnetwork.co.jp/tcp/'
                                       target='_black'><span>http://sp.golfnetwork.co.jp/tcp/</span></a>
          </div>
          <DaySelector/>
        </div>
      </div>
      <div id='holeinfo'>
        <div id='hole'><span>hole</span>
          {holes.map(h =>
            <div className='hole' key={`PlayersView-h${h.hole_num}`}>
              <span>{h.hole_num}</span>
            </div>
          )}
        </div>
        <div id='yards'><span>yards</span>
          {holes.map(h =>
            <div className='yards' key={`PlayersView-y${h.hole_num}`}>
              <span>{h.yard}</span>
            </div>
          )}
        </div>
        <div id='par'><span>par</span>
          {holes.map(h =>
            <div className='par' key={`PlayersView-p${h.hole_num}`}>
              <span>{h.par}</span>
            </div>
          )}
        </div>
      </div>
      <div id='total'><span>Total</span></div>
      <div id='score'><span>Score</span></div>
      <div id='scoretotal'><span>合計</span></div>
      <div id='dns'><span>棄権</span></div>
      <div id='edit_row'><span>編集</span></div>

    </div>
    <div>
      <PlayerList/>
    </div>
  </div>
)

// noinspection JSUnusedGlobalSymbols
export default PlayersView
