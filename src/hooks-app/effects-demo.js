import React, {useState, useEffect} from 'react';
export default function EffectsDemo() {
  const [counter, setCounter] = useState(0);  // [state, updateFunction]
  const [error, setError] = useState(undefined);

  // componentDidMount
  useEffect(()=>{
    console.log("Only Run Once...");
  },[]);

  // componentDidUpdate
  useEffect(()=>{
    console.log("Always Run..BEWARE");
  })

  // conditional 
  useEffect(()=>{
    console.log("Run only when error changes..");
  },[error]);

  
  function increment() {
    setCounter((prevState) => prevState + 1);
  }
  
  function decrement() {
    setCounter((prevState) => {
      if (prevState < 0) {
        setError("Counter should not be less than 0.");
        return 0;
      }
      return prevState - 1
    });
  }
  return (
    <div className="container">
      <h1>React Hooks: Evergreen Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
