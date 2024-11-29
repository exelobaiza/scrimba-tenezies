import { useState } from 'react'
import './App.css'
import Die from './components/die'
function App() {
  return (
    <div className="app-container">
      <div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
          <Die />
        </div>
        <button className='roll-btn'>Roll</button>
      </div>
    </div>
  )
}

export default App
