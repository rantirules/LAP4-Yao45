import { useState } from 'react'
import { Chat } from './components'

const user = 'Charlie'

function App() {

  return (
    <>
      {user ? <Chat /> : <div>Sign in</div>}
    </>
  )
}

export default App
