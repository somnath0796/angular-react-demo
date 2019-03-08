import React, { Component } from 'react';
import User from './user';
import UserContainer from './userClass';
import './App.css';
import Avenger from './avenger'
import Clock from './Clock';
import Post from './Post'

class App extends Component {

  state = {
    Avengers : [
      {id :2010, name: 'Thor', power: 'Lightning/Mjolnir'},
      {id :2008, name: 'IronMan', power: 'Technology/Suit'},
      {id :2011, name: 'Captain America', power: 'Strength/Shield'},
      {id :2009, name: 'Hulk', power: 'Strength/Smash'},
      
    ]
  }
  /**
   * submitHandler = (e) => {
    e.preventDefault();
    alert(this.refs.txtFname.value);
  }
   */
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      Avengers : [
        ...
        {id :2010, name: 'myAvenger', power: 'Lightning/Mjolnir'},
      ]
  })
  }

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
      /** 
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
        //controlled forms
        <form onSubmit={this.submitHandler}>
        <input type='text' name='txtFname' value={this.state.Avengers[0].name} onChange={this.changeHandler}/>
        <br/>
        <input type='Submit' value='Submit' />
      </form>
      </div>
      */
     <div className='App'>
        {this.state.Avengers.map(avenger => {
          return(<Avenger name={avenger.name} 
            power={avenger.power} key={avenger.id}></Avenger>)
        })
      }
      <br/>
      
      
      <Clock></Clock>
      <Post></Post>
     </div>
      
    );
  }
}

export default App;
