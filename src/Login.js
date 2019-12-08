import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const user = {
  login: 'kanapkaaa',
  password: 'mateusz123'
}

export default ({ setLoggedIn, redirectUrl, history }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (login === user.login && password === user.password) {
      setLoggedIn(true)
      history.goBack()
    } else console.log('Złe dane logowania!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          name="login"
          onChange={e => setLogin(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <input type="submit" value="Submit" />
    </form>
  )
}
