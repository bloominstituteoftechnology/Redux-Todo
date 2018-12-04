import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { connect } from 'react-redux'
import { addTask, removeTask, toggleTask } from './actions'
import TodoForm from './components/TodoForm';


class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoList tasks={this.props.tasks} toggleTask={this.props.toggleTask} />
        <TodoForm addTask={this.props.addTask} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (text, id) => dispatch(addTask(text, id)),
    removeTask: (task) => dispatch(removeTask(task)),
    toggleTask: (task) => dispatch(toggleTask(task))
  }
}

const withState = connect(
  mapStateToProps,
  {
    addTask: addTask,
    removeTask: removeTask,
    toggleTask: toggleTask
  }
)

const Enhanced = withState(App)

export default Enhanced;
