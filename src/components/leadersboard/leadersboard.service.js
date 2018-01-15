const findCurrentRoundIndex = (scoresPerRound) => {
  return scoresPerRound.findIndex(scores => {
    return scores.some(s => s === undefined)
  })
}

const findLastHole = (scores) => {
  const playedOrNot = scores.map(s => s === undefined ? 0 : 1)
  const gradient = playedOrNot.map((v, idx) => {
    const next = playedOrNot[idx + 1]
    if (!next) return 0 - v
    return next - v
  })

  return gradient.findIndex(g => g === -1) + 1
}

export const calcTHRU = (scoresPerRound, retired) => {
  if (retired) return 'F'

  const curRoundIdx = findCurrentRoundIndex(scoresPerRound)
  if (curRoundIdx < 0) return 'F'

  const scores = scoresPerRound[curRoundIdx]
  if (curRoundIdx === 0 && scores.every(s => s === undefined)) return '-'
  if (scores.every(s => s === undefined)) {
    return `F ${curRoundIdx}/${scoresPerRound.length}`
  }

  return findLastHole(scores) + ''
}

export const rankPlayers = (players) => {
  const totalScores = players.map(p => {
    if (p.retired) return Infinity
    if (!hasScore(p.scoresPerRound)) return Infinity
    return p.totalScore
  })
  const sorted = totalScores.slice().sort((a, b) => a - b)
  const ranks = totalScores.slice().map((v) => sorted.indexOf(v) + 1)

  return players.map((p, idx) => ({
    ...p,
    rank: ranks[idx],
  }))
}

export const hasScore = (scoresPerRound) => {
  const flattened = Array.prototype.concat(...scoresPerRound)
  return flattened.every(s => s !== undefined)
}
