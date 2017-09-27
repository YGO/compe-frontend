import {
  calcTHRU,
  rankPlayers
} from '../../../../src/components/leadersboard/leadersboard.service'

describe('rankPlayers', () => {
  it('should rank players by using totalScore and retired', () => {
    const playersWithTotalScore = [
      {id: 1, totalScore: 0, retired: false},
      {id: 2, totalScore: -1, retired: true},
      {id: 3, totalScore: 1, retired: false},
      {id: 4, totalScore: 0, retired: false},
      {id: 5, totalScore: -1, retired: false},
    ]
    const ranks = rankPlayers(playersWithTotalScore).map(p => p.rank)
    expect(ranks).to.deep.equal([2, 5, 4, 2, 1])
  })
})

describe('calcTHRU', () => {
  const _ = undefined
  const notPlayed = [
    ...[_, _, _, _, _, _, _, _, _],
    ...[_, _, _, _, _, _, _, _, _],
  ]
  // day1
  it('should be F when retired', () => {
    expect(calcTHRU([notPlayed, notPlayed], true)).to.equal('F')
  })
  it('should be - when not played', () => {
    expect(calcTHRU([notPlayed, notPlayed], false)).to.equal('-')
  })
  it('should be 1 when played only hole 1 at day1', () => {
    const scoresDay1 = [
      ...[0, _, _, _, _, _, _, _, _],
      ...[_, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, notPlayed], false)).to.equal('1')
  })
  it('should be 9 when played hole 1 to 9 at day1', () => {
    const scoresDay1 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[_, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, notPlayed], false)).to.equal('9')
  })
  it('should be 10 when played hole 1 to 10 at day1', () => {
    const scoresDay1 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, notPlayed], false)).to.equal('10')
  })
  it('should be F 1/2 when played hole 1 to 18 at day1', () => {
    const scoresDay1 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU([scoresDay1, notPlayed], false)).to.equal('F 1/2')
  })
  it('should be 10 when played only hole 10 at day1', () => {
    const scoresDay1 = [
      ...[_, _, _, _, _, _, _, _, _],
      ...[0, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, notPlayed], false)).to.equal('10')
  })
  it('should be 18 when played hole 10 to 18 at day1', () => {
    const scoresDay1 = [
      ...[_, _, _, _, _, _, _, _, _],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU([scoresDay1, notPlayed], false)).to.equal('18')
  })
  it('should be 1 when played hole 10 to 18 and 1 at day1', () => {
    const scoresDay1 = [
      ...[0, _, _, _, _, _, _, _, _],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU([scoresDay1, notPlayed], false)).to.equal('1')
  })
  // day2
  const scoresDay1 = [
    ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  it('should be 1 when played hole 1 at day2', () => {
    const scoresDay2 = [
      ...[0, _, _, _, _, _, _, _, _],
      ...[_, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, scoresDay2], false)).to.equal('1')
  })
  it('should be 9 when played hole 1 to 9 at day2', () => {
    const scoresDay2 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[_, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, scoresDay2], false)).to.equal('9')
  })
  it('should be 10 when played hole 1 to 10 at day2', () => {
    const scoresDay2 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, scoresDay2], false)).to.equal('10')
  })
  it('should be F when played hole 1 to 18 at day2', () => {
    const scoresDay2 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU([scoresDay1, scoresDay2], false)).to.equal('F')
  })
  it('should be 10 when played hole 10 at day2', () => {
    const scoresDay2 = [
      ...[_, _, _, _, _, _, _, _, _],
      ...[0, _, _, _, _, _, _, _, _],
    ]
    expect(calcTHRU([scoresDay1, scoresDay2], false)).to.equal('10')
  })
  it('should be 18 when played hole 10 to 18 at day2', () => {
    const scoresDay2 = [
      ...[_, _, _, _, _, _, _, _, _],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU([scoresDay1, scoresDay2], false)).to.equal('18')
  })
  it('should be 1 when played hole 10 to 18 and 1 at day2', () => {
    const scoresDay2 = [
      ...[0, _, _, _, _, _, _, _, _],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU([scoresDay1, scoresDay2], false)).to.equal('1')
  })
})
