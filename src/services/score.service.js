import holes from '../data/holes'

const pars = holes.map(h => h.par)

export const calcTotals = (scoresDay1, scoresDay2) => {
  const totalOutStrokesDay1 = scoresDay1.slice(0, 9).map(Number).reduce((a, b) => a + b)
  const totalInStrokesDay1 = scoresDay1.slice(9, 18).map(Number).reduce((a, b) => a + b)
  const totalStrokesDay1 = totalOutStrokesDay1 + totalInStrokesDay1

  const totalOutStrokesDay2 = scoresDay2.slice(0, 9).map(Number).reduce((a, b) => a + b)
  const totalInStrokesDay2 = scoresDay2.slice(9, 18).map(Number).reduce((a, b) => a + b)
  const totalStrokesDay2 = totalOutStrokesDay2 + totalInStrokesDay2

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
    totalOutStrokesDay1: totalOutStrokesDay1,
    totalInStrokesDay1: totalInStrokesDay1,
    totalOutStrokesDay2: totalOutStrokesDay2,
    totalInStrokesDay2: totalInStrokesDay2
  }
}

export const calcTHRU = (scoresDay1, scoresDay2, retired) => {
  if (retired) return 'F'

  let scoresOutDay1 = scoresDay1.slice(0, 9)
  let scoresInDay1 = scoresDay1.slice(9, 18)
  let scoresOutDay2 = scoresDay2.slice(0, 9)
  let scoresInDay2 = scoresDay2.slice(9, 18)

  let dataValueOutDay1 = scoresOutDay1.filter(x => x > 0)
  let dataValueInDay1 = scoresInDay1.filter(x => x > 0)
  let dataValueOutDay2 = scoresOutDay2.filter(x => x > 0)
  let dataValueInDay2 = scoresInDay2.filter(x => x > 0)

  let indexOutDay1 = scoresOutDay1.lastIndexOf(dataValueOutDay1[dataValueOutDay1.length - 1])
  let indexInDay1 = scoresInDay1.lastIndexOf(dataValueInDay1[dataValueInDay1.length - 1])
  let indexOutDay2 = scoresOutDay2.lastIndexOf(dataValueOutDay2[dataValueOutDay2.length - 1])
  let indexInDay2 = scoresInDay2.lastIndexOf(dataValueInDay2[dataValueInDay2.length - 1])

  if (indexOutDay1 === -1 && indexInDay1 === -1 && indexOutDay2 === -1 && indexInDay2 === -1) return '-' // just started
  if ((indexOutDay1 + indexInDay1) === 16 && (indexOutDay2 + indexInDay2) === 16) return 'F' // finished all with various scores
  if ((indexOutDay1 + indexInDay1) === 16 && indexOutDay2 === -1 && indexInDay2 === -1) return 'F' // finished day1

  if ((indexOutDay1 + indexInDay1) === 16) { // finished day1
    if (indexInDay2 === 8 && indexOutDay2 === -1) return 18 // and finish In day2 and no score Out day2
    else if (indexInDay2 === 8 && indexOutDay2 !== -1) return indexOutDay2 + 1// and finish In day2 and have score Out day2
    else if (indexInDay2 !== -1) return indexInDay2 + 10// and have score In day2
    else return indexOutDay2 + 1 // and have score Out day1
  }

  if (indexInDay1 === 8 && indexOutDay1 === -1) return 18 // finish In day1 and no score Out day1
  else if (indexInDay1 === 8 && indexOutDay1 !== -1) return indexOutDay1 + 1 // finish In day1 and have score Out day1
  else if (indexInDay1 !== -1) return indexInDay1 + 10// finish In day1 and have score Out day1
  else return indexOutDay1 + 1 // have score Out day1
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

export const addTotals = player => {
  return {
    ...player,
    ...calcTotals(player.scores_day1, player.scores_day2),
  }
}

export const addTHRU = player => {
  return {
    ...player,
    thru: calcTHRU(player.scores_day1, player.scores_day2, player.retired)
  }
}
