import React from 'react'
import Loginform from './components/Loginform'
import MainPage from './components/MainPage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='w-full h-screen overflow-hidden flex '>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  )
}

export default App
