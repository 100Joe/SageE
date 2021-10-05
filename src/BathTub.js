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
      setWaterLevel(newWaterLevel => newWaterLevel + 20)
    }, 1000)
    setTimeout(() => {
      clearInterval(intervalId)
    }, 5000)
  }, [increment])

  useEffect(() => {
    if (secondUpdate.current) {
      secondUpdate.current = false
      return
    }
    let intervalId;
    intervalId = setInterval(() => {
      setWaterLevel(newWaterLevel => newWaterLevel - 20)
    }, 1000)
    setTimeout(() => {
      clearInterval(intervalId)
    }, 5000)
  }, [decrement])

  return (
    <div className="container">
      <div className="tub" >
        <div className="levelOn"></div>
      </div>
      <div className="level">
        {waterLevel}%
      </div>
      <button onClick={() => setIncrement(!increment)} disabled={waterLevel !== 100 ? false : true}>IncreaseWaterLevel</button>
      <button onClick={() => setDecrement(!decrement)} disabled={!waterLevel} >DecreaseWaterLevel</button>
    </div>
  )
}

export default BathTub;
