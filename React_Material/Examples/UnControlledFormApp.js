import React, { Component } from 'react';
import './App.css';

import UncontrolledForm from './uncontrolledForm/uncontrolledForm';

class App extends Component {


  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
		
        <UncontrolledForm />

      </div>
    );
  }
}



export default App;
