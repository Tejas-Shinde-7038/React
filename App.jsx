import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  
  const addValue = () =>
  {
    if(count>=20)
    {
      alert("You can not increase the value")
      count = 15
    }
    count = count+1
    setCount(count)  
    
  }

  function setvalue(){
    if(count<1)
      {
        alert("can not decrease than this")
        count = 15
      }  
      count = count-1
    setCount(count)
  }
  return (
    <>
      <h1>Tejas Shinde </h1>
      <button onClick={addValue}>Increase</button><br/><br/>
      <button onClick={setvalue}>Decrese</button>
      <p> {count} </p>
    </>
  )
}

export default App
