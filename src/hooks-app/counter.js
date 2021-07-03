import React, {useState} from 'react';
export default function Counter() {
  const [counter, setCounter] = useState(0);  // [state, updateFunction]
  const [error, setError] = useState(""); 
  
  // const result = useState(0); // [state, updaterFn]
  // result[0]  // -> state
  // result[1]  // -> updaterFunction

  function increment() {
    //setCounter(counter + 1);

    setError("");
    // Better practice -> use function parameter
    setCounter((prevState) => prevState + 1);

  }
  
  function decrement() {
    //setCounter(counter - 1);
    setCounter((prevState) => {
      if (prevState < 0) {
        setError("Value should not be less than 0");
        return 0;
      }
      return prevState - 1
    });
  }
  return (
    <div className="container">
      <h1>React Hooks: Evergreen Counter</h1>
      <h2>{counter}</h2>
      {error && <h2>{error}</h2>}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
