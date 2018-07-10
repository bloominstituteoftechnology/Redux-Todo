import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'

class TodoList extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('in mapStateToProps', state.todos)
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, null)(TodoList)
