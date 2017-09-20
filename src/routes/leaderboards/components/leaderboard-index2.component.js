import React from 'react'
import style from './leaderboard.style'

const PlayerIndex = () => (

  <div className='container'>

    <section style={style.section}>
      <div className='row'>
        <div className='col'>POS.</div>
        <div className='col'>Player</div>
        <div className='col'>Total (Gross)</div>
        <div className='col'>THRU</div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row' data-toggle='collapse' data-target='.scores'>
            <div className='col'>1</div>
            <div className='col'>麻田 隆司</div>
            <div className='col'>-5</div>
            <div className='col'>F</div>
          </div>
          <div className='row collapse scores'>
            <div className='col'>
              <div className='row'>
                <div className='col'>1日目</div>
                <div className='col'>scores here</div>
              </div>
              <div className='row'>
                <div className='col'>2日目</div>
                <div className='col'>scores here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

)

// noinspection JSUnusedGlobalSymbols
export default PlayerIndex
