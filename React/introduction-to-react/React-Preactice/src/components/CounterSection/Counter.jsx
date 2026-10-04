// Importing the useState hook
import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  // initialValue value
  const initialValue = 0;

  // The state variable and setter function
  const [count, setCount] = useState(initialValue);

  return (
    <>
      <div className="mx-auto my-5 flex max-w-[300px] flex-col items-center justify-center rounded-xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] font-sans">
        <h1 className="m-0 mb-5 text-[48px] text-[#333333]">{count}</h1>

        <div className="flex gap-3 mb-4">
          <button
             className="cursor-pointer rounded-md border-none bg-red-100 px-4 py-2.5 text-sm font-semibold text-red-800 transition-colors duration-200 hover:bg-red-200"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
             className="cursor-pointer rounded-md border-none bg-blue-100 px-4 py-2.5 text-sm font-semibold text-blue-800 transition-colors duration-200 hover:bg-blue-200"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className="my-2 cursor-pointer rounded-md border-none bg-gray-100 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-200"
            onClick={() => setCount(initialValue)}
          >
            Reseat
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
