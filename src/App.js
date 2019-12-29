import React from 'react';
import './App.css';
import { Routing } from './Routing/routing';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    /*header*/
    <Router>
      <Routing />
    </Router>
    /*footer*/
  );
}

export default App;
