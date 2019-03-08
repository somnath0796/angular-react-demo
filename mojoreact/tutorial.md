### REACTJS
- author : mThanos







## Creation of Components

**Two Ways:**

- Functional Components (Stateless/Presentational)

 -- refer user.js

- Class-based Components (Stateful/container)
    extends from React.Component
 -- refer userClass.js 

 ## Components Props

 To pass some data to components, props can be benficial. props stand for properties.
  we have modified the user.js to demo that.

  Props are Immutable.

  Props can be validated using prop validation library. This is essential to check if valid props are selected. e.g. userName is written as number or a number field has a String.
  
  ``` npm install --save prop-types ```

  ** --save ** will add as a dependency in package.json.

  To import into a component you can use this:
  ``` import PropTypes from 'prop-types'; ```

  It will thus validate with the check and displayed in development build. Prop validation has been added in the user.js file. This will generate an warning, for every String passed
   
  ``` 
  user.propTypes = {
     userName : PropTypes.number
    }
  ```
    Can be chained with the type to enforce them. PropTypes.string.isRequired

  Multiple type validation:
  To validate multiple possibilities.
  ``` 
  user.propTypes = {
     userName : PropTypes.oneOfType([
             PropTypes.number,
             PropTypes.string
         ])
    }
  ```

  
 ## Components State

 State is used to force some data into the component. A state change implicitly re-renders the component. Thus state object should contain least data to avoid frequent re-rendering. 
 Also state is available in ** class-based component ** as it requires extends from Component.
 state is a keyword in React.

 Functional Components can also have state by a mechanism called Hooks. It is experimental in latest react at the time of writing.

 Example of State is provided in ``` userClass.js ``` 

 State can be changed only using methods. Should not be associated with an existing method.
 States can be changed within the component where it's defined using method. setState() is the method to be used.

 ```
    clickHandler = (e) => {
        this.setState({
            Users : [
                 {name : 'Thorwa'},
                 {name : 'A Thoo Low Key'}
            ]
        })
    }
 ```

 ## React Events

 Events are not binded as in Angular. The event is defined in camel-case. 
 ``` <button onClick = {this.clickHandler}> ```
 Understand the the handler doesn't have '()' as adding it will invoke it.

 btn.addEventListener(event, handlerMethod, bool)
 true -> capture
 false -> bubble
 capture will push the event down the hierarchy from the parent through child.
 bubble will push the event up the hirarchy from the child through parent.
 Inline event handling will always be bubble in js.

React also keeps inline as bubble by default. But React also provides the Capture option in inline.
    ``` <button onClickCapture = {this.clickHandler}> ``` by adding the Capture suffix.

React creates a SyntheticEvent for each event contains the details for the event. 
 - SyntheticEvent is a cross-browser wrapper around the browser's native event object.
 - the nativeEvent is an attribute of SyntheticEvent which gives access to actual browser event.

 This is demonstated by e in userClass.js.

 ## Dynamic Instances of Components

 Refer ``` avenger.js ``` for the component description. We will be passing the state in the App.js
 Note every state object will have a **unique id** so as to React can differentiate them uniquely.

 Here's the App.js implementation: 

 ```
  state = {
    Avengers : [
      {id :2010, name: 'Thor', power: 'Lightning/Mjolnir'},
      {id :2008, name: 'IronMan', power: 'Technology/Suit'},
      {id :2011, name: 'Captain America', power: 'Strength/Shield'},
      {id :2009, name: 'Hulk', power: 'Strength/Smash'},
      
    ]
  }
 render(){
     return (
        <div className='App'>
        {this.state.Avengers.map(avenger => {
          return(<Avenger name={avenger.name} 
            power={avenger.power} key={avenger.id}></Avenger>)
            })
        }
        </div>
     )
 }
 
 ```