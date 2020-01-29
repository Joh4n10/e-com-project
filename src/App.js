import React from 'react';
import './App.css';
import { Routing } from './Routing/routing';
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './Components/Footer/footer'
function App() {
  return (
    /*header*/
    <>
      <Router>
        <Routing />
      </Router>
      <Footer />
    </>
  );
}

export default App;
