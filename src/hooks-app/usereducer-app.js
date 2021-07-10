import React, {useReducer, useState} from 'react';
import counterReducer from '../hooks-app/reducers/counter-reducer';
import messengerReducer from '../hooks-app/reducers/messenger-reducer';

import ActionCreators from './reducers/action-creators';
import {combineReducers} from './reducers/combine-reducers';

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
  // const [state, dispatch] = useReducer(counterReducer, DEFAULT_STATE);
  // const [data, dispatchMessages] = useReducer(messengerReducer, DEFAULT_STATE);

  const rootReducer = combineReducers({
    counter: counterReducer,  
    messages: messengerReducer
  })

  console.log("combineReducer: ",rootReducer);

  const [state, dispatch] = useReducer(rootReducer, DEFAULT_STATE);


  console.log("FN: state:", state);

  const [value, setValue] = useState(0);

  const handleChange = (e) => {   
    setValue(e.target.value);
  }


  const new_message_payload = { 
      title:`New message ${+new Date()}`
  }

  const addMessage = () => {
    dispatch(ActionCreators.addMessage(new_message_payload))
  }

  return(
    <div className="app-reducer">
      <div className="app-reducer-messenger">
        {
          state.messages.map((message) => {
            return(
              <div key={message.id}>
                <p>{message.title}</p>
              </div>
            )
          })
        }

        <button onClick={addMessage}>
          SEND MESSAGE
        </button>

      </div> 
      <div className="app-reducer-counter">
        <h2>Counter: useReducer Example</h2>
        <h2>Counter:  {state.counter}</h2>

        <input type="number" onChange={handleChange} value={value}></input>
        <div className="buttons">
          <button onClick={() => dispatch(ActionCreators.increment())}>+</button>
          <button onClick={() => dispatch(ActionCreators.decrement())}>-</button>
          <button onClick={() => dispatch(ActionCreators.reset(value))}>reset</button>
        </div>
      </div>

      <div id="debug">
        { JSON.stringify(state,null, 2) }
      </div>

    </div>
  );
}