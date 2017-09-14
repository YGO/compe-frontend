const PLAYERS_INIT = 'PLAYERS_INIT'
const PLAYERS_EDIT = 'PLAYERS_EDIT'
const PLAYERS_CANCEL_EDIT = 'PLAYERS_CANCEL_EDIT'
const PLAYERS_SAVE = 'PLAYERS_SAVE'
const PLAYERS_CHANGE_SCORE = 'PLAYERS_CHANGE_SCORE'
const PLAYERS_FETCH_REQUEST = 'PLAYERS_FETCH_REQUEST'
const PLAYERS_FETCH_SUCCESS = 'PLAYERS_FETCH_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function initPlayers (players) {
  console.log('testnew')
  console.log(players)
  return {
    type: PLAYERS_INIT,
    payload: players
  }
}

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
  // TODO save changes to server...
  return (dispatch, getState) => {
  return new Promise((resolve) => {

    const players = [...getState().playersApp.players]
    const newScores1 = [...getState().playersApp.playerEditing.scores_day1]
    const newScores2 = [...getState().playersApp.playerEditing.scores_day2]
    const playerId = getState().playersApp.playerEditing.id
    const playerName = getState().playersApp.playerEditing.name
    const playerRetired = getState().playersApp.playerEditing.retired
    console.log("newScores2",newScores2)
  fetch('https://lyywnpoayb.execute-api.ap-northeast-1.amazonaws.com/staging/players/'+playerId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"scores_day1":newScores1.map(Number),"name":playerName,"retired":playerRetired,"scores_day2":newScores2.map(Number) })
    })
  .then(res => {})
  .then(players => {

    dispatch({
      type: PLAYERS_SAVE,

    })

  })
})
}





}

export function changeScore (idx, score, pos) {
  console.log('change Score')
  console.log(score)
  console.log(idx)
  console.log('change pos')
  console.log(pos)

  return {
    type: PLAYERS_CHANGE_SCORE,
    payload: { idx: idx, score: score, pos: pos }
  }
}

export const fetchPlayers = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch({
        type: PLAYERS_FETCH_REQUEST,
      })
      setTimeout(() => {
        // TODO get newPlayers from API
        const newPlayers = getState().playersApp.players.map(p => {
          return {
            ...p,
            scores: randomScores()
          }
        })
        dispatch({
          type: PLAYERS_FETCH_SUCCESS,
          payload: newPlayers,
        })
        resolve()
      }, 1000)
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [PLAYERS_INIT]: (state, action) => {
    const players = action.payload

    return {
      ...initialState,
      loading: false,
      players: players.map(p => ({
        ...p,
        id: p.id,
        name: p.name,
        isEditing: false,
        scores_day1: p.scores_day1,
        scores_day2: p.scores_day2,

      })),
    }
  },

  [PLAYERS_EDIT]: (state, action) => {
    console.log('PLAYERS_EDIT1')
    const playerToEdit = state.players.find(p => p.id === action.payload)

    return {
      ...state,
      players: state.players.map(p => ({
        ...p,
        isEditing: p.id === action.payload
      })),
      playerEditing: { ...playerToEdit },
    }
  },

  [PLAYERS_CANCEL_EDIT]: (state, action) => {
    console.log('PLAYERS_CANCEL_EDIT1')
    return {
      ...state,
      players: state.players.map(p => ({
        ...p,
        isEditing: false
      })),
      playerEditing: null,
    }
  },
  [PLAYERS_CHANGE_SCORE]: (state, action) => {

     console.log('PLAYERS_CHANGE_SCORE1')
    const newScores1 = [...state.playerEditing.scores_day1]
    const newScores2 = [...state.playerEditing.scores_day2]
    console.log("newScores1", newScores1)
    console.log('action.payload.score',action.payload.score)

  //  let score = action.payload.score==""?-1:action.payload.score
  console.log("action.payload.score:", action.payload.score);
    if(action.payload.pos===1){
      newScores1[action.payload.idx] = action.payload.score
    }else{
      newScores2[action.payload.idx] = action.payload.score
    }
     console.log('change score')
    console.log(newScores1)
    console.log(newScores2)
    return {
      ...state,
      playerEditing: {
        ...state.playerEditing,
        scores_day1: newScores1,
        scores_day2: newScores2,
      }
    }
  },
  [PLAYERS_SAVE]: (state, action) => {
    const players = [...state.players]
    const newScores1 = [...state.playerEditing.scores_day1]
    const newScores2 = [...state.playerEditing.scores_day2]
    const playerId = state.playerEditing.id
    const playerName = state.playerEditing.name
    const playerRetired = state.playerEditing.retired




    const playerIdx = players.findIndex(p => p.id === state.playerEditing.id)
    players[playerIdx] = {
      ...state.playerEditing,
      isEditing: false
    }
    return {
      ...state,
      players: players,
      playerEditing: {
        ...state.playerEditing,
        scores_day1: newScores1,
        scores_day2: newScores2,
      }
    }
  },
  [PLAYERS_FETCH_REQUEST]: (state, action) => {
    console.log('PLAYERS_FETCH_REQUEST1')
    return {
      ...state,
      loading: true,
    }
  },
  [PLAYERS_FETCH_SUCCESS]: (state, action) => {
    console.log('PLAYERS_FETCH_SUCCESS1')
    return {
      ...state,
      players: action.payload,
      loading: false,
    }
  },
}

// ------------------------------------
// Utility
// ------------------------------------

function randomScores () {
  console.log('randomScores1')
  return Array(18).fill().map(_ => Math.floor(Math.random() * (8 - 3) + 3))
}

// ------------------------------------
// Reducer
// ------------------------------------


const initialState = {
  players: [],
  loading: true,
  playerEditing: null,
}


export default function playersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}