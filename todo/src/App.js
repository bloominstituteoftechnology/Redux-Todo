import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>TODO List</h1>
        <ul>
          <li></li>
          {/* Map through the list and produce them as a li */}
        </ul>
        <input id="todo" type="text" placeholder = "add todo..."/>
        <button>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default App;
