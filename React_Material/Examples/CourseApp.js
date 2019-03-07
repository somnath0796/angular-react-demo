import React, { Component } from 'react';
import './App.css';
import Course from './Course/Course';

class App extends Component {

  courses = [
    {name : 'Angular', duration : 2},
    {name : 'React', duration : 1}
  ];

  render() {
    const contentNode = 'React Component';
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
        <Course name={this.courses[0].name} duration={this.courses[0].duration}>
          A comprehensive course on Angular
        </Course>
        <Course name={this.courses[1].name} duration={this.courses[1].duration}>
          Getting up and running with React
        </Course>

      </div>
    );
  }
}



export default App;
