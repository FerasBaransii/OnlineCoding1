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
        <h1>Your React App</h1>
        <Route path="/" exact component={Lobby} />
        <Route path="/CodeBlockPage/:item" component={CodeBlockPage} />

        
        <Route path="/test" component={TestComponent} />
      </div>
    </Router>
    
  );
}

export default App;
