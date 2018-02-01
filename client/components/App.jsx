import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Hero from './Hero'

const App = (props) => {
  return (
    <Router>
      <div>
        <Route exact path='/' component = {Hero}/>
        <Route exact path='/home' component ={Home}/>
      </div>
    </Router>
  )
}

export default App
