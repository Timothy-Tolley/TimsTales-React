import React from 'react'

const FixedHeader  = () => {
  return (
    <div className = 'fixedHead'>
      <h1 id='title'> TIM'S TRAVEL TALES</h1>
      <div className = 'navBar' >
        <div className = 'nav'> CITY GUIDES </div>
        <div className = 'nav'> EXPERIENCES </div>
        <div className = 'nav'> GEAR </div>
        <div className = 'nav'> TOP SPOTS </div>
      </div>
    </div>
  )
}

export default FixedHeader