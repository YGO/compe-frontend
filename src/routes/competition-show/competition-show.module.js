import { getCompetition } from '../../repositories/competition.repository'

const COMPETITION_GET_REQUEST = 'COMPETITION_GET_REQUEST'
const COMPETITION_GET_SUCCESS = 'COMPETITION_GET_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchCompetition = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: COMPETITION_GET_REQUEST,
    })

    const competition = await getCompetition(id)

    dispatch({
      type: COMPETITION_GET_SUCCESS,
      payload: competition,
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
    const {entries, rounds, round_entries, holes, ...competition} = action.payload
    return {
      ...state,
      competition,
      entries,
      rounds,
      roundEntries: round_entries,
      holes,
      loading: false,
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  competition: {},
  entries: [],
  rounds: [],
  roundEntries: [],
  holes: [],
  loading: false,
}

// noinspection JSUnusedGlobalSymbols
export default function competitionReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
