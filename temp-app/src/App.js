import { useState } from "react";


function App() {
  const [Temp, setTemp] = useState(0)
  const [hotCold, setHotCold] = useState("cold")

 const increaseTemp = () => {
    setTemp(Temp + 1)
    console.log(hotCold)
    if (Temp >= 10) {
      setHotCold("hot")
      console.log(hotCold)
    }
    };

const decreaseTemp = () => {
  setTemp(Temp -1)
  console.log(hotCold)
  if (Temp <= 10) {
    setHotCold("cold")
    console.log(hotCold)
  }
}
    
  return (
    <div className="App">
        <div>
        <h1>{hotCold}</h1>
        <button onClick={increaseTemp}>+</button>
        <h1>{Temp} Degrees C</h1>
        <button onClick={decreaseTemp}>-</button>
        </div>

    </div>
  );
}

export default App;
