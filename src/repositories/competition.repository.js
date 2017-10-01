import competitions from '../mock/competitions'

// const API_URL = `${API_BASE_URL}/competitions`

export const getCompetition = (id) => {
  const c = competitions.find(c => c.id === id)
  return Promise.resolve(c)

  // return fetch(`${API_URL}/${id}`)
  //   .then(res => res.json(null))
  //   .then(competition => ({
  //     ...competition,
  //     rounds: competition.rounds.sort((a, b) => a.play_order > b.play_order ? 1 : -1),
  //     scores: competition.scores.sort((a, b) => a.id > b.id ? 1 : -1)
  //   }))
}
