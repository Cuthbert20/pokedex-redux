import React from 'react'
import { Link } from 'react-router-dom'
import { setUserName } from '../../ducks/reducer'
import { connect } from 'react-redux'
import {getPokemon} from '../../ducks/pokeReducer'

const Cover = (props) => {
  return (
    <div className="cover">
      <div className="background">
        <div className="camera-ring">
          <div className="camera-circle" />
        </div>
        <div className="circles-container">
          <div className="little-circle red" />
          <div className="little-circle yellow" />
          <div className="little-circle green" />
        </div>
        <div className="lid">
          <Link to="/open">
            <div onClick={props.getPokemon}
            className="triangle-button" />
          </Link>
          <div className="inputs">
            <input onChange={e => props.setUserName(e.target.value)} placeholder="Username" type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(reduxState){
  const { user } = reduxState
  //returning an obj with user that has been destructered
  return {user}
}


//IIFE closure funcion
export default connect(mapStateToProps,{setUserName, getPokemon})(Cover)
  //1. state we want
  //action builders we're using
