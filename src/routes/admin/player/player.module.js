import { updateEntry } from '../../../repositories/entry.repository'
import { updateScore } from '../../../repositories/score.repository'
import { getCompetition } from '../../../repositories/competition.repository'

const ENTRY_AND_SCORES_EDIT = 'admin/ENTRY_AND_SCORES_EDIT'
const ENTRY_AND_SCORES_EDIT_CANCEL = 'admin/ENTRY_AND_SCORES_EDIT_CANCEL'
const ENTRY_AND_SCORES_SAVE_REQUEST = 'admin/ENTRY_AND_SCORES_SAVE_REQUEST'
const ENTRY_AND_SCORES_SAVE_SUCCESS = 'admin/ENTRY_AND_SCORES_SAVE_SUCCESS'
const ENTRY_AND_SCORES_SAVE_ERROR = 'admin/ENTRY_AND_SCORES_SAVE_ERROR'
const RETIRED_CHANGE = 'admin/PLAYERS_CHANGE_RETIRED'
const SCORES_CHANGE = 'admin/SCORES_CHANGE'
const COMPETITION_GET_REQUEST = 'admin/COMPETITION_GET_REQUEST'
const COMPETITION_GET_SUCCESS = 'admin/COMPETITION_GET_SUCCESS'
const ROUND_TO_SORT_CHANGE = 'admin/PLAYERS_CHANGE_SORT_DAY'

// ------------------------------------
// Actions
// ------------------------------------

export const editPlayer = (id) => {
  return (dispatch, getState) => {
    const {players, scores} = getState().adminApp
    const playerToEdit = players.find(p => p.id === id)
    const draft = {
      player: {...playerToEdit},
      scores: [...scores.filter(s => s.player_id === playerToEdit.id)]
    }

    dispatch({
      type: ENTRY_AND_SCORES_EDIT,
      payload: draft,
    })
  }
}

export function cancelEdit () {
  return {
    type: ENTRY_AND_SCORES_EDIT_CANCEL,
  }
}

export function saveDraft () {
  return async (dispatch, getState) => {
    dispatch({
      type: ENTRY_AND_SCORES_SAVE_REQUEST
    })

    const state = getState().adminApp
    const competition = state.competition
    const draft = state.draft

    const promises = [
      updateEntry(competition.id, draft.player.id, {
        retired: draft.player.retired,
      }),
      ...draft.scores.map(s => updateScore(s.id, {
        strokes: s.strokes.map(Number),
      }))
    ]

    try {
      await Promise.all(promises)
      dispatch({
        type: ENTRY_AND_SCORES_SAVE_SUCCESS
      })
    } catch (e) {
      console.error(e)
      dispatch({
        type: ENTRY_AND_SCORES_SAVE_ERROR,
        payload: {
          level: 'error',
          message: 'Something bad happened.',
        }
      })
    }
  }
}

export const changeRetired = (retired) => {
  return (dispatch, getState) => {
    const draft = getState().adminApp.draft
    const newDraft = {
      ...draft,
      player: {
        ...draft.player,
        retired: retired
      }
    }

    dispatch({
      type: RETIRED_CHANGE,
      payload: newDraft
    })
  }
}

export const changeRoundToSort = (roundId) => {
  return (dispatch, getState) => {
    const roundToSort = getState().adminApp.rounds.find(r => r.id === roundId)

    dispatch({
      type: ROUND_TO_SORT_CHANGE,
      payload: {...roundToSort},
    })
  }
}

export const changeScore = (scoreId, idx, value) => {
  return (dispatch, getState) => {
    const draft = getState().adminApp.draft
    const newDraft = {
      ...draft,
      scores: draft.scores.map(s => {
        if (scoreId !== s.id) return s

        const strokes = [...s.strokes]
        strokes[idx] = value

        return {...s, strokes}
      })
    }

    dispatch({
      type: SCORES_CHANGE,
      payload: newDraft
    })
  }
}

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
  [ENTRY_AND_SCORES_EDIT]: (state, action) => {
    return {
      ...state,
      draft: action.payload,
    }
  },

  [ENTRY_AND_SCORES_EDIT_CANCEL]: (state, action) => {
    return {
      ...state,
      draft: null
    }
  },

  [ROUND_TO_SORT_CHANGE]: (state, action) => {
    return {
      ...state,
      roundToSort: action.payload,
    }
  },

  [RETIRED_CHANGE]: (state, action) => {
    return {
      ...state,
      draft: action.payload,
    }
  },

  [SCORES_CHANGE]: (state, action) => {
    return {
      ...state,
      draft: action.payload
    }
  },

  [ENTRY_AND_SCORES_SAVE_REQUEST]: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },

  [ENTRY_AND_SCORES_SAVE_SUCCESS]: (state, action) => {
    return {
      ...state,
      draft: null,
      loading: false
    }
  },

  [ENTRY_AND_SCORES_SAVE_ERROR]: (state, action) => {
    return {
      ...state,
      draft: null,
      loading: false,
      error: action.payload
    }
  },

  [COMPETITION_GET_REQUEST]: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },

  [COMPETITION_GET_SUCCESS]: (state, action) => {
    const {players, rounds, scores, holes, round_entries, ...competition} = action.payload
    return {
      ...state,
      competition,
      players,
      rounds,
      scores,
      holes,
      roundEntries: round_entries,
      roundToSort: {...rounds[0]},
      loading: false,
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  competition: {},
  players: [],
  rounds: [],
  scores: [],
  holes: [],
  roundEntries: [],
  loading: false,
  draft: null,
  roundToSort: null,
}

// noinspection JSUnusedGlobalSymbols
export default function playersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
