import React from 'react'
import {Link} from 'react-router-dom'

const FixedHeader = () => {
  return (
    <div className = 'fixedHead'>
      <h1 >
        <Link to='/home' id='headerTitle'>
         TIM'S TRAVEL TALES
        </Link>
      </h1>
      <div className = 'navBar' >
        <div className = 'nav'>
          <Link to ='/cityguides' className='navLink'>
            CITY GUIDES
          </Link>
        </div>
        <div className = 'nav'>
          <Link to ='/experiences' className='navLink'>
            EXPERIENCES
          </Link>
        </div>
        <div className = 'nav'>
          <Link to ='/gear' className='navLink'>
            GEAR
          </Link>
        </div>
        <div className = 'nav'>
          <Link to ='/topspots' className='navLink'>
            TOP SPOTS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FixedHeader
