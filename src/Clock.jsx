import React, {useEffect, useState} from 'react'

function Clock({color}) {
  // const [hover, setHover] = useState(0)
  // const [minute, setMinute] = useState(0)
  // const [second, setSecond] = useState(0)

  const [time, setTime] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    },1000)
  } , [])
  
 let clockStyle={
    color: color,
    backgroundColor : "black",
    padding: "5px",
  }
    return (
      <>
      <div style={clockStyle}>
       <h1>{time}</h1>
         {/* <h1>{hover}:{minute}:{second}</h1> */}
       </div>
      </>
    )
  }

export default Clock
