import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const { loggedIn, setLoggedIn } = useContext(AuthContext)
  return (
    <div>Login

      
    </div>
  )
}

export default Login