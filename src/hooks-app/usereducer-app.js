import React, {useReducer, useState} from 'react';
import counterReducer from '../hooks-app/reducers/counter-reducer';

const DEFAULT_STATE = {
    counter: 0,
    user: [],
    messages: []
}


export default function CounterReducerApp() {
  const [state, dispatch] = useReducer(counterReducer, DEFAULT_STATE);
  const [value, setValue] = useState(0);

  const handleChange = (e) => {   
    setValue(e.target.value);
  }

  return(
    <div>
      <h2>Counter: useReducer Example</h2>
      <h2>Counter:  {state.counter}</h2>
      <input type="number" onChange={handleChange} value={value}></input>
      <div className="buttons">
        <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
        <button onClick={() => dispatch({type: "RESET", value: value})}>reset</button>
      </div>
    </div>
  );
}