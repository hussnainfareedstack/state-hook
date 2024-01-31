import React, { useState } from "react";

function HookCounterTwo() {

  const initialCount = 0;
  const [count, setCount] = useState(initialCount)

  // const increamentFive = ()=>{
  //   for(let i=0; i<5; i++)
  //     setCount(count + 1)
  // }

  //anytime if you see that your value relies on previous value always pass a arrow function with parameter as previousValue in set method
  const increamentFive = ()=>{
    for(let i=0; i<5; i++)
      setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increase</button>
      <button onClick={()=> count ? setCount(prevCount => prevCount - 1) : setCount(count)}>Decrease</button>
      <button onClick={()=> setCount(initialCount)}>Reset</button>
      <button onClick={increamentFive}>Increament 5</button>
    </div>
  );
}

export default HookCounterTwo;
