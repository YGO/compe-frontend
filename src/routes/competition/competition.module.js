import { listPlayer } from '../../repositories/player.repository'

const PLAYERS_FETCH_REQUEST = 'PLAYERS_FETCH_REQUEST'
const PLAYERS_FETCH_SUCCESS = 'PLAYERS_FETCH_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchPlayers = () => {
  return (dispatch, getState) => {
    dispatch({
      type: PLAYERS_FETCH_REQUEST,
    })

    return listPlayer()
      .then(players => {
        dispatch({
          type: PLAYERS_FETCH_SUCCESS,
          payload: players,
        })
      })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [PLAYERS_FETCH_REQUEST]: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },

  [PLAYERS_FETCH_SUCCESS]: (state, action) => {
    return {
      ...state,
      players: action.payload,
      loading: false,
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  players: [],
  loading: false,
}

// noinspection JSUnusedGlobalSymbols
export default function competitionReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
