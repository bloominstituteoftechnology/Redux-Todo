import React, { Component } from 'react';
import Todo from './Components/Todo'
import { addTask, toggleCompletion, clearCompletedTasks } from './Actions/actionsIndex'

class App extends Component {

  state = {
    newTask: {
      task: '',
      complete: false
    },
    todos: this.props.todos
  }

  addTask = event => {
    event.preventDefault()
    let newTask = {...this.state.newTask, id: Math.floor(Math.random()*1000000)}
    this.props.addTask(newTask)
    this.setState({ newTask: {...this.state.newTask, task: '', completed: false }})
  }

  handleChangeEvent = event => {
    this.setState({ newTask: {...this.state.newTask, task: event.target.value }})
  }

  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
