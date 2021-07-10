import Actions from './actions';
export default function messengerReducer(state, action) {
  console.log(action);
  switch(action.type) {
    case Actions.ADD_MESSAGE:
      let newMessage = {...action.payload};
      newMessage.id = +new Date();

      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    case Actions.REMOVE_MESSAGE:
      let remainingMessages = state.messages.filter(m => m.id !== action.payload.id);
      return {
        ...state,
        messages: [...remainingMessages]
      }
    
    default:
      return state;
  }
}
