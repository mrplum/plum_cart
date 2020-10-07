import React from 'react';
import bocaShirt from './public/images/camBoca.png';
import './App.css';

import Card from "./components/Card";

function App() : JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card 
          dark={true}
          img={bocaShirt}
          title="Yani y Eri"
          price={1000}
        />

        <Card 
          dark={true}
          title="Yani y Eri"
          price={1000}
        />
      </header>
    </div>
  );
}

export default App;
