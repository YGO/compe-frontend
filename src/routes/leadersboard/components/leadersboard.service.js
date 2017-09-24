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
