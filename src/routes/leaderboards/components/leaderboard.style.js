import headerImg from '../assets/banner.jpg'

const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const cellBase = {
  ...alignCenter,
  borderRight: '1px solid #ccc',
  padding: '4px',
}
const colors = {
  accent: '#01a5a3',
  gray: '#eee',
  darkGray: '#ccc',
  white: '#fff',
  score: {
    overDoubleBogey: '#3a3a3a',
    doubleBogey: '#215605',
    bogey: '#043377',
    par: '#05a2d3',
    birdie: '#f7931e',
    underBirdie: '#fc1a3a',
  },
  rank: {
    gold: '#f89406',
    silver: '#999',
    bronze: '#b94a48',
    others: '#333',
  },
}

const style = {
  header: {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '260px',
    color: colors.white,
    filter: 'blur(5px)',
  },
  container: {
    maxWidth: '960px',
  },
  section: {
    marginTop: '16px',
  },
  headerRow: {
    backgroundColor: colors.accent,
    borderLeft: `4px solid ${colors.accent}`,
    borderRight: `4px solid ${colors.accent}`,
    color: '#fff',
  },
  playerRow: {
    backgroundColor: colors.gray,
    borderLeft: `4px solid ${colors.gray}`,
    borderRight: `4px solid ${colors.gray}`,
    fontWeight: 'bold'
  },
  cell: {
    ...cellBase
  },
  cellStop: {
    ...cellBase,
    borderRight: '0px'
  },
  borderBottom: {
    borderBottom: `1px solid ${colors.darkGray}`,
  },
  holeCell: {
    textAlign: 'center',
    width: '40px',
  },
  scoreCell: {
    textAlign: 'center',
    color: colors.white,
    width: '40px',
  },
  scoreCellTotal: {
    textAlign: 'center',
    width: '52px',
  },
  white: {
    backgroundColor: colors.white,
  },
  gray: {
    backgroundColor: colors.gray,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  alignCenter: alignCenter,
  alignLeft: {
    ...alignCenter,
    justifyContent: 'flex-start',
  },
  score: score => {
    if (score > 2) {
      return {
        backgroundColor: colors.score.overDoubleBogey,
      }
    }
    if (score === 2) {
      return {
        backgroundColor: colors.score.doubleBogey,
      }
    }
    if (score === 1) {
      return {
        backgroundColor: colors.score.bogey,
      }
    }
    if (score === 0) {
      return {
        backgroundColor: colors.score.par,
      }
    }
    if (score === -1) {
      return {
        backgroundColor: colors.score.birdie,
      }
    }
    if (score < -1) {
      return {
        backgroundColor: colors.score.underBirdie
      }
    }
    return {
      backgroundColor: 'transparent'
    }
  },
  rankBadge: rank => {
    if (rank === '1') {
      return {
        backgroundColor: colors.rank.gold
      }
    }
    if (rank === '2') {
      return {
        backgroundColor: colors.rank.silver
      }
    }
    if (rank === '3') {
      return {
        backgroundColor: colors.rank.bronze
      }
    }
    return {
      backgroundColor: colors.rank.others
    }
  },
  lineBtn: {
    width: '82px',
    height: '20px',
  }
}

export default style
