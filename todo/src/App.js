import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      value: ''
    }
  }

  inputHandler = (e) => {
    console.log(this.state.value);
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <input type='text' placeholder='Your item to do' onChange={this.inputHandler}></input>
        <button type='submit'>Submit</button>
        <div className="Todo-List">The to do list will appear here</div>
      </div>
    );
  }
}

export default App;

//input handler will set the state with the input setting to state for value
// on submit, will create object in todos array {...todos} that has the value and completed set to false
//todo container will map over todos array to create items
//on click, completed value will be set to opposite.
// on click, the clear completed will remove completed items from todos array
