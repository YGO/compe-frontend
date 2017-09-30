import { API_BASE_URL } from './index'

const API_URL = `${API_BASE_URL}/competitions`

export const getCompetition = (id) => {
  return fetch(`${API_URL}/${id}`)
    .then(res => res.json(null))
    .then(competition => ({
      ...competition,
      rounds: competition.rounds.sort((a, b) => a.play_order > b.play_order ? 1 : -1),
      scores: competition.scores.sort((a, b) => a.id > b.id ? 1 : -1)
    }))
}
