import React from 'react';
import './App.css';
import TextInput from './Components/TextInput';

function App() {
  return (
    <div>
      <div className="App">
          <h1 style={{fontSize: "75px", marginBottom: "-15px", marginTop: "10px"}}>
          Frangipane
          </h1>
          <h2 style={{fontWeight: "normal"}}>Vous avez marre de passer sous la table ? Passez à Frangipane !</h2>
      </div>
      <div>
        <TextInput></TextInput>
      </div>
    </div>
  );
}

export default App;
