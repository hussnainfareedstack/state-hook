import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {

  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(()=>{
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000);

    return () => clearInterval(intervalRef.current)
  },[])


  return (
    <div>
      <h3>Hook Timer: {timer}</h3>
      <button onClick={()=> clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer