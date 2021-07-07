import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ addTask } from './actions/actions';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };

    this.addTask = this.addTask.bind(this);
    this.updateNewTask = this.updateNewTask.bind(this);
  }


addTask(event) {
  event.preventDefault();
  this.props.addTask({
    value: this.state.newTask,
    complete: false
  });
}

updateNewTask(event) {
  this.setState({
    newTask: event.target.value
  });
}

  render() {
      return(
        <div className = "App">
        <h2>
          Please enter your tasks in the form below
        </h2>
        <TodoList tasks = {this.props.tasks} />
          <form onSubmit = {this.addTask}>
          <input
            onChange = {this.updateNewTask}
            placeholder = "new task"
            value = {this.state.newTask}
            />
            <button className = "submit-button"
            onClick = {this.addTask}>
               Add task to list
               </button> 
            </form>
            
          </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      tasks: state.tasks
    };
  };

  export default connect(mapStateToProps, { addTask })(App);