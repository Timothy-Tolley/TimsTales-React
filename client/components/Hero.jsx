import React from 'react'
import {Link} from 'react-router-dom'

class Hero extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div className="heroContainer">
        <h1 className='heroText'>
          TIM'S TRAVEL TALES
        </h1>
        <Link to='/home' className="heroButCont">
          <button type="button" className='heroButton' >
            CONTINUE
          </button>
        </Link>
      </div>
    )
  }
}

export default Hero
