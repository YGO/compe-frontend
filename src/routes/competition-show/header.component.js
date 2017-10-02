/* eslint-disable camelcase */
import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { alignLeft } from '../common.styles'
import pgaLogoImg from './assets/pga-logo.png'
import bg_pgateaching_201611 from './assets/bg-pgateaching_201611.jpg'
import bg_pgateaching_201709 from './assets/bg-pgateaching_201709.jpg'
import bg_ks_compe_201710 from './assets/bg-ks_compe_201710.jpg'

const CompetitionShowHeader = ({competitionId, title}) => (
  <header style={[style.self]}>
    <div className='jumbotron'
         style={[style.bg, style.bgImg[competitionId]]}/>
    <div className='jumbotron container-fluid'
         style={[style.main]}>
      <div className='row'>
        {competitionId.match(/^pga/) &&
        <div className='col-auto'>
          <img src={pgaLogoImg} alt='pga'/>
        </div>
        }
        <div className='col' style={[alignLeft]}>
          <h1 className='display-5'>{title}</h1>
        </div>
      </div>
    </div>
  </header>
)

const style = {
  self: {
    position: 'relative',
  },
  bg: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '260px',
    color: '#fff',
    filter: 'blur(5px)',
  },
  bgImg: {
    'pgateaching_201611': {
      backgroundImage: `url(${bg_pgateaching_201611})`
    },
    'pgateaching_201709': {
      backgroundImage: `url(${bg_pgateaching_201709})`
    },
    'ks_compe_201710': {
      backgroundImage: `url(${bg_ks_compe_201710})`
    },
  },
  main: {
    position: 'absolute',
    top: '0',
    color: 'white',
    backgroundColor: 'transparent',
    height: '260px',
  },
}

CompetitionShowHeader.propTypes = {
  competitionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Radium(CompetitionShowHeader)
