import { calcTotalScore } from '../../../src/components/leadersboard/leadersboard.service'

describe('calcTotalScore', () => {
  it('should sum up scores from strokes and pars', () => {
    const scoresPerRound = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, undefined],
    ]
    const result = calcTotalScore(scoresPerRound)

    expect(result).to.equal(-18 - 17)
  })
})
