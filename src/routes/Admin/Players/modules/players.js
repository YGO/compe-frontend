import {
  listPlayer,
  updatePlayer
} from '../../../../repositories/player.repository'

const PLAYERS_EDIT = 'PLAYERS_EDIT'
const PLAYERS_CANCEL_EDIT = 'PLAYERS_CANCEL_EDIT'
const PLAYERS_SAVE_REQUEST = 'PLAYERS_SAVE_REQUEST'
const PLAYERS_SAVE_SUCCESS = 'PLAYERS_SAVE_SUCCESS'
const PLAYERS_CHANGE_RETIRED = 'PLAYERS_CHANGE_RETIRED'
const PLAYERS_CHANGE_SCORE = 'PLAYERS_CHANGE_SCORE'
const PLAYERS_FETCH_REQUEST = 'PLAYERS_FETCH_REQUEST'
const PLAYERS_FETCH_SUCCESS = 'PLAYERS_FETCH_SUCCESS'
const PLAYERS_CHANGE_SORT_DAY = 'PLAYERS_CHANGE_SORT_DAY'

// ------------------------------------
// Actions
// ------------------------------------

export function editPlayer (id) {
  return {
    type: PLAYERS_EDIT,
    payload: id
  }
}

export function cancelEdit () {
  return {
    type: PLAYERS_CANCEL_EDIT,
  }
}

export function savePlayer () {
  return (dispatch, getState) => {
    const p = getState().playersApp.playerEditing

    dispatch({
      type: PLAYERS_SAVE_REQUEST
    })

    updatePlayer(p)
      .then(() => dispatch({
        type: PLAYERS_SAVE_SUCCESS
      }))
  }
}

export function changeRetired (retired) {
  return {
    type: PLAYERS_CHANGE_RETIRED,
    payload: {retired: retired}
  }
}

export function changeSortDay (sortDay) {
  return {
    type: PLAYERS_CHANGE_SORT_DAY,
    payload: sortDay
  }
}

export function changeScore (idx, score, day) {
  return {
    type: PLAYERS_CHANGE_SCORE,
    payload: {idx: idx, score: score, day: day}
  }
}

export const fetchPlayers = () => {
  return (dispatch, getState) => {
    dispatch({
      type: PLAYERS_FETCH_REQUEST,
    })

    return listPlayer()
      .then(players => {
        dispatch({
          type: PLAYERS_FETCH_SUCCESS,
          payload: players.map(p => ({
            ...p,
            isEditing: false,
          })),
        })
      })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [PLAYERS_EDIT]: (state, action) => {
    const playerToEdit = state.players.find(p => p.id === action.payload)

    return {
      ...state,
      players: state.players.map(p => ({
        ...p,
        isEditing: p.id === action.payload
      })),
      playerEditing: {...playerToEdit},
    }
  },

  [PLAYERS_CANCEL_EDIT]: (state, action) => {
    return {
      ...state,
      players: state.players.map(p => ({
        ...p,
        isEditing: false
      })),
      playerEditing: null,
    }
  },

  [PLAYERS_CHANGE_SORT_DAY]: (state, action) => {
    return {
      ...state,
      sortDay: action.payload,
    }
  },

  [PLAYERS_CHANGE_RETIRED]: (state, action) => {
    return {
      ...state,
      playerEditing: {
        ...state.playerEditing,
        retired: action.payload.retired,
      }
    }
  },

  [PLAYERS_CHANGE_SCORE]: (state, action) => {
    const newScores1 = [...state.playerEditing.scores_day1]
    const newScores2 = [...state.playerEditing.scores_day2]

    if (action.payload.day === 1) {
      newScores1[action.payload.idx] = action.payload.score
    } else {
      newScores2[action.payload.idx] = action.payload.score
    }

    return {
      ...state,
      playerEditing: {
        ...state.playerEditing,
        scores_day1: newScores1,
        scores_day2: newScores2,
      }
    }
  },

  [PLAYERS_SAVE_REQUEST]: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },

  [PLAYERS_SAVE_SUCCESS]: (state, action) => {
    const players = [...state.players]
    const playerIdx = players.findIndex(p => p.id === state.playerEditing.id)
    players[playerIdx] = {
      ...state.playerEditing,
      isEditing: false
    }

    return {
      ...state,
      players: players,
      playerEditing: null,
      loading: false
    }
  },

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
  playerEditing: null,
  sortDay: 1,
}

// noinspection JSUnusedGlobalSymbols
export default function playersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
