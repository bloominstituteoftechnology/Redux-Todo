import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODOS LIST</h1>
        <Todos todos={this.props.todos}/>
        <TodoForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos
})

export default connect(mapStateToProps)(App)
