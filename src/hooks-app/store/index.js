import {createStore, combineReducers} from 'redux';
import counterReducer from '../reducers/counter-reducer';
import messengerReducer from '../reducers/messenger-reducer';

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

const rootReducer = combineReducers({
  counter: counterReducer,  
  messages: messengerReducer
})


const store = createStore(rootReducer);

export default store;