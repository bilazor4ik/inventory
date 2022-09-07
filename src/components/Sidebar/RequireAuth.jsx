import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const RequireAuth = ({ children }) => {
  const { loggedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login")
    }
  }, [loggedIn])

  return (
    <>
      {children}
    </>
  )
}

export default RequireAuth