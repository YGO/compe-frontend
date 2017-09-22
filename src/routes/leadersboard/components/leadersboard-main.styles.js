import { alignCenter } from '../../common.styles'
import { colors } from './leadersboard.colors'

const cellBase = {
  ...alignCenter,
  borderRight: '1px solid #ccc',
  padding: '4px',
}

const style = {
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
  },
}

export default style
