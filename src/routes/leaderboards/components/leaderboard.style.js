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
  scoreCell: {
    textAlign: 'center',
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
  }
}

export default style
