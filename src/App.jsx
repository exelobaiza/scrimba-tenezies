import { useState } from 'react'
import './App.css'

import Die from './components/die'
function App() {
    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     * 
     * Making this change will break parts of our code, so make
     * sure to update things so we're back to a working state
     */
    
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  const [dice, setDice] = useState({value:generateAllNewDice(), isHeld: false});
  
  const diceElements = dice.value.map((number) => {
    return <Die value={number} />
  })
  function rollDice() {
    setDice({value:generateAllNewDice(), isHeld: false});
  }
  
  return (
    <div className="app-container">
      <div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
          {diceElements}
        </div>
        <button className='roll-btn' onClick={rollDice}>Roll</button>
      </div>
    </div>
  )
}

export default App
