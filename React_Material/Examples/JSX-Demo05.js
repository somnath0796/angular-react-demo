import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const contentNode = 'My React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
		 <p>{ Math.PI.toFixed(2) }</p>
      </div>
    );
  }
}

export default App;
