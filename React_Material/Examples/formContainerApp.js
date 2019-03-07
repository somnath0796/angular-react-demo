import React, { Component } from 'react';
import './App.css';

import FormContainer from './containers/formContainer';

class App extends Component {

  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <FormContainer/>
      </div>
    );
  }
}


export default App;
