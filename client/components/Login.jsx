import React from 'react'

import User from './User'
import {removeUser} from '../utils/auth'
import {login as loginAPI} from '../utils/api'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      showUser: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    if (window.localStorage.getItem('token')) {
      this.setState({
        showUser: true
      })
    }
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    loginAPI('post', '/api/v1/signin', creds)
      .then(() => this.setState({
        showUser: true
      }))
  }

  render () {
    return (
      <div className="login">
        <p><input name='username'
          placeholder='Username'
          onChange={this.handleChange} /></p>
        <p><input type='password' name='password'
          placeholder='Password'
          onChange={this.handleChange} /></p>
        <button onClick={this.handleClick}>Login</button>
        <br/>
        <button onClick={removeUser}>Logout</button>
        {this.state.showUser && <User/>}
      </div>
    )
  }
}

export default Login
