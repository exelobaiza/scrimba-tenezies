import { useState } from 'react'
import './App.css'

import Die from './components/die'
function App() {

    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  const [dice, setDice] = useState(generateAllNewDice());
  
  const diceElements = dice.map((number) => {
    return <Die value={number} />
  })

  function rollDice() {
    setDice(generateAllNewDice());
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
