import React, { Component } from 'react';
import {addToDo} from './actions';
import { connect } from 'react-redux';
import './App.css';
import Todo from './Todo.js';

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
          <input type='text' placeholder='Enter a new task' value={this.state.newTask} name='newTask' onChange={this.handleInputChange}/>
          <button type='button' onClick={()=>{this.props.addToDo(this.state.newTask);this.setState({newTask:''})}} className='btn waves-effect waves-light'>Submit New Task</button>
        <ul>
          {this.props.todos.map((e,i)=><Todo key={i} data={e} index={i}/>)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      todos: state.todos
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { addToDo})(App);