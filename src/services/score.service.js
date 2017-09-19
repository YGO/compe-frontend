import holes from '../data/holes'

const pars = holes.map(h => h.par)

export const calcTotals = (scoresDay1, scoresDay2) => {
  const totalStrokesDay1 = scoresDay1.map(Number).reduce((a, b) => a + b)
  const totalStrokesDay2 = scoresDay2.map(Number).reduce((a, b) => a + b)
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

export const calcTotalForList = (list) => {

  return list.map(p => {
    let calc = calcTotals(p.scores_day1, p.scores_day2);
    return Object.assign(p, calc);
  });


  
}