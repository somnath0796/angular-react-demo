import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
	  React.createElement('div',{className:'App', id:'myDiv'},React.createElement('p', null, 'React Component'))
	 
	);
  }
}

export default App;
