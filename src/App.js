import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Knappen from './Knapp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Velkommen til Tore Gard CV</h2>
            <Hello toWhat="World Booler" />

        </div>

              <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>

              <Knappen />
          </div>
      </div>

    );
  }
}

export default App;
