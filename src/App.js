import React from 'react';
import pokemon from "./Pokemon";
import Pokedex from "./Pokedex";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-h1" > Pokedex! </h1>
        <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
