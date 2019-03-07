import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Outlet from './Outlet';


class App extends Component {

  render() {
    const contentNode = 'React Component';
    return (
      <div className='app'>
        <h1>React Router Demo</h1>
        <NavBar />
        <Outlet />
      </div>
    );
  }
}



export default App;
