import axios from 'axios'

//initialState
const initialState = {
    pokemon: {results: []},
    loading: false
}

//action constants
const GET_POKEMON = 'GET_POKEMON'

//action builder
export function getPokemon() {
    //this is a promise
    let pokemon = axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.data)
    return {
        type: GET_POKEMON,
        payload: pokemon
    }
}
//reducer

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_POKEMON + '_PENDING':
            return{...state, loading: true}
        case GET_POKEMON + '_REJECTED':
            return{...state, loading: false}
        case GET_POKEMON + '_FULFILLED':
            return{...state, loading: false, pokemon: payload}
        default: return state
    }
}