import { updateEntry } from '../../../repositories/entry.repository'
import { updateRoundEntry } from '../../../repositories/round-entry.repository'
import { getCompetition } from '../../../repositories/competition.repository'

const DRAFT_CHANGE = 'admin/DRAFT_CHANGE'
const DRAFT_REMOVE = 'admin/DRAFT_REMOVE'
const ENTRY_SAVE_REQUEST = 'admin/ENTRY_SAVE_REQUEST'
const ENTRY_SAVE_SUCCESS = 'admin/ENTRY_SAVE_SUCCESS'
const ENTRY_SAVE_ERROR = 'admin/ENTRY_SAVE_ERROR'
const COMPETITION_GET_REQUEST = 'admin/COMPETITION_GET_REQUEST'
const COMPETITION_GET_SUCCESS = 'admin/COMPETITION_GET_SUCCESS'
const ROUND_TO_SORT_CHANGE = 'admin/ROUND_TO_SORT_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------

export const editEntry = (id) => {
  return (dispatch, getState) => {
    const {entries, roundEntries} = getState().adminApp
    const draft = {
      entry: {...entries.find(e => e.id === id)},
      roundEntries: [...roundEntries.filter(re => re.entry_id === id)]
    }

    dispatch({
      type: DRAFT_CHANGE,
      payload: draft,
    })
  }
}

export function cancelEdit () {
  return {
    type: DRAFT_REMOVE,
  }
}

export function saveEntry () {
  return async (dispatch, getState) => {
    dispatch({
      type: ENTRY_SAVE_REQUEST
    })

    const state = getState().adminApp
    const draft = state.draft

    const promises = [
      updateEntry(draft.entry.id, {
        retired: draft.entry.retired,
      }),
      ...draft.roundEntries.map(re => updateRoundEntry(re.id, {
        strokes: re.strokes.map(Number),
      }))
    ]

    try {
      await Promise.all(promises)
      dispatch({
        type: ENTRY_SAVE_SUCCESS
      })
    } catch (e) {
      console.error(e)
      dispatch({
        type: ENTRY_SAVE_ERROR,
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
      entry: {
        ...draft.entry,
        retired: retired
      }
    }

    dispatch({
      type: DRAFT_CHANGE,
      payload: newDraft
    })
  }
}

export const changeStroke = (roundEntryId, idx, value) => {
  return (dispatch, getState) => {
    const draft = getState().adminApp.draft
    const newDraft = {
      ...draft,
      roundEntries: draft.roundEntries.map(re => {
        if (roundEntryId !== re.id) return re

        const strokes = [...re.strokes]
        strokes[idx] = value

        return {...re, strokes}
      })
    }

    dispatch({
      type: DRAFT_CHANGE,
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
  [DRAFT_CHANGE]: (state, action) => {
    return {
      ...state,
      draft: action.payload
    }
  },

  [DRAFT_REMOVE]: (state, action) => {
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

  [ENTRY_SAVE_REQUEST]: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },

  [ENTRY_SAVE_SUCCESS]: (state, action) => {
    const draft = state.draft

    const entries = state.entries.map(e => {
      if (e.id === draft.entry.id) return draft.entry
      return e
    })
    const roundEntries = state.roundEntries.map(re => {
      const updated = draft.roundEntries.find(dre => dre.id === re.id)
      if (updated) return updated
      return re
    })

    return {
      ...state,
      entries,
      roundEntries,
      draft: null,
      loading: false
    }
  },

  [ENTRY_SAVE_ERROR]: (state, action) => {
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
    const {entries, rounds, round_entries, holes, ...competition} = action.payload
    return {
      ...state,
      competition,
      entries,
      rounds,
      roundEntries: round_entries,
      holes,
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
  entries: [],
  rounds: [],
  roundEntries: [],
  holes: [],
  loading: false,
  draft: null,
  roundToSort: null,
}

// noinspection JSUnusedGlobalSymbols
export default function playersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
