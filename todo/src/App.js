import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      newTask:''
    }
  }
  handleInputChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    return (
      <div className="App">
        <input type='text' placeholder='Enter a new task' value={this.state.newTask} name='newTask'/>
        <button type='submit' className='btn waves-effect waves-light'>Submit New Task</button>
      </div>
    );
  }
}

export default App;
