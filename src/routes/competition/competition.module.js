import { getCompetition } from '../../repositories/competition.repository'
import competition from '../../mock/test_competition'

const COMPETITION_GET_REQUEST = 'PLAYERS_FETCH_REQUEST'
const COMPETITION_GET_SUCCESS = 'PLAYERS_FETCH_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchCompetition = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: COMPETITION_GET_REQUEST,
    })

    return getCompetition(id)
      .then(competition => {
        dispatch({
          type: COMPETITION_GET_SUCCESS,
          payload: competition,
        })
      })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [COMPETITION_GET_REQUEST]: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },

  [COMPETITION_GET_SUCCESS]: (state, action) => {
    const {players, rounds, scores, holes, ...competition} = action.payload
    return {
      ...state,
      competition,
      players,
      rounds,
      scores,
      holes,
      loading: false,
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

// TODO make it blank after api implementation is done.
const {players, rounds, scores, holes, ...rest} = competition
const initialState = {
  competition: rest,
  players,
  rounds,
  scores,
  holes,
  loading: false,
}

// noinspection JSUnusedGlobalSymbols
export default function competitionReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
