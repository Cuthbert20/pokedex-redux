import React from 'react'
import { Link } from 'react-router-dom'
import { setUsername } from '../../ducks/reducer'
import { getPokemon } from '../../ducks/pokeReducer'
import { connect } from 'react-redux'

const Cover = props => {
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
            <div 
              onClick={props.getPokemon} 
              className="triangle-button" 
            />
          </Link>
          <div className="inputs">
            <input
              onChange={e => props.setUsername(e.target.value)}
              placeholder="Username"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(reduxState) {
  const { user } = reduxState.userInfo
  return { user }
}

export default connect(
  mapStateToProps,
  { setUsername, getPokemon }
)(Cover)
// 1. state we want
// 2. action builders we're using
