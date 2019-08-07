//initialState
const initialState = {
    user: ''
}

//Action Constants
const SET_USERNAME = 'SET_USERNAME'

//Action builder or creator
export function setUserName(username) {
    return{
        type: SET_USERNAME,
        payload: username
    }
}

//ACTION {
    //type:
    //payload:
//}

//reducer
export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_USERNAME:
            return {...state, user: action.payload}
        default:
            return state
    }
}

