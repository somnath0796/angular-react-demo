import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const contentNode = 'My React Component';
	const currCity = "Bangalore";
    return (
      <div className='App'>
        <h2>{ contentNode }</h2>
		 <form>
          <p>City : </p>
          <select name='selCity'>
            <option>Delhi</option>
            <option>Mumbai</option>
            {currCity==='Bangalore' ? null : <option>Bangalore</option>}
			</select>
		</form>
      </div>
    );
  }
}

export default App;
