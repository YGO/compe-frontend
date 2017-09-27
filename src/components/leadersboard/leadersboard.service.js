const findCurrentRoundIndex = (scoresPerRound) => {
  return scoresPerRound.findIndex(scores => {
    return scores.some(s => s === undefined)
  })
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

  const findLastHole = (scores) => {
    const scoresOut = scores.slice(0, 9)
    const scoresIn = scores.slice(9, 18)
    if (scoresIn.every(s => s === undefined)) {
      return scoresOut.filter(s => s !== undefined).length
    }
    if (scoresIn.every(s => s !== undefined) && scoresOut.every(s => s === undefined)) {
      return 18
    }
    if (scoresIn.every(s => s !== undefined)) {
      return scoresOut.filter(s => s !== undefined).length
    }
    return scoresIn.filter(s => s !== undefined).length + 9
  }

  return findLastHole(scores) + ''
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
