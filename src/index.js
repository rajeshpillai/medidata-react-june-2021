import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router, 
    Switch,
    Route,
    useParams
} from 'react-router-dom';


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
import ReduxDemo from './hooks-app/redux-demo';
import NavBar from './components/navbar';
import ViewStory from './hooks-app/story/view-story';
import CustomHookStorage from './hooks-app/custom-hook-storage';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
              <ReduxDemo />
          </Route>
          <Route path="/storyapp">
              <StoryApp />
          </Route>
          <Route path="/counter-reducer">
            <CounterReducerApp />
          </Route>

          <Route path="/custom-hook-storage">
            <CustomHookStorage />
          </Route>

          <Route path="/effects-demo" component ={EffectsDemo} />
          <Route path="/story/view/:id">
              <ViewStory />
          </Route>

        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
