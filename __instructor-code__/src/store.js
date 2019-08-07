import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './ducks/reducer'
import pokeReducer from './ducks/pokeReducer'

const reducers = combineReducers({
  userInfo: reducer,
  pokemonInfo: pokeReducer
})

const enhancers = compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default createStore(reducers, enhancers)