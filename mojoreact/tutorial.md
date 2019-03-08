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

  **--save** will add as a dependency in package.json.

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
 Also state is available in **class-based component** as it requires extends from Component.
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

 This is demonstated by e in _userClass.js_

 ## Dynamic Instances of Components

 Refer ``` avenger.js ``` for the component description. We will be passing the state in the App.js
 Note every state object will have a **unique id** so as to React can differentiate them uniquely. This feature is applicable for feed like apps where each post is a component which is populated by different data.

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

 ## Styling Components 

 - CSS Style (component_name.css : ``` import './App.css';) ```
 - Inline Style  (refer Avenger.js avengeDes const.)
 - CSS in JS (css is defined in js like json and imported as module)
 - CSS modules (created as psudo class) Example:
 ```
 :local(.CSSModule) {
     margin : 40px;
     border: 5px dashed blue;
 }

-- in Component --
 import styles from './CSSModule.css';
    ....
 <div className={styles.CSSModule}>Content</div>
    ....

 ```

 **Bootstrap and React**

 Can be added as: 
 - Bootstrap CDN
 - Can be include as js files bootstrap.js, jquery.js, popper.js
 - React bootstrap package where bootstrap component is rebuilt as React Component.(popular)
  A package library called reactstrap needs to be installed for this.

    ``` npm install --save bootstrap ```
    ``` npm install --save reactstrap ```

    import the Bootstrap css in src/index.js
    ``` import 'bootstrap/dist/css/bootstrap.min.css'; ```

## React Forms

Two approaches of React Forms:
 - Uncontrolled input
    Is more like how you use HTML 5 Forms. They are not bound to anything. The elements are defined with ref which is stored in a refs collection. They are referenced by this.refs.<refName>.<attribute>.

    Also the elements in JSX syntax like in textbox have value attribute for default . Now that has to have a prefix as default. e.g. defaultValue. Refer App.js

    ```
      submitHandler = (e) => {
        e.preventDefault();
        alert("favourite avenger: "+this.refs.txtFname.value);
        }
      <form onSubmit={this.submitHandler}>
        <input type='text' name='txtFname' ref='txtFname' defaultValue='Enter Favourite Avenger?'/>
        <br/>
        <input type='Submit' value='Submit' />
      </form>
    ```

 - Controlled input
    binding of state with the form element. If the state changes, 
    ```
     <form onSubmit={this.submitHandler}>
        <input type='text' name='txtFname' value={this.state.Avengers[0].name} onChange={this.changeHandler}/>
        <br/>
        <input type='Submit' value='Submit' />
      </form>
    ```

    They can be validated using validator library. pre-built package is validator.


## Component Lifecycle Stages

React component's lifecycle methods is divided into 4 phases:

- Initialization (IIFE) and initialization
- Mounting: mounting to virtual DOM.
    - constructor() 
    - render() : prepare the JSX code
    - componentDidMount(): used to load data from a remote endpoint (ajax calls)
- Updating
    - shouldComponentUpdate()
    - render() for state or prop values change.
    - getSnapshotBeforeUpdate() take a snapshot of the virtual DOM
    - componentDidUpdate()
- Unmounting
    - componentWillUnmount() : After the component is unmounted and destroyed and this method is invoked. end of lifecycle.

refer _Clock.js_

## React Routing

To route the requests to different 
Need to install this package.

``` npm install --save react-router-dom ```

- Browser Router
 - Helps to build classic URLs and is recommended
 - requires server config for Dynamic requests
- Hash Router
 - applicable for Static webpages.

 Three important components working with React Router

 - Browser Router: 
 wraps all Route Components: route is where the component is renders
 - Link (navigator links) NavLink.js
 - Route (Routes to the component render) Outlet.js
```
 ReactDom.render(
     (
         <Router> 
        <App />
        </Router>), document.getElementById('root'));
```

Refer React_Materials/Examples/[Navbar.js][Home.js][Outlet.js]

## React Data requests

Does not provide any hard-set metod for fetching  data. Does not even know if there is a server.
Data is present in state or props. That's all which are rendered.

To fetch data from server, Http library is required -> use libraries to achieve:
- Use Promises? Go with axios
- Use callbacks? Check superagent
- Browser based window.fetch()

It does not matter what you use, everyone uses XMLHttpRequest() only.

But it is believed that Axios and React work well.
``` npm install --save axios ```

Refer _Post.js_. Here Promise implementation of fetching data is used. Bind the handler to the Component.

axios also helps in POST.


**_Choose what you want at your necessity for ReactJS Library_**

## Testing in React



### REDUX

