import React from 'react'
import Radium from 'radium'
import LeadersBoardMain from './leadersboard-main.component'
import ScoreToggler from './score-toggler.component'
import lineBtnImg from '../assets/linebutton_82x20.png'
import pgaLogoImg from '../assets/pga-logo.png'
import gnIconImg from '../assets/gn_icon.png'
import appStoreImg from '../assets/appstore.svg'
import playStoreImg from '../assets/google_play.png'
import Helmet from 'react-helmet/es/Helmet'
import { alignCenter, alignLeft } from '../../common.styles'
import { style } from './leadersboard-index.styles'

let SHARE_URL
if (process.env.NODE_ENV === 'development') {
  SHARE_URL = 'https://asyridxcpg.localtunnel.me/pgateaching_201709/'
} else {
  SHARE_URL = 'https://livescore.golfnetwork.plus/pgateaching_201709/'
}

const YOUTUBE_URL = 'https://www.youtube.com/embed/vkHwUXWMDus?autoplay=1'

const LeadersBoardIndex = () => (
  <div style={[style.self]}>
    <Helmet>
      <title>第19回 PGAティーチングプロ選手権大会</title>
    </Helmet>

    <header style={[style.header.self]}>
      <div className='jumbotron' style={[style.header.bg]}/>
      <div className='jumbotron container-fluid'
           style={[style.header.main]}>
        <div className='row'>
          <div className='col-auto'>
            <img src={pgaLogoImg} alt='pga'/>
          </div>
          <div className='col' style={[alignLeft]}>
            <h1 className='display-5'>第19回 PGAティーチングプロ選手権大会</h1>
          </div>
        </div>
      </div>
    </header>

    <div className='container-fluid' style={[style.container]}>

      <section id='competition-info' style={[style.section]}>
        <div className='row'>
          <div className='col-12' style={[alignCenter]}>
            <iframe className='youtubesize' width='560' height='315'
                    src={YOUTUBE_URL}
                    frameBorder='0' allowFullScreen=''/>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col pl-1'>
            <ul className='list-unstyled'>
              <li><a href='http://www.pgatour.jp/teaching/2017/'>第19回
                PGAティーチングプロ選手権大会</a></li>
              <li><a href='http://www.noboribetsu-cc.com/'>登別カントリー倶楽部</a></li>
              <li>2017年9月21日 〜 22日</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='buttons' style={[style.section]}>
        <div className='row'>
          <div className='col-auto p-0 pl-1'>
            <ScoreToggler/>
          </div>
          <div className='col-auto p-0 pl-1'>
            <div className='fb-like'
                 data-href={SHARE_URL}
                 data-layout='button' data-action='like' data-size='small'
                 data-show-faces='false' data-share='true'/>
          </div>
          <div className='col-auto p-0 pl-1'>
            <a
              href={`http://line.me/R/msg/text/?${encodeURIComponent(SHARE_URL)}`}>
              <img src={lineBtnImg} alt='LINE'
                   style={style.buttons.lineBtn}/>
            </a>
          </div>
        </div>
      </section>

      <section id='main' style={[style.section]}>
        <LeadersBoardMain/>
      </section>

      <section id='comments' style={[style.section]}>
        <div className='row'>
          <div className='col'>
            <div className='fb-like'
                 data-href={SHARE_URL}
                 data-layout='button' data-action='like' data-size='small'
                 data-show-faces='false' data-share='true'/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='fb-comments'
                 data-href={SHARE_URL}
                 data-numposts='5'/>
          </div>
        </div>
      </section>

      <footer style={[style.footer.self]}>
        <div className='row p-3' style={[style.footer.row]}>
          <div className='col'>
            このリーダーズボードは、国内ダウンロード数No.1の無料スコア管理アプリ ゴルフネットワークプラス のコンペ機能で提供しています
          </div>
        </div>
        <div className='row pl-3 pr-3 pb-3' style={[style.footer.row]}>
          <div className='col mr-auto'>
            <img src={gnIconImg} alt='GN+' className='mr-2 float-left'
                 style={[style.footer.gnIcon]}/>
            <p className='pb-0 mb-0' style={{fontSize: '0.7em'}}>
              あなたのゴルフライフをもっと楽しく<br/>ダウンロード数 国内No.1 ゴルフスコア管理アプリ</p>
            <p>GOLF NETWORK PLUS</p>
          </div>
          <div className='col-auto'>
            <a
              className='mr-3'
              href='https://play.google.com/store/apps/details?id=com.asai24.golf'><img
              src={playStoreImg} alt='googleplay'
              style={[style.footer.marketIcon]}/></a>
            <a
              href='https://itunes.apple.com/jp/app/gorufusukoa-guan-li-gorufu/id561067103?mt=8'><img
              src={appStoreImg} alt='appstore'
              style={[style.footer.marketIcon]}/></a>
          </div>
        </div>
      </footer>
    </div>

  </div>
)

// noinspection JSUnusedGlobalSymbols
export default Radium(LeadersBoardIndex)
