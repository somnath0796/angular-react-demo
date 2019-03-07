import React, { Component } from 'react';
import './App.css';

import BootStrapDemo from './bootstrapDemo';


class App extends Component {



  render() {
    const contentNode = 'React Component';
    

    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <BootStrapDemo />      
      </div>
    );
  }
}



export default App;
