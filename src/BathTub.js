import { useState, } from 'react';
import './BathTub.css';

function BathTub() {
  const [waterLevel, setWaterLevel] = useState(0)

  function increaseWaterLevel() {
    setWaterLevel(newWaterLevel => newWaterLevel + 20)
  }

  // const waterDiv = Document.querySelector('levelOne');

  function decreaseWaterLevel() {
    setWaterLevel(newWaterLevel => newWaterLevel - 20)
  }

  const fill = () => setInterval(increaseWaterLevel, 1000)
  const drain = () => setInterval(decreaseWaterLevel, 1000)
  const water = () => setInterval(addWaterLevel, 2000)
  const addWaterLevel = () => {
    return <div className="levelOne"></div>;
  }
  return (
    <div className="container">
      <div className="tub" >
        {
          fill ? addWaterLevel() : null
        }
        {/* <div className="levelOne"></div>
          <div className="levelOne"></div>
          <div className="levelOne"></div>
          <div className="levelOne"></div>
          <div className="levelOne"></div> */}
      </div>
      <div className="level">
        {waterLevel}%
      </div>
      <button onClick={() => { fill(); water(); }}>IncreaseWaterLevel</button>
      <button onClick={drain}>DecreaseWaterLevel</button>
    </div>
  )
}

export default BathTub;
