import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        type="text"
        name="newTodo"
        placeholder="What to do?"
        value={props.text}
        onChange={props.changeHandler}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
