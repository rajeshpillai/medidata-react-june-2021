import React, {useReducer, useState} from 'react';


const DEFAULT_STATE = {
    counter: 0,
    user: [],
    messages: []
}

function counterReducer(state, action) {
  console.log(action);
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case "RESET":
      return {
        ...state,
        counter: Number(action.value)
      }
    default:
      return state;
  }
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