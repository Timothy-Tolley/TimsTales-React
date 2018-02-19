import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Hero from './Hero'
import AboutContact from './AboutContact'
import Post from './Post'
import User from './User'
import Login from './Login'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component = {Hero}/>
        <Route path='/home' component ={Home}/>
        <Route path='/about-contact' component={AboutContact}/>
        <Route path='/post/:id' component={Post}/>
        <Route exact path ='/user' component={User}/>
        <Route exact path ='/login' component={Login}/>
      </div>
    </Router>
  )
}

export default App
