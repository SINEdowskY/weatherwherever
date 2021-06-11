import React from 'react';
import './App.css';
import Forecast from './Components/Forecast/Forecast.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WeatherWherever</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by SINEdowskY
      </footer>
    </div>
  );
}

export default App;
