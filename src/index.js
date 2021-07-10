import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import CounterApp from './features/counter/counter-app';
import Counter from './hooks-app/counter';
import MultipleStates from './hooks-app/multiple-state';
import EffectsDemo from './hooks-app/effects-demo';
import StoryApp from './hooks-app/story/story-app';
import ThemeProvider from './context/theme-provider';
import CounterReducerApp from './hooks-app/usereducer-app';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CounterReducerApp/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
