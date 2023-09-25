import { useState, createContext } from 'react'
import { Chat } from './components'

export const UserContext = createContext()
const user = 'Charlie'

function App() {

  return (
    <UserContext.Provider value={user}>
      {user ? <Chat /> : <div>Sign in</div>}
    </UserContext.Provider>
  )
}

export default App
