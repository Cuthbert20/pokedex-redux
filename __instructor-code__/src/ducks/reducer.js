// initial state
const initialState = {
  user: ''
}

// action constants
const SET_USERNAME = 'SET_USERNAME'

// action builder
export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username
  }
}

// ACTION: {
//   type:
//   payload:
// }

// reducer
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return {...state, user: action.payload}
    default: return state
  }
}