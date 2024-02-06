import React, { useMemo, useState } from 'react'

function Counter() {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const increamentOne = ()=>{
    return setCounterOne(counterOne + 1)
  }
  const increamentTwo = ()=>{
    return setCounterTwo(counterTwo + 1)
  }
  const isEven = useMemo(()=>{
    let i=0;
    while(i<2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <button onClick={increamentOne}>Counter One - {counterOne}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>
      <br></br>
      <button onClick={increamentTwo}>Counter Two - {counterTwo}</button> {/* although we check even on counterOne but it also renders 
      on Counter Two button and slow down UI. So we will useMemo so that it only renders when func returning value changes.
      Also we know uses isEven instead of isEven() because isEven now stores value and not a function call. */}
    </div>
  )
}

export default Counter