import React from 'react';

const TodoForm = props => {
  return (
    <div className="todo-form">
      <input
        name="todoText"
        value={props.todoText}
        type="text"
        onChange={props.handleInputChange}
        placeholder="Add to-do"
      />
      <button type='submit' onClick={props.addTodo}>Add</button>
    </div>
  );
};

export default TodoForm;