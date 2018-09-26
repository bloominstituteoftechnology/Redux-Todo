import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input 
        name='inputText'
        type='text'
        value={props.inputText}
        placeholder='Add todo' 
        onChange={props.handleInput} 
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
    </form>
  );
}

export default TodoForm;