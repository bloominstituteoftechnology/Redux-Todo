import React, { Component } from 'react'
import TodoForm from '../containers/TodoForm'
import TodoList from '../containers/TodoList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h2>The ToDo List</h2>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default App
