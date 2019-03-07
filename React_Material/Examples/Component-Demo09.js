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
  clickHandler = (newUserName) => {
    this.setState({ Users: [
      {name : newUserName},
      {name : 'Shaktimaan'}
    ]
  })
  }

  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <User myEvent = {this.clickHandler.bind(this,'C V Raman')} userName = {this.state.Users[0].name}>Demi God</User>
        <User userName = {this.state.Users[1].name} />
        <button onClick={this.clickHandler.bind(this,'Sir MV')}>Click Me</button>
      </div>
    );
  }
}

export default App;
