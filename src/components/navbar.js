import React from 'react';

import {
  Link
} from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="navbar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/storyapp">Story App</Link></li>
      <li><Link to="/counter-reducer">Counter Reducer</Link></li>
      <li><Link to="/effects-demo">Effects Demo</Link></li>
      <li><Link to="/redux-perf">Redux Performance</Link></li>
      
    </ul>
  );
}