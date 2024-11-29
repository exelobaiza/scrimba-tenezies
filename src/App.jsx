import { useState } from 'react'
import './App.css'

import Die from './components/die'
function App() {

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  console.log(generateAllNewDice());

  return (
    <div className="app-container">
      <div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
          <Die value={7} />
          <Die value={8} />
          <Die value={9} />
          <Die value={10} />
        </div>
        <button className='roll-btn'>Roll</button>
      </div>
    </div>
  )
}

export default App
