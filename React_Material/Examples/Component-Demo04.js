import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  state = {
    Users : [
      {name: 'Lakshman'},
      {name : 'Sam'}
    ]
  }
  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <p>{ Math.PI.toFixed(2) }</p>
        <User userName = {this.state.Users[0].name}>Lakshman M N</User>
        <User userName = {this.state.Users[1].name} />
      </div>
    );
  }
}

export default App;
