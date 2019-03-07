import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <p>{ Math.PI.toFixed(2) }</p>
        <User userName='Lakshman' />
        <User userName='Sam' />
      </div>
    );
  }
}

export default App;
