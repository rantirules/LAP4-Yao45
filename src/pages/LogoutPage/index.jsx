import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("token")
    navigate("/", { replace: true })
  }

  useEffect(() => {
    logout()
  }, [])


  return (
    <div></div>
  )
}

export default Logout