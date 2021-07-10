export default function counterReducer(state, action) {
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
