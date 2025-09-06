import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inputs } from './components/Inputs'
import Contact from './components/Contact'
import Summary from './components/Summary'

function App() {

  return (
    <>
      <div className="appContainer">
        <Contact />
        <Summary />
      </div>
    </>
  )
}

export default App
