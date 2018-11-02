import React from 'react';

/*
 * Takes in props:
 * -- handleInput: fn()
 * -- handleSubmit: fn()
 * -- val: ""
 */
const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="todoForm">
      <input type='text' 
        name='inputText' 
        placeholder='...todo' 
        value={props.val}
        onChange={props.handleInput} />
      <button onClick={props.handleSubmit}>Add ToDo</button>
    </form>
  );
};

export default TodoForm;