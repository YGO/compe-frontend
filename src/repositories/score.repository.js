import { API_BASE_URL } from './index'

const API_URL = `${API_BASE_URL}/scores`

export const updateScore = (scoreId, params) => {
  return fetch(`${API_URL}/${scoreId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}
