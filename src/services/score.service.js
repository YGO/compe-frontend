import holes from '../data/holes'

const totalPar = holes.map(h => h.par).reduce((a, b) => a + b)

export const calcTotals = (scoresDay1, scoresDay2) => {
  const totalStrokesDay1 = scoresDay1.map(Number).reduce((a, b) => a + b)
  const totalStrokesDay2 = scoresDay2.map(Number).reduce((a, b) => a + b)

  const totalScoreDay1 = totalStrokesDay1 - totalPar
  const totalScoreDay2 = totalStrokesDay2 - totalPar
  const totalScore = totalScoreDay1 + totalScoreDay2

  return {
    totalStrokesDay1: totalStrokesDay1,
    totalStrokesDay2: totalStrokesDay2,
    totalScoreDay1: totalScoreDay1,
    totalScoreDay2: totalScoreDay2,
    totalScore: totalScore,
  }
}
