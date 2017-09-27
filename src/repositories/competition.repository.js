import { API_BASE_URL } from './index'
import competitions from '../mock/competitions'

const API_URL = `${API_BASE_URL}/competitions`

export const getCompetition = (id) => {
  // FIXME
  if (true) {
    const c = competitions.find(c => c.id === id)
    return Promise.resolve(c)
  } else {
    return fetch(`${API_URL}/${id}`)
      .then(res => res.json(null))
  }

}
