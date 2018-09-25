import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input 
        value={props.inputText}
        placeholder='task' 
        onChange={props.handleInput} 
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
    </form>
  );
}

export default TodoForm;