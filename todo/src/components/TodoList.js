import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from "../actions";

const TodoList = ({ todos, toggleTodo }) => (
    <div>
      {todos.map((todo, index) =>
        <Todo
          key={index}
          value={todo.value}
          completed={todo.completed}
          toggleTodo={() => toggleTodo(index)}
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
