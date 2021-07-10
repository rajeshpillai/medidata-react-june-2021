import Actions from './actions';
export default function messengerReducer(state= [], action) {
  console.log(action, state);
  switch(action.type) {
    case Actions.ADD_MESSAGE:
      let newMessage = {...action.message};
      newMessage.id = +new Date();
      return [...state, newMessage]
      
    case Actions.REMOVE_MESSAGE:
      let remainingMessages = state.messages.filter(m => m.id !== action.payload.id);
      return [...remainingMessages];
    
    default:
      return state;
  }
}
