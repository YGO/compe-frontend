import PropTypes from 'prop-types'
import React from 'react'
import PlayerList from './player-list.component'
import Helmet from 'react-helmet/es/Helmet'
import { Link } from 'react-router'
import style from './player-index.styles'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    competition: state.adminPlayers.competition,
    holes: state.adminPlayers.holes,
  }
}

const PlayerIndex = ({
                       competition,
                       holes,
                     }) => (
  <div className='container'>
    <Helmet>
      <title>スコア入力 | {competition.title}</title>
    </Helmet>

    <h1>大会スコア入力画面</h1>

    <section id='competition-info' style={style.section}>
      <h2>大会情報</h2>
      <div className='row'>
        <div className='col-auto'>
          <dl>
            <dt>大会名</dt>
            <dd><Link to={`/${competition.id}`}>{competition.title}</Link></dd>
            <dt>ゴルフ場</dt>
            <dd>{competition.clubName}</dd>
            <dt>開催日</dt>
            <dd>2017年9月21日 〜 22日</dd>
          </dl>
        </div>
        <div className='col'>
          <h5>ホール</h5>
          <table className='table table-sm'>
            <thead>
            <tr>
              {holes.map((h, idx) =>
                <th key={`h${idx}`}>{h.hole_num}</th>
              )}
            </tr>
            </thead>
            <tbody>
            <tr>
              {holes.map((h, idx) =>
                <td key={`y${idx}`}>{h.yard}</td>
              )}
            </tr>
            <tr>
              {holes.map((h, idx) =>
                <td key={`p${idx}`}>{h.par}</td>
              )}
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id='players' style={style.section}>
      <div>
        <h2>出場選手一覧</h2>
        <div className='row' style={style.daySelectorRow}>
          <div className='col-auto mr-auto'/>
          {/*<div className='col-auto'>*/}
          {/*<DaySelector/>*/}
          {/*</div>*/}
        </div>
        <PlayerList/>
      </div>
    </section>
  </div>
)

PlayerIndex.propTypes = {
  competition: PropTypes.object.isRequired,
  holes: PropTypes.array.isRequired,
}

// noinspection JSUnusedGlobalSymbols
export default connect(mapStateToProps)(PlayerIndex)
