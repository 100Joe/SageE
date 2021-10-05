import { useState, useEffect, useRef } from 'react';
import './BathTub.css';

function BathTub() {
  const [waterLevel, setWaterLevel] = useState(0)
  const [increment, setIncrement] = useState(false)
  const [decrement, setDecrement] = useState(false)
  const firstUpdate = useRef(false)
  const secondUpdate = useRef(true)

  useEffect(() => {
    if (!firstUpdate.current) {
      firstUpdate.current = true
      return
    }
    let intervalId;
    intervalId = setInterval(() => {
      setWaterLevel(newWaterLevel => newWaterLevel + 20);
      const waterDiv = document.createElement("div");
      waterDiv.className = "water";
      document.querySelector(".tub").appendChild(waterDiv);
    }, 2000)
    setTimeout(() => {
      clearInterval(intervalId)
    }, 10000)
  }, [increment])

  useEffect(() => {
    if (secondUpdate.current) {
      secondUpdate.current = false
      return
    }
    let intervalId;
    intervalId = setInterval(() => {
      setWaterLevel(newWaterLevel => newWaterLevel - 20)
      const myDiv = document.querySelector(".water");
      document.querySelector(".tub").removeChild(myDiv);
    }, 2000)
    setTimeout(() => {
      clearInterval(intervalId)
    }, 10000)
  }, [decrement])

  return (
    <div className="container">
      <div className="tub"></div>
      <div className="level">
        {waterLevel}px
      </div>
      <button className='btn-increase' onClick={() => setIncrement(!increment)} disabled={waterLevel !== 100 ? false : true}>IncreaseWaterLevel</button>
      <button className='btn-decrease' onClick={() => setDecrement(!decrement)} disabled={!waterLevel} >DecreaseWaterLevel</button>
    </div>
  )
}

export default BathTub;
