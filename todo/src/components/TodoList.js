import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => (
    <ul>
      {todos.map(todo =>
        <div key={todo.value}>
            {todo.value}
        </div>
      )}
    </ul>
  )

  const mapStateToProps = state => ({
    todos: state.todos
  })

  export default connect(mapStateToProps)(TodoList)
