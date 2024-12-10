import { useState } from 'react'
import {nanoid} from 'nanoid'
import './App.css'

import Die from './components/die'
function App() {

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }));
  }
  const [dice, setDice] = useState(generateAllNewDice());

  const togglesHeld= () => {
    setDice.isHeld(!isOn)
    
  }  
  const diceElements = dice.map( dieObject => {
    return <Die 
    value={dieObject.value} 
    key={dieObject.id} 
    isHeld={dieObject.isHeld} 
    hold={() => hold(dieObject.id)}
    />
  })

  function rollDice() {
    setDice(generateAllNewDice());
  }
  function hold(id) {
    setDice(prevDice => prevDice.map(die => die.id === id? {...die, isHeld: !die.isHeld} : die))
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
