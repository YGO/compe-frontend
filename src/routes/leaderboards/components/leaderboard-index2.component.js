import React from 'react'
import Radium from 'radium'
import style from './leaderboard.style'

const PlayerIndex = () => (

  <div className='container-fluid' style={style.container}>

    <section style={style.section}>
      <div id='rankingHeader' className='row'>
        <div className='col-2' style={[style.cell, style.headerColor]}>POS.
        </div>
        <div className='col-6' style={[style.cell, style.headerColor]}>Player
        </div>
        <div className='col-2' style={[style.cell, style.headerColor]}>Total
          (Gross)
        </div>
        <div className='col-2' style={[style.cell, style.headerColor]}>THRU
        </div>
      </div>
      <div className='row' style={style.playerRow}>
        <div className='col-12 mt-1 mb-1'>
          <div className='row' data-toggle='collapse' data-target='.scores' style={{borderBottom: '1px solid #ccc'}}>
            <div className='col-2' style={[style.cell]}>1</div>
            <div className='col-6' style={[style.cell]}>麻田 隆司</div>
            <div className='col-2' style={[style.cell]}>-5</div>
            <div className='col-2' style={[style.cell, {borderRight: '0px'}]}>F</div>
          </div>
          <div className='row collapse scores'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-2 align-items-center' style={[style.cell]}>
                  1日目
                </div>
                <div className='col-10' style={[{backgroundColor: '#fff'}]}>
                  <div className='row'>
                    <div className='col ml-0 mr-0 pl-0 pr-0 pt-1 pb-1'>
                      <table className='table table-bordered table-sm mb-0'
                             style={[{backgroundColor: '#eee'}]}>
                        <thead>
                        <tr>
                          {Array(9).fill().map((_, idx) =>
                            <th style={{textAlign: 'center'}}>{idx + 1}</th>
                          )}
                          <th style={{textAlign: 'center', width: '52px'}}>OUT
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          {Array(9).fill().map(() =>
                            <td style={{textAlign: 'center'}}>+3</td>
                          )}
                          <td style={{textAlign: 'center'}}>36</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='col ml-0 mr-0 pl-0 pr-0 pt-1 pb-1'>
                      <table className='table table-bordered table-sm mb-0'
                             style={[{backgroundColor: '#eee'}]}>
                        <thead>
                        <tr>
                          {Array(9).fill().map((_, idx) =>
                            <th style={{textAlign: 'center'}}>{idx + 1}</th>
                          )}
                          <th style={{textAlign: 'center', width: '52px'}}>IN
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          {Array(9).fill().map(() =>
                            <td style={{textAlign: 'center'}}>+3</td>
                          )}
                          <td style={{textAlign: 'center'}}>36</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>

)

// noinspection JSUnusedGlobalSymbols
export default Radium(PlayerIndex)
