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
  clickHandler = (e) => {
    alert("Current Target " + e.currentTarget);
    alert("Type " + e.type);
    alert("NativeElement " + e.nativeEvent);
    alert("Bubbles " + e.bubbles);
  }
  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <User userName = {this.state.Users[0].name}>Lakshman M N</User>
        <User userName = {this.state.Users[1].name} />
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default App;
