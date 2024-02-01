import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    const countInterval = setInterval(tick, 1000);
    return ()=> clearInterval(countInterval)
  },[count])

  const tick = ()=> setCount(count + 1)
  // const tick = ()=> setCount(prevCount =>  prevCount + 1) // if you are adding no dependcy in useEffect then this way works.

  return (
    <h1>{count}</h1>
  )
}

export default IntervalHookCounter