import React, {useReducer, useState} from 'react';
import {Provider} from 'react-redux';
import CounterRedux from './counter-redux';
import store from './store';


export default function ReduxDemo() {
  return(
    <Provider store={store}>
      <CounterRedux />
    </Provider>
  );
}