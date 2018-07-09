import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo } from '../components/Todo'

class TodoList extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => {
            return <Todo todo={todo} key={todo} />
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps)(TodoList)
