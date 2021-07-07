import React from 'react';

const TodoForm = (props) => {
  return (
    <form>
    <input
      type="text"
      name="todoInput"
      onChange={props.handleInput}
      value={props.todoInput}
      />
      <button onClick={(event) => props.addTodo(event)}>Add Todo</button>
    </form>
  )
};

export default TodoForm;
