export function combineReducers(reducers) {
  return (state = {}, action) => {
    const nextState = {};
    for (const key in reducers) {
      // before
      nextState[key] = reducers[key](state[key], action)
      // after 
    }
    return nextState ;
  }
}