import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Open = (props) => (
  <div className="open">
    <div className="background">
      <div className="camera-ring">
        <Link to='/'>
          <div className="camera-circle" />
        </Link>
      </div>
      <div className="circles-container">
        <div className="little-circle red" />
        <div className="little-circle yellow" />
        <div className="little-circle green" />
      </div>
      <div className="inside">
        <h1>WELCOME {props.user}! </h1>
        {props.loading? ('Loading...')
        :(props.pokemon.results.map(elm => {
          return <h3 key={elm.name}>{elm.name}</h3>
        }))}
      </div>
    </div>
  </div>
)

function mapStateToProps(state){
  const {user} = state.userInfo
  const {pokemon, loading} = state.pokemon
  return {user, pokemon, loading}
}

export default connect(mapStateToProps)(Open)
