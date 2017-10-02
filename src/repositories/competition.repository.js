import { API_BASE_URL } from './index'

const API_URL = `${API_BASE_URL}/competitions`

export const getCompetition = (id) => {
  return fetch(`${API_URL}/${id}`)
    .then(res => res.json(null))
}
