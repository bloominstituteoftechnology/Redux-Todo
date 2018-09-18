import React from 'react';

const TodoForm = (props) => {
  return (
    <form>
      <input
        type="text"
        value={props.todoInput}
        onChange={props.handleInput}
        name="todoInput"
      />
      <button onClick={props.addTodo} name="addTodo">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
