import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const contentNode = 'My React Component';
	const currCity = "Bangalore";
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
		 {(() => {
          if(localStorage.getItem('user'))
              this.userName = localStorage.getItem('user')
          else
             this.userName = 'Guest';

            return <p>{this.userName}</p>
        }
        )()}
      </div>
    );
  }
}

export default App;
