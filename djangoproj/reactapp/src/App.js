// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Lobby from './screens/Lobby';
import CodeBlockPage from './screens/CodeBlockPage';
import TestComponent from './screens/TestComponent';  // Add this import

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Lobby} />
        <Route path="/CodeBlockPage/:code_block_id" component={CodeBlockPage} />
        <Route path="/test" component={TestComponent} />
      </div>
    </Router>
    
  );
}

export default App;
