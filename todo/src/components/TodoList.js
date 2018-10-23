import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from "../actions";

const TodoList = ({ todos, toggleTodo }) => (
    <div>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          value={todo.value}
          completed={todo.completed}
          toggleTodo={() => toggleTodo(todo.id)}
        />
      )}
    </div>
  )

  const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
  };

  export default connect(mapStateToProps, { toggleTodo })(TodoList)
