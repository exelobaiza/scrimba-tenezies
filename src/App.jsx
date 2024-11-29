import { useState } from 'react'
import './App.css'

import Die from './components/die'
function App() {

  /**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  const [dice, setDice] = useState(generateAllNewDice());
  
  const diceElements = dice.map((number) => {
    return <Die value={number} />
  })
  
  return (
    <div className="app-container">
      <div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
          {diceElements}
        </div>
        <button className='roll-btn'>Roll</button>
      </div>
    </div>
  )
}

export default App
