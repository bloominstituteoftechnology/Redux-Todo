import React from 'react';

const TodoInput = props => {
  return (
    <div>
      <input 
        type="text"
        value={props.inputText}
        placeholder="Add Todo"
        onChange={props.onInputChange}
      />
      <button onClick={props.addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoInput;