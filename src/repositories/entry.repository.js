import { API_BASE_URL } from './index'

const API_URL = (competitionId) => `${API_BASE_URL}/competitions/${competitionId}/players`

export const updateEntry = (competitionId, playerId, params) => {
  return fetch(`${API_URL(competitionId)}/${playerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}
