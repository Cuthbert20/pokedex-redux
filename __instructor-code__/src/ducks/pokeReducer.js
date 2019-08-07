import axios from 'axios'

const initialState = {
  pokemon: {results: []},
  loading: false
}

// ACTION CONSTS
const GET_POKEMON = 'GET_POKEMON'

// ACTION BUILDERS
export function getPokemon() {
  let pokemon = axios.get('https://pokeapi.co/api/v2/pokemon').then(res => res.data)
  return {
    type: GET_POKEMON,
    payload: pokemon
  }
}

export default function reducer(state = initialState, action) {
  const {type, payload} = action
  switch(type) {
    case GET_POKEMON + '_PENDING':
      return {...state, loading: true}
    case GET_POKEMON + '_REJECTED':
      return {...state, loading: false}
    case GET_POKEMON + '_FULFILLED':
      return {...state, loading: false, pokemon: payload}
    default: return state
  }
}