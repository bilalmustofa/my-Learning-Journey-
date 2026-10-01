// Importing the useState hook
import { useState } from "react";

function Counter() {
    // initialValue value
    const initialValue  = 0

    // The state variable and setter function
    const [count, setCount] = useState(initialValue );

  return (
    <>
    <h1>{count}</h1>

    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    <button onClick={() => setCount(initialValue)}>Reseat</button>

        
    </>
  )
}

export default Counter;