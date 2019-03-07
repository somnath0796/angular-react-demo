import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    //const appElement = <h2 className='App'>React Component</h2>;
	
	// Note the absence of quotes around the <h2> block
	
    return (
	  React.createElement('h2',null,'React Component')
	 
	);
  }
}

export default App;
