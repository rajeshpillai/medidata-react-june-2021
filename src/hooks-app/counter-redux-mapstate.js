import React, {useState} from 'react';
import ActionCreators from './reducers/action-creators';
import {useDispatch, connect} from 'react-redux';

function CounterReduxMapState({counter, messages, incrementCounter, decrementCounter}) {
  const [value, setValue] = useState(0);
  
  const dispatch = useDispatch();

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
          <button onClick={incrementCounter}>+</button>
          <button onClick={decrementCounter}>-</button>
          <button onClick={() => dispatch(ActionCreators.reset(value))}>reset</button>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    counter: state.counter,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    incrementCounter: () => dispatch(ActionCreators.increment()),
    decrementCounter: () => dispatch(ActionCreators.decrement()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CounterReduxMapState);





