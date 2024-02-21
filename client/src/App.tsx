import React from 'react'
import { Header } from './Header'
import { Feed } from './Feed'

function App() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header></Header>
      <Feed></Feed>
    </div>
  )
}

export default App
