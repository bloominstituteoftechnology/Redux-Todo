import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from "../actions";
import {deleteTodo } from "../actions";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <div>
      {todos.map((todo, index) =>
        <Todo
          key={index}
          id={todo.id}
          value={todo.value}
          completed={todo.completed}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      )}
    </div>
  )

  const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
  };

  export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList)
