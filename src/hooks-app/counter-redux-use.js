import React, {useState} from 'react';
import ActionCreators from './reducers/action-creators';
import {useDispatch, useSelector} from 'react-redux';

export default function CounterReduxUse() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  const messages = useSelector(state => state.messages);


  const handleChange = (e) => {   
    setValue(e.target.value);
  }


  const new_message_payload = { 
      title:`New message ${+new Date()}`
  }

  const addMessage = () => {
    dispatch(ActionCreators.addMessage(new_message_payload))
  }
  return (
    <div className="app-reducer">
      <div className="app-reducer-messenger">
        {
          messages.map((message) => {
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
        <h2>Counter:  {counter}</h2>

        <input type="number" onChange={handleChange} value={value}></input>
        <div className="buttons">
        <button onClick={() => dispatch(ActionCreators.increment())}>+</button>
          <button onClick={() => dispatch(ActionCreators.decrement())}>-</button>
          <button onClick={() => dispatch(ActionCreators.reset(value))}>reset</button>
        </div>
      </div>
    </div>
  );
}









