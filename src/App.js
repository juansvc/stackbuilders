import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Pico & Placa Predictor</h2>
      </header>
      {/* Adding form.js to App */}
      <Form />
    </div>
  );
}

export default App;
