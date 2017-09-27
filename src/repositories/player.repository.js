import { API_BASE_URL } from './index'

const API_PLAYER_URL = `${API_BASE_URL}/players`

export const listPlayer = () => {
  return fetch(`${API_PLAYER_URL}`)
    .then(res => res.json(null))
}

export const updatePlayer = (player) => {
  return fetch(`${API_PLAYER_URL}/${player.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': player.name,
      'scores_day1': player.scores_day1.map(Number),
      'scores_day2': player.scores_day2.map(Number),
      'retired': player.retired,
      'sort_order_day1': player.sort_order_day1,
      'sort_order_day2': player.sort_order_day2,
    })
  })
}
