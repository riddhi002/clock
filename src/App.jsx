import { useState } from 'react'
import Clock from './Clock'

function App() {
     const [color , setColor] = useState("white")

     let changeColor = (event) => {
      setColor(event.target.value);
     }
  return (
    <>
    <select defaultValue={"white"} onChange={changeColor}>
      <option value={"white"} >white</option>
      <option value={"green"} >green</option>
      <option value={"red"} >red</option>
    </select>
   
     <Clock color={color}/>
    
    </>
  )
}

export default App
