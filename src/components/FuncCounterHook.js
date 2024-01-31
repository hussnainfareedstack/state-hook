import React, { useState } from 'react'

function FuncCounterHook() {
  
  const [count, setCount] = useState(0)

  // since setCount(count+1) is becomes a function call so we have to add it into arrow func.
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button> 
    </div>
  )
}

export default FuncCounterHook