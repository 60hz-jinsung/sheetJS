import { useState } from 'react'
import { Route,Routes } from 'react-router'
import './App.css'

import Home from './Components/Home'
import ParseExcel from './Components/ParseExcel'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/change" element={<ParseExcel/>}/>
      </Routes>
    </div>
  )
}

export default App
