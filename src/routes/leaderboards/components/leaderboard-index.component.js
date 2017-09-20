import React from 'react'
import PlayerList from './leaderboard-list.component'
import style from './leaderboard.style'
import images from './leaderboard.image'

const PlayerIndex = () => (

  <div className='container'>
    <section className='hero' style={style.hero}>

      <div className='container'>

        <div className='row hero-content'>
          <div className='col-md-12'>
            <h1 className='animated fadeInDown'>第18回<br/>PGAティーチングプロ選手権大会</h1>
          </div>
        </div>
      </div>
    </section>
    <section className='video'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <iframe className='youtubesize' width='560' height='315'
                    src='https://www.youtube.com/embed/cr0X-LO8Hto?autoplay=1' />
          </div>
        </div>
      </div>
    </section>
    <section className='competition-info'>
      <div>
        <div className='row'>
          <div className='span'><a href='http://www.pgatour.jp/teaching/2016'>第１８回ＰＧＡティーチングプロ選手権大会</a>
          </div>
        </div>
        <div className='row'>
          <div className='span'><a
            href='https://www.shishido.co.jp/shizu/course/'>静ヒルズカントリークラブ</a>
          </div>
        </div>
        <div className='row'>
          <div className='span'>2016年11月1日〜2日</div>
        </div>
      </div>
    </section>

    <section id='players' style={style.section}>
      <div>
        <h2>出場選手一覧</h2>
        <div className='row' style={style.daySelectorRow}>
          <div className='col-auto mr-auto'/>

        </div>
        <div className='ranking-header' style={style.rankHeader}>
          <div className='ranking-row'>
            <table className='table table-sm table-bordered'
                   style={style.scoreTableTop}>
              <tbody>
              <tr style={style.tableTd}>
                <td style={style.tableTd14}>POS.</td>
                <td style={style.tableTd40}>Player</td>
                <td style={style.tableTd14}>Total (Gross)</td>
                <td style={style.tableTd14}>Total (Net)</td>
                <td style={style.tableTd14}>THRU</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PlayerList/>
      </div>
    </section>
    <section className='footer' style={style.footer}>
      <div className='container'>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='power-by'>
                  このリーダーズボードは、国内ダウンロード数No.1の無料スコア管理アプリ ゴルフネットワークプラス
                  のコンペ機能で提供しています
                </div>
              </div>

            </div>
            <br/>

            <div className='row'>
              <div className='col-sm-6 col-xs-12'>
                <div className='col-sm-2'><img alt='icon'
                                               className='gnlogo img-responsive'
                                               src={images.icon}
                                               style={style.logoGn}/></div>
                <div className='col-sm-8'>
                  <div>

                    <p className='catchword'>あなたのゴルフライフをもっと楽しく<br/>
                      ダウンロード数 国内No.1 ゴルフスコア管理アプリ</p>
                    <p className='brand'>GOLF NETWORK PLUS</p>
                  </div>
                </div>

              </div>
              <div className='col-sm-6 col-xs-12'>

                <div className='store-icons'><a
                  href='https://play.google.com/store/apps/details?id=com.asai24.golf'><img
                  alt='googleplay' src={images.googlePlay} width='135'/></a> <a
                  href='https://itunes.apple.com/jp/app/gorufusukoa-guan-li-gorufu/id561067103?mt=8'><img
                  alt='appstore' src={images.appStore}/></a></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>

)

// noinspection JSUnusedGlobalSymbols
export default PlayerIndex
