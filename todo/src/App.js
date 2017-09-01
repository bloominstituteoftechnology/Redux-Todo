import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  putTodosFromLocalStorage
} from './actions'

import {
  AddTodo,
  ListTodos
} from './components'

class App extends Component {
  componentWillMount = () => {
    if (localStorage.todos) {
      console.log()
      this.props.putTodosFromLocalStorage(
        JSON.parse(localStorage.todos)
      )
    }
  }

  componentWillReceiveProps({todos}) {
    if(todos.length === 0) {
      localStorage.removeItem('todos')
    } else {
      const jsonTodos = JSON.stringify(todos)
      if (jsonTodos !== localStorage.todos) {
        localStorage.todos = jsonTodos
      }
    }
  }
  
  render() {
    return (
      <div>
        <AddTodo/>
        <ListTodos/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, {putTodosFromLocalStorage})(App)


