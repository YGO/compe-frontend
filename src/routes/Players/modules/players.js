
const PLAYERS_EDIT = 'PLAYERS_EDIT'
const PLAYERS_CANCEL_EDIT = 'PLAYERS_CANCEL_EDIT'
const PLAYERS_SAVE = 'PLAYERS_SAVE'
const PLAYERS_CHANGE_RETIRED = 'PLAYERS_CHANGE_RETIRED'
const PLAYERS_CHANGE_SCORE = 'PLAYERS_CHANGE_SCORE'
const PLAYERS_FETCH_REQUEST = 'PLAYERS_FETCH_REQUEST'
const PLAYERS_FETCH_SUCCESS = 'PLAYERS_FETCH_SUCCESS'
const PLAYERS_BY_DAY= 'PLAYERS_BY_DAY'
const URL_UPDATE = 'https://lyywnpoayb.execute-api.ap-northeast-1.amazonaws.com/staging/players/'
const URL_GET_LIST =  'https://lyywnpoayb.execute-api.ap-northeast-1.amazonaws.com/staging/players'


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
  // TODO save changes to server...
  return (dispatch, getState) => {
  return new Promise((resolve) => {
    const players = [...getState().playersApp.players]
    const newScores1 = [...getState().playersApp.playerEditing.scores_day1]
    const newScores2 = [...getState().playersApp.playerEditing.scores_day2]
    const playerId = getState().playersApp.playerEditing.id
    const playerName = getState().playersApp.playerEditing.name
    const playerRetired = getState().playersApp.playerEditing.retired
    fetch(URL_UPDATE+playerId, {
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

export function changeRetired (retired) {
  return {
    type: PLAYERS_CHANGE_RETIRED,
    payload: {retired: retired }
  }
}


export function changePlayerByDay (optionDisplay) {
  return {
    type: PLAYERS_BY_DAY,
    payload: {optionDisplay: optionDisplay}
  }
}

export function changeScore (idx, score, row) {
  return {
    type: PLAYERS_CHANGE_SCORE,
    payload: { idx: idx, score: score, row: row }
  }
}
export const fetchPlayers = () => {
  return (dispatch, getState) => {

    dispatch({
      type: PLAYERS_FETCH_REQUEST,
    })
    return fetch(URL_GET_LIST)
      .then(res => res.json())
      .then(players => {
        const newPlayers = players.map(p => ({
          ...p,
          id: p.id,
          name: p.name,
          isEditing: false,
          scores_day1: p.scores_day1,
          scores_day2: p.scores_day2,
          total1: p.scores_day1.reduce((a,b)=> a+b,0),
          score1: p.scores_day1.reduce((a,b)=> a+b,0) - 52,
          total2: p.scores_day2.reduce((a,b)=> a+b,0),
          score2: p.scores_day2.reduce((a,b)=> a+b,0) - 52,
          total_2day: (p.scores_day1.reduce((a,b)=> a+b,0) - 52) + (p.scores_day2.reduce((a,b)=> a+b,0) - 52),
          optionDisplay: 0
        }))
        dispatch({
          type: PLAYERS_FETCH_SUCCESS,
          payload: newPlayers,
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
      playerEditing: { ...playerToEdit },
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
  [PLAYERS_BY_DAY]: (state, action) => {
    return {
      ...state,
      players: state.players.map(p => ({
        ...p,
        optionDisplay: action.payload.optionDisplay
      }))
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
    if(action.payload.row===1){
      newScores1[action.payload.idx] = action.payload.score
    }else{
      newScores2[action.payload.idx] = action.payload.score
    }
    let total1 =  newScores1.map(Number).reduce((a,b)=> a+b,0)
    let score1 =  newScores1.map(Number).reduce((a,b)=> a+b,0) - 52
    let total2=  newScores2.map(Number).reduce((a,b)=> a+b,0)
    let score2 =  newScores2.map(Number).reduce((a,b)=> a+b,0) - 52
    let total_2day = (newScores1.map(Number).reduce((a,b)=> a+b,0) - 52) + (newScores2.map(Number).reduce((a,b)=> a+b,0) - 52)
    
    return {
      ...state,
      playerEditing: {
        ...state.playerEditing,
        scores_day1: newScores1,
        scores_day2: newScores2,
        total1:total1,
        score1:score1,
        total2:total2,
        score2:score2,
        total_2day:total_2day,

      }
    }
  },

  [PLAYERS_SAVE]: (state, action) => {
    const players = [...state.players]
    const newScores1 = [...state.playerEditing.scores_day1]
    const newScores2 = [...state.playerEditing.scores_day2]
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
// Utility
// ------------------------------------


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