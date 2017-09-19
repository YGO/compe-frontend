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
export const   calcTHRU = (scoresDay1,scoresDay2,retired) =>{
  if (retired) {
      return 'F';
  }

  if (!scoresDay1 || scoresDay1.length < 1) {
      return 0;
  }

  let dataValueDay1 = scoresDay1.filter(x => x>0);
  let dataValueDay2 = scoresDay2.filter(x => x>0);
  let index = scoresDay1.lastIndexOf(dataValueDay1[dataValueDay1.length-1])
  let index2 = scoresDay2.lastIndexOf(dataValueDay2[dataValueDay2.length-1])

  if(index==-1&&index2==-1)
   return '-'
  if((index==17&&scoresDay1[0]>0&&index2==-1) || (index==17&&scoresDay1[0]>0&&index2==17&&scoresDay2[0]>0))
   return 'F'
  if(index>0&&index2>0) return index2+1
  if(index==0||index2==0) return 1
  return index>0?index+1:index2+1


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
    if(p.retired==true) {
      return Object.assign(p, {rank:"-"});
    }
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