// Importing the useState hook
import { useState } from "react";
import  styles  from './Counter.module.css'

function Counter() {
    // initialValue value
    const initialValue  = 0

    // The state variable and setter function
    const [count, setCount] = useState(initialValue );

  return (
    <>
    <div className={styles.counterCard}>

    <h1 className={styles.counterTitle}>{count}</h1>

    <div className={styles.counterButtons}>

    <button className={`${styles.counterBtn} ${styles.increment}`} onClick={() => setCount(count + 1)}>Increase</button>
    <button className={`${styles.counterBtn} ${styles.decrement}`} onClick={() => setCount(count - 1)}>Decrease</button>
    <button className={`${styles.counterBtn} ${styles.reset}`} onClick={() => setCount(initialValue)}>Reseat</button>
    </div>

    </div>

        
    </>
  )
}

export default Counter;