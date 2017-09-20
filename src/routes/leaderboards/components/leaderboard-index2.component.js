import React from 'react'
import Radium from 'radium'
import style from './leaderboard.style'

const PlayerIndex = () => (

  <div className='container-fluid' style={style.container}>

    <section style={style.section}>
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
      <div className='row' style={style.playerRow}>
        <div className='col-12 mt-1 mb-1' style={style.white}>
          <div className='row' data-toggle='collapse' data-target='.scores'
               style={[style.borderBottom, {cursor: 'pointer'}]}>
            <div className='col-2' style={[style.cell]}>1</div>
            <div className='col-6' style={[style.cell, style.alignLeft]}><span
              className='text-primary'>麻田 隆司</span></div>
            <div className='col-2' style={[style.cell]}>-5</div>
            <div className='col-2' style={[style.cellStop]}>
              F
            </div>
          </div>
          <div className='row collapse scores show'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-2' style={[style.cell]}>1日目
                </div>
                <div className='col-10' style={[style.white]}>
                  <div className='row'>
                    <div className='col m-0 p-0 pt-1 pb-1'>
                      <table className='table table-bordered table-sm mb-0'
                             style={[style.gray]}>
                        <thead>
                        <tr>
                          {Array(9).fill().map((_, idx) =>
                            <th style={[style.scoreCell]}>{idx + 1}</th>
                          )}
                          <th style={[style.scoreCellTotal]}>OUT
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          {Array(9).fill().map(() =>
                            <td style={[style.scoreCell]}>+3</td>
                          )}
                          <td style={[style.scoreCellTotal]}>36</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='col m-0 p-0 pt-1 pb-1'>
                      <table className='table table-bordered table-sm mb-0'
                             style={[style.gray]}>
                        <thead>
                        <tr>
                          {Array(9).fill().map((_, idx) =>
                            <th style={[style.scoreCell]}>{idx + 1}</th>
                          )}
                          <th style={[style.scoreCellTotal]}>IN
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          {Array(9).fill().map(() =>
                            <td style={[style.scoreCell]}>+3</td>
                          )}
                          <td style={[style.scoreCellTotal]}>36</td>
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
