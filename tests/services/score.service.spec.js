import { rankPlayers } from '../../src/services/score.service'

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
