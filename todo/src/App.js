import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTask } from './actions';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };
    this.addTask = this.addTask.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    this.props.addTask({
      value: this.state.newTask,
      complete: false
    });
    this.setState({
      newTask: ''
    });
  }

  handleNewTask(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTask}>
          <input
            onChange={this.handleNewTask}
            placeholder="new task"
            value={this.state.newTask}
          />
        </form>
        <TodoList tasks={this.props.tasks} />
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