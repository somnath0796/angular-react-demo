import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  state = {
    Users : [
      {name : 'Lakshman'},
      {name : 'Sam'}
    ]
  }
  clickHandler = (e) => {
    this.setState({ Users: [
      {name : 'Thor'},
      {name : 'Shaktimaan'}
    ]
  })
  }

  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <User myEvent = {this.clickHandler} userName = {this.state.Users[0].name}>Demi God</User>
        <User userName = {this.state.Users[1].name} />
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default App;
