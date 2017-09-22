import holes from '../data/holes'

const pars = holes.map(h => h.par)

export const calcTotals = (scoresDay1, scoresDay2) => {
  const totalStrokesDay1 = scoresDay1.slice(0, 18).map(Number).reduce((a, b) => a + b)
  const totalStrokesDay2 = scoresDay2.slice(0, 18).map(Number).reduce((a, b) => a + b)
  const totalStrokes = totalStrokesDay1 + totalStrokesDay2

  const totalParDay1 = pars.filter((p, idx) => scoresDay1[idx] > 0)
    .reduce((a, b) => a + b, 0)
  const totalParDay2 = pars.filter((p, idx) => scoresDay2[idx] > 0)
    .reduce((a, b) => a + b, 0)

  const totalScoreDay1 = totalStrokesDay1 - totalParDay1
  const totalScoreDay2 = totalStrokesDay2 - totalParDay2
  const totalScore = totalScoreDay1 + totalScoreDay2

  return {
    totalStrokesDay1: totalStrokesDay1,
    totalStrokesDay2: totalStrokesDay2,
    totalStrokes: totalStrokes,
    totalScoreDay1: totalScoreDay1,
    totalScoreDay2: totalScoreDay2,
    totalScore: totalScore,
  }
}

export const calcTHRU = (scoresDay1, scoresDay2, retired) => {
  if (retired) return 'F'
  if (scoresDay1.every(s => s === 0) && scoresDay2.every(s => s === 0)) return '-'
  if (scoresDay1.every(s => s > 0) && scoresDay2.every(s => s > 0)) return 'Day2 - F'
  if (scoresDay1.every(s => s > 0) && scoresDay2.every(s => s === 0)) return 'Day1 - F'

  const findLastHole = (scoresOut, scoresIn) => {
    if (scoresIn.every(s => s === 0)) return scoresOut.filter(s => s > 0).length
    if (scoresIn.every(s => s > 0) && scoresOut.every(s => s === 0)) return 18
    if (scoresIn.every(s => s > 0)) return scoresOut.filter(s => s > 0).length
    return scoresIn.filter(s => s > 0).length + 9
  }

  const scoresOutDay1 = scoresDay1.slice(0, 9)
  const scoresInDay1 = scoresDay1.slice(9, 18)
  const scoresOutDay2 = scoresDay2.slice(0, 9)
  const scoresInDay2 = scoresDay2.slice(9, 18)

  if (scoresDay2.every(s => s === 0)) {
    return findLastHole(scoresOutDay1, scoresInDay1) + ''
  }
  return findLastHole(scoresOutDay2, scoresInDay2) + ''
}

export const rankPlayers = (players) => {
  const totalScores = players.map(p => {
    if (p.retired) return Infinity
    return p.totalScore
  })
  const sorted = totalScores.slice().sort((a, b) => a - b)
  const ranks = totalScores.slice().map((v) => sorted.indexOf(v) + 1)

  return players.map((p, idx) => ({
    ...p,
    rank: ranks[idx],
  }))
}

