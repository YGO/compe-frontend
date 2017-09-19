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
    totalScore: totalScore

  }
}
export const   calcTHRU = (pScoreDate1,pScoreDate2,pRetired) =>{
  if (pRetired) {
      return 'F';
  }

  if (!pScoreDate1 || pScoreDate1.length < 1) {
      return 0;
  }

  var element;
  for (var i = 0; i < pScoreDate1.length; i++) {
     element = pScoreDate1[i];
      if (element == 0) {
          return i;
      }
  }

  if (pScoreDate2) {
      for (var i = 0; i < pScoreDate2.length; i++) {
      element = pScoreDate2[i];
          if (element == 0) {
              return i;
          }
      }
  }

  return 'F';
}
export const calcTotalForListAndSort = (list) => {

  let lastScore = 0;
  let rank = 0;
  let listWithTotal = calcTotalForList(list)
  listWithTotal = listWithTotal.sort(function(a, b){
    const k1 = `retired`
    const k2 = `totalScore`
    if(a[k1] === b[k1])
      return a[k2]-b[k2]
    else if(a[k1])
        return 1
    else return -1
  });

  let listWithRank =  listWithTotal.map((p, i) => {

    if(p.totalScore!=lastScore) {

      rank = i+1;

    }
    lastScore = p.totalScore

    return Object.assign(p, {rank:rank});
  })


  return listWithTotal;



}

export const calcTotalsInOut = (scoresDay1, scoresDay2,retired) => {
  const totalOutStrokesDay1 = scoresDay1.slice(0,9).map(Number).reduce((a, b) => a + b)
  const totalInStrokesDay1 = scoresDay1.slice(9,18).map(Number).reduce((a, b) => a + b)
  const totalStrokesDay1 = totalOutStrokesDay1 + totalInStrokesDay1

  const totalOutStrokesDay2 = scoresDay2.slice(0,9).map(Number).reduce((a, b) => a + b)
  const totalInStrokesDay2 = scoresDay2.slice(9,18).map(Number).reduce((a, b) => a + b)
  const totalStrokesDay2 = totalOutStrokesDay2 + totalInStrokesDay2
  const totalStrokes = totalStrokesDay1 + totalStrokesDay2
  const thru = calcTHRU(scoresDay1,scoresDay2,retired)
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
    totalOutStrokesDay1: totalOutStrokesDay1,
    totalOutStrokesDay2: totalOutStrokesDay2,
    totalInStrokesDay1: totalInStrokesDay1,
    totalInStrokesDay2: totalInStrokesDay2,
    totalStrokes: totalStrokes,
    totalScoreDay1: totalScoreDay1,
    totalScoreDay2: totalScoreDay2,
    totalScore: totalScore,
    thru:thru
  }
}

export const calcTotalForList = (list) => {

  return list.map(p => {
    let calc = calcTotalsInOut(p.scores_day1, p.scores_day2,p.retired);
    return Object.assign(p, calc);
  });


  
}