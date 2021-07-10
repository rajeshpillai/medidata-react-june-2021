import React, {useReducer, useState} from 'react';
import {Provider} from 'react-redux';
import CounterReduxMapState from './counter-redux-mapstate';
import CounterReduxUse from './counter-redux-use';

import store from './store';


export default function ReduxDemo() {
  return(
    <Provider store={store}>
      <h2>Modern Redux</h2>
      <CounterReduxUse  />
      <hr/>
      <h2>Old Redux</h2>
      <CounterReduxMapState />
    </Provider>
  );
}