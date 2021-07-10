import Actions from './actions';

export default function counterReducer(state = 0, action) {
  console.log(action, state);
  switch(action.type) {
    case Actions.INCREMENT:
      console.log("INCREMENT:******");
      return state + 1;
    case Actions.DECREMENT:
      return state - 1;
    case Actions.RESET:
      return Number(action.value)
    default:
      return state;
  }
}
