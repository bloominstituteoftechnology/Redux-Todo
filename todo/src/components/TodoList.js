import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
    <div>
      {todos.map(todo =>
        <Todo
          key={todo.value}
          value={todo.value}
          completed={todo.completed}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </div>
  )

  const mapStateToProps = state => ({
    todos: state.todos
  })

  export default connect(mapStateToProps)(TodoList)
