import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card 
          dark={true}
          title="Yani y Eri"
          price={1000}
          img="hoal"
        />
      </header>
    </div>
  );
}

export default App;
