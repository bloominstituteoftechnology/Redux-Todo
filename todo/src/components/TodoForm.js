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
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.deleteTodo}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;