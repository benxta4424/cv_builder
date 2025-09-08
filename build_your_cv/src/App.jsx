import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inputs } from './components/Inputs'
import Contact from './components/Contact'
import Summary from './components/Summary'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <div className="appContainer">
        <Contact title = "Info and Contact" first="Name" second="Phone" third="Email" fourth="Github" />
        <Summary title = "Summary" />
        <Experience/>
      </div>
    </>
  )
}

export default App
