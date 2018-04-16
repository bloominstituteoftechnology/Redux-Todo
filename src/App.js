import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './actions'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TodoList todos={this.props.todos} removeTodo={removeTodo} />
      </div>
    )
  }
}
App.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ todos: state })
export default connect(mapStateToProps, { addTodo, removeTodo })(App)
