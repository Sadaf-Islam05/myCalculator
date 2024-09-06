import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

const App = () => {
  return (
    <div className="container">     
      <div className="header">
        <h2>MY CALCULATOR :)</h2>
      </div>

      <div className="app">
        <Calculator />
      </div>

      <footer>
        Made with <span style={{ color: 'red' }}>♥</span> by Sadaf Islam
      </footer>
    </div>
  );
};

export default App;




