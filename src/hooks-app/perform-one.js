import React, {useState, useCallback} from 'react';




function randomColour() {
  function c() {
    var hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).substr(-2); // pad with zero
  }
  return "#"+c()+c()+c();
}

// This will be in different file button.js
const Button = React.memo((props) => { 
  return (
    <button onClick={(props.onClick)} style={{background: randomColour()}}>
      {props.children}
    </button>
  );
});


const functions = new Set();

export default function PerformanceTestOne() {
  const [diff, setDiff] = useState(1);
  const [counter, setCounter] = useState(0);

  const incrementDiff = useCallback(() => setDiff(d => d + 1), []);

  //Dependent on the diff 
  const increment =  useCallback(() => setCounter(c => c + diff), [diff]);

  // Register the components
  functions.add(increment);
  functions.add(incrementDiff);

  console.log(functions);

  return (
    <div>
      <div>Diff is {diff}</div>
      <div>Counter is {counter}</div>

      <Button onClick={incrementDiff}>Increment Diff</Button>
      <Button onClick={increment}>Increment Counter</Button>
      <br/>
      <div>Newly created function size: {functions.size - 2}</div>
    </div>
  );
}
