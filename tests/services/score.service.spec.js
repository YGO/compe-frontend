import { calcTHRU, rankPlayers } from '../../src/services/score.service'

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
  const zeros = [
    ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  // day1
  it('should be F when retired', () => {
    expect(calcTHRU(zeros, zeros, true)).to.equal('F')
  })
  it('should be - when not played', () => {
    expect(calcTHRU(zeros, zeros, false)).to.equal('-')
  })
  it('should be 1 when played only hole 1 at day1', () => {
    const scores = [
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scores, zeros, false)).to.equal('1')
  })
  it('should be 9 when played hole 1 to 9 at day1', () => {
    const scores = [
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scores, zeros, false)).to.equal('9')
  })
  it('should be 10 when played hole 1 to 10 at day1', () => {
    const scores = [
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scores, zeros, false)).to.equal('10')
  })
  it('should be F when played hole 1 to 18 at day1', () => {
    const scores = [
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
    ]
    expect(calcTHRU(scores, zeros, false)).to.equal('Day1 - F')
  })
  it('should be 10 when played only hole 10 at day1', () => {
    const scores = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scores, zeros, false)).to.equal('10')
  })
  it('should be 18 when played hole 10 to 18 at day1', () => {
    const scores = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
    ]
    expect(calcTHRU(scores, zeros, false)).to.equal('18')
  })
  it('should be 1 when played hole 10 to 18 and 1 at day1', () => {
    const scores = [
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
    ]
    expect(calcTHRU(scores, zeros, false)).to.equal('1')
  })
  // day2
  const scoresDay1 = [
    ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
    ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
  ]
  it('should be 1 when played hole 1 at day2', () => {
    const scoresDay2 = [
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scoresDay1, scoresDay2, false)).to.equal('1')
  })
  it('should be 9 when played hole 1 to 9 at day2', () => {
    const scoresDay2 = [
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scoresDay1, scoresDay2, false)).to.equal('9')
  })
  it('should be 10 when played hole 1 to 10 at day2', () => {
    const scoresDay2 = [
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scoresDay1, scoresDay2, false)).to.equal('10')
  })
  it('should be F when played hole 1 to 18 at day2', () => {
    const scoresDay2 = [
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
    ]
    expect(calcTHRU(scoresDay1, scoresDay2, false)).to.equal('Day2 - F')
  })
  it('should be 10 when played hole 10 at day2', () => {
    const scoresDay2 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(calcTHRU(scoresDay1, scoresDay2, false)).to.equal('10')
  })
  it('should be 18 when played hole 10 to 18 at day2', () => {
    const scoresDay2 = [
      ...[0, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
    ]
    expect(calcTHRU(scoresDay1, scoresDay2, false)).to.equal('18')
  })
  it('should be 1 when played hole 10 to 18 and 1 at day2', () => {
    const scoresDay2 = [
      ...[4, 0, 0, 0, 0, 0, 0, 0, 0],
      ...[4, 4, 4, 4, 4, 4, 4, 4, 4],
    ]
    expect(calcTHRU(scoresDay1, scoresDay2, false)).to.equal('1')
  })
})
