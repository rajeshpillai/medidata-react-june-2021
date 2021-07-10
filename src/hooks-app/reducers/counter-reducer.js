import Actions from './actions';

export default function counterReducer(state, action) {
  console.log(action);
  switch(action.type) {
    case Actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case Actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case Actions.RESET:
      return {
        ...state,
        counter: Number(action.value)
      }
    default:
      return state;
  }
}
