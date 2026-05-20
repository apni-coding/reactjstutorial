import React, { useState } from 'react'

export default function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0)

  const increase = ()=>{
    // count++;
    setCount(count+1)
    console.log(count)
  }
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
