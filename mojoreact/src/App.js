import React, { Component } from 'react';
import User from './user';
import UserContainer from './userClass';
import './App.css';
import userContainer from './userClass';

class App extends Component {
  render() {
    //render example here className is used which is a jsx attribute as class is reserved in ES5 JS
    /**
    let contentNode = 'My React Component'
    const appContent =<h2 className='App'>{contentNode}</h2>;
    */
   const currCity = 'Hyderabad';
    return (
      //with jsx
      //appContent
      
      //without jsx Format params: 'HTML element', object, 'content text'. object here
      // refers to the className assignment
      //React.createElement('h2', null, 'My React Component');

      /*nested elements
      //for this html:
      <div>
        <h2 className='App'>My React Component</h2>
      </div>
      React.createElement('div', {className:'App'}, React.createElement('h2', null, 'My React Component'))
      */
      /**
       * If-else within a expression {exprr} is prohibited. So we can use ternary expression instead. 
       * Here's the example./
       * 
       * IIFE: Immediate invoke function expression (JS feature) (Iffy)
       * (function(){
       *  //todo
       * })();
       * However if-else can be used inside IFFE.
       * This is also permissible within expression.
       */
      <div className='App'>
      <User></User>
      <UserContainer></UserContainer>
      
      <User userName="mThanos"></User>
      <User userName="ramBabu">ramBabu@mailnahinaata.com--also I am child.</User>
        <form>
          <select name='selCity'>
            <option>Delhi</option>
            <option>Bangalore</option>
            {(currCity === 'Calcutta') ? null : <option>Hyderabad</option>}
          </select>
        </form>
      </div>
    );
  }
}

export default App;
