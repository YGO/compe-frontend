const cellBase = {
  borderRight: '1px solid #ccc',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  alignLeft: {
    display: 'flex',
    alignItems: 'center',
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
    if (rank === 1) {
      return {
        backgroundColor: colors.rank.gold
      }
    }
    if (rank === 2) {
      return {
        backgroundColor: colors.rank.silver
      }
    }
    if (rank === 3) {
      return {
        backgroundColor: colors.rank.bronze
      }
    }
    return {
      backgroundColor: colors.rank.others
    }
  }
}

export default style
