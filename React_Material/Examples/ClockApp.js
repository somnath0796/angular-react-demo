import React, { Component } from 'react';
import './App.css';

import Clock from './Clock';


class App extends Component {

  render() {
    const contentNode = 'React Component';
  
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <Clock />
      </div>
    );
  }
}



export default App;
