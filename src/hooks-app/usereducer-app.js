import React, {useReducer, useState} from 'react';
import counterReducer from '../hooks-app/reducers/counter-reducer';
import messengerReducer from '../hooks-app/reducers/messenger-reducer';

import Actions from './reducers/actions';
import ActionCreators from './reducers/action-creators';

const DEFAULT_STATE = {
    counter: 0,
    messages: [
      {
        id: 1,
        title: "Message 1"
      },
      {
        id: 2,
        title: "Message 2"
      }
    ]
}


export default function CounterReducerApp() {
  const [state, dispatch] = useReducer(counterReducer, DEFAULT_STATE);
  const [data, dispatchMessages] = useReducer(messengerReducer, DEFAULT_STATE);

  const [value, setValue] = useState(0);

  const handleChange = (e) => {   
    setValue(e.target.value);
  }

  return(
    <div className="app-reducer">
      <div className="app-reducer-messenger">
        {
          data.messages.map((message) => {
            return(
              <div key={message.id}>
                <p>{message.title}</p>
              </div>
            )
          })
        }
        <button onClick={() => dispatchMessages({type: Actions.ADD_MESSAGE, 
              payload: { title: `New message ${+ new Date()}` }  })}>SEND MESSAGE</button>

      </div> 
      <div className="app-reducer-counter">
        <h2>Counter: useReducer Example</h2>
        <h2>Counter:  {state.counter}</h2>
        <input type="number" onChange={handleChange} value={value}></input>
        <div className="buttons">
          <button onClick={() => dispatch({type: Actions.INCREMENT})}>+</button>
          <button onClick={() => dispatch({type: Actions.DECREMENT})}>-</button>
          <button onClick={() => dispatch({type: Actions.RESET, value: value})}>reset</button>
        </div>
      </div>
    </div>
  );
}