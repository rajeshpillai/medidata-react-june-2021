import Actions from './actions';

const ActionCreators = {
  increment: () => ({ type: Actions.INCREMENT }),
  decrement: () => ({ type: Actions.DECREMENT }),
  reset: () => ({ type: Actions.RESET }),
  addMessage: (message) => ({ type: Actions.ADD_MESSAGE, message }),
  removeMessage: (index) => ({ type: Actions.REMOVE_MESSAGE, index })
}

export default ActionCreators;