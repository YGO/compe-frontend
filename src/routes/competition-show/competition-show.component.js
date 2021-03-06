import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import LeadersBoardContainer from './leadersboard.container'
import ScoreToggler from '../../components/leadersboard/score-toggler.component'
import lineBtnImg from './assets/linebutton_82x20.png'
import gnIconImg from './assets/gn_icon.png'
import appStoreImg from './assets/appstore.svg'
import playStoreImg from './assets/google_play.png'
import Helmet from 'react-helmet/es/Helmet'
import { alignCenter } from '../common.styles'
import { style } from './competition-show.styles'
import { connect } from 'react-redux'
import Header from './header.component'

let SHARE_URL
if (process.env.NODE_ENV === 'development') {
  SHARE_URL = 'https://asyridxcpg.localtunnel.me/pgateaching_201709/'
} else {
  SHARE_URL = window.location.href
}

const mapStateToProps = state => {
  const {
    id,
    title,
    official_url: officialUrl,
    club_name: clubName,
    club_url: clubUrl,
    youtube_url: youtubeUrl,
    term,
  } = state.mainApp.competition

  return {
    id,
    title,
    officialUrl,
    clubName,
    clubUrl,
    youtubeUrl,
    term,
  }
}

const CompetitionShow = ({
                           id,
                           title,
                           officialUrl,
                           clubName,
                           clubUrl,
                           youtubeUrl,
                           term,
                         }) => (
  <div style={[style.self]}>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <Header competitionId={id} title={title}/>

    <div className='container-fluid' style={[style.container]}>

      <section id='competition-info' style={[style.section]}>
        {youtubeUrl &&
        <div className='row mb-4'>
          <div className='col-12' style={[alignCenter]}>
            <iframe className='youtubesize' width='560' height='315'
                    src={youtubeUrl}
                    frameBorder='0' allowFullScreen=''/>
          </div>
        </div>
        }
        <div className='row'>
          <div className='col pl-1'>
            <ul className='list-unstyled'>
              <li><a href={officialUrl}>{title}</a></li>
              <li><a href={clubUrl}>{clubName}</a></li>
              <li>{term}</li>
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

      <section id='leaders-board' style={[style.section]}>
        <LeadersBoardContainer/>
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
              // eslint-disable-next-line max-len
              href='https://itunes.apple.com/jp/app/gorufusukoa-guan-li-gorufu/id561067103?mt=8'><img
              src={appStoreImg} alt='appstore'
              style={[style.footer.marketIcon]}/></a>
          </div>
        </div>
      </footer>
    </div>

  </div>
)

CompetitionShow.defaultProps = {
  id: '',
  title: '',
  clubName: '',
  clubUrl: '',
  term: '',
}

CompetitionShow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  officialUrl: PropTypes.string,
  clubName: PropTypes.string.isRequired,
  clubUrl: PropTypes.string.isRequired,
  youtubeUrl: PropTypes.string,
  term: PropTypes.string.isRequired,
}

// noinspection JSUnusedGlobalSymbols
export default connect(mapStateToProps)(Radium(CompetitionShow))
