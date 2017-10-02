import { API_BASE_URL } from './index'

const API_URL = `${API_BASE_URL}/entries`

export const updateEntry = (id, params) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}
