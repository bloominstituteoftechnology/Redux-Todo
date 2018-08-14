import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo} from './actions'; 

class App extends Component {

  newItem = event => {
    event.preventDefault(); 
    const name = this.input.value; 
    this.input.value = ''
    addTodo(name,false); 
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>TODO List</h1>
        <ul>
          <li></li>
          {/* Map through the list and produce them as a li */}
        </ul>
        <input id="todo" type="text" placeholder = "add todo..."
        ref={(input) => this.input = input}/>
        {/* allows us to access the input value with adding a prop */}
        <button onClick= {this.newItem}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default App;
