import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer/UserContainer';

class App extends Component {
  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
      
        <UserContainer></UserContainer>

      </div>
    );
  }
}



export default App;
